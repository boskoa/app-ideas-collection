import { useState } from "react";
import AddNewEvent from "./features/events/AddNewEvent";
import Alarm from "./features/events/Alarm";
import MonthInput from "./MonthInput";
import YearInput from "./YearInput";

const CalendarContainer = ({
  sortedDates,
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
                    } ${selected === d.day && "selected-date"} ${
                      d.events && "with-events"
                    }`}
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
      <Alarm />
    </div>
  );
};

export default CalendarContainer;
