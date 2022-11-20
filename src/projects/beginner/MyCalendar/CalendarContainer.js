import { useState } from "react";
import AddNewEvent from "./features/events/AddNewEvent";
import MonthInput from "./MonthInput";
import YearInput from "./YearInput";

const CalendarContainer = ({
  dates,
  setDetailed,
  setDay,
  year,
  setYear,
  month,
  setMonth,
  day,
}) => {
  const [selected, setSelected] = useState(new Date().getDate());
  const today = new Date()
    .toLocaleString("sv", { timeZone: "Europe/Paris" })
    .slice(0, 10);
  let datesCopy = dates.concat();
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
      if (dates[i]?.toLocaleString("en-US", { weekday: "long" }) === day) {
        const newDay = datesCopy.shift();
        week.push({ day: i + 1, date: newDay, active: true });
        i++;
      } else {
        week.push({ day: null, date: null, active: false });
      }
    }
    sortedDates.push(week);
  }

  return (
    <div>
      <div id="inputs">
        <YearInput year={year} setYear={setYear} />
        <MonthInput month={month} setMonth={setMonth} />
      </div>
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        <tbody>
          {sortedDates.map((w, i) => {
            return (
              <tr key={i}>
                {w.map((d, i) => (
                  <td
                    align="center"
                    key={i}
                    className={`${d.active ? "current" : "not-current"} ${
                      d.date
                        ?.toLocaleString("sv", { timeZone: "Europe/Paris" })
                        .slice(0, 10) === today && "today"
                    } ${selected === d.day && "selected-date"}`}
                    onClick={() => {
                      setDay(d.day);
                      setSelected(d.day);
                      d.active && setDetailed(true);
                    }}
                  >
                    {d.day}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <AddNewEvent year={year} month={month} day={day} />
    </div>
  );
};

export default CalendarContainer;
