import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CalendarContainer from "./CalendarContainer";
import {
  selectAllEvents,
  selectDaysOfEvents,
  setAllEvents,
} from "./features/events/eventsSlice";
import SingleDayEvents from "./features/events/SingleDayEvents";

const Container = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [day, setDay] = useState(new Date().getDate());
  const [daysInMonth, setDaysInMonth] = useState(null);
  const [days, setDays] = useState([]);
  const [detailed, setDetailed] = useState(false);

  const dispatch = useDispatch();
  const events = useSelector(selectAllEvents);
  const withEvents = useSelector(selectDaysOfEvents);

  useEffect(() => {
    const locStorage = window.localStorage.getItem("calendarAppEvents");
    if (locStorage) {
      dispatch(setAllEvents(JSON.parse(locStorage)));
    }
  }, []);

  useEffect(() => {
    setDaysInMonth(new Date(year, month + 1, 0).getDate());
  }, [year, month]);

  useEffect(() => {
    const allDates = [];
    for (let i = 1; i <= daysInMonth; i++) {
      allDates.push(new Date(year, month, i));
    }
    setDays(allDates);
  }, [daysInMonth, year, month]);

  useEffect(() => {
    if (events) {
      window.localStorage.setItem("calendarAppEvents", JSON.stringify(events));
    }
  }, [events]);

  const dates = useMemo(() => {
    let datesCopy = days.concat();
    let sortedDates = [];
    const weekdays = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let i = 0;
    while (datesCopy.length) {
      let week = [];
      for (const day of weekdays) {
        if (days[i]?.toLocaleString("en-US", { weekday: "long" }) === day) {
          const newDay = datesCopy.shift();
          const events = withEvents.includes(i + 1) ? true : false;
          week.push({ day: i + 1, date: newDay, active: true, events });
          i++;
        } else {
          week.push({ day: null, date: null, active: false });
        }
      }
      sortedDates.push(week);
    }
    return sortedDates;
  }, [month, days, events]);

  if (!days.length) {
    return <div>Loading...</div>;
  }

  return (
    <div id="main-container">
      {days.length && (
        <CalendarContainer
          sortedDates={dates}
          setDetailed={setDetailed}
          setDay={setDay}
          year={year}
          setYear={setYear}
          month={month}
          setMonth={setMonth}
          day={day}
        />
      )}
      <SingleDayEvents
        day={new Date(year, month, day, 12)}
        show={detailed}
        setShow={setDetailed}
      />
    </div>
  );
};

export default Container;
