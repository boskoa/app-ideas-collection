import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectEventsByActiveReminders } from "./eventsSlice";

const Alarm = () => {
  const [show, setShow] = useState(false);
  const reminders = useSelector(selectEventsByActiveReminders);

  useEffect(() => {
    if (reminders.length) {
      setShow(true);
    }
  }, [reminders]);

  const handleClose = () => {
    setShow(false);
    const index = setTimeout(() => setShow(true), 60000);
    return () => clearTimeout(index);
  };

  return show ? (
    <div className="reminders-container single-event alarm">
      <button id="close-button" className="fa fa-close" onClick={handleClose} />
      <p>
        <strong>Upcomming events: </strong>
      </p>
      {reminders.map((r) => {
        return (
          <div key={r.id}>
            <p>
              {r.date.slice(0, 10)} {r.title}
            </p>
          </div>
        );
      })}
    </div>
  ) : (
    <div />
  );
};

export default Alarm;
