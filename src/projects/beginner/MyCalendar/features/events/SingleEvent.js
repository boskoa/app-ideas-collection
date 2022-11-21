import { useDispatch } from "react-redux";
import { removeEvent } from "./eventsSlice";

const SingleEvent = ({ event }) => {
  const dispatch = useDispatch();

  if (!event) {
    return <div />;
  }

  const handleDelete = () => {
    console.log("REOVE", event.id);
    dispatch(removeEvent(event.id));
  };

  return (
    <div className="single-event">
      <button
        id="trash-button"
        className="fa fa-trash"
        onClick={handleDelete}
      />
      <p>
        {event.date
          .toLocaleString("sv", { timeZone: "Europe/Paris" })
          .slice(0, 15)}
      </p>
      <p>Title: {event.title}</p>
      <p>Content: {event.content}</p>
      <p>Reminder: {event.reminder ? event.reminder.slice(0, 10) : "none"}</p>
    </div>
  );
};

export default SingleEvent;
