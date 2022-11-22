import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeEvent, updateEvent } from "./eventsSlice";

const SingleEvent = ({ event }) => {
  const [show, setShow] = useState(false);
  const [reminder, setReminder] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (event) {
      setReminder(event.reminder);
      setTitle(event.title);
      setContent(event.content);
      setDate(new Date(event.date).toISOString().substring(0, 10));
    }
  }, [event]);

  if (!event) {
    return <div />;
  }

  const handleUpdate = () => {
    let selectedDate = null;
    if (reminder) {
      selectedDate = new Date(date);
      selectedDate.setDate(selectedDate.getDate() - reminder);
    }
    dispatch(
      updateEvent({
        id: event.id,
        changes: {
          title,
          content,
          date: new Date(date).toString(),
          reminder: selectedDate ? selectedDate.toString() : selectedDate,
        },
      })
    );
    setShow(false);
  };

  const handleDelete = () => {
    dispatch(removeEvent(event.id));
  };

  return !show ? (
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
      <button
        id="update-button"
        className="fa fa-pencil"
        onClick={() => setShow(!show)}
      />
    </div>
  ) : (
    <div className="single-event">
      <div className="new-event-button">
        <div className={`new-event ${show && "show-new-event"}`}>
          <p>Change event</p>
          <div className="new-input">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="new-input">
            <label htmlFor="content">Content</label>
            <input
              type="text-area"
              value={content}
              name="content"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="new-input">
            <label htmlFor="date">Date (YYYY-MM-DD): </label>
            <input
              id="date"
              type="text"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="new-input">
            <label htmlFor="reminder">Reminder (days before the event): </label>
            <input
              id="reminder"
              type="number"
              name="reminder"
              min="0"
              max="370"
              value={reminder || 0}
              onChange={(e) => setReminder(Number(e.target.value))}
            />
          </div>
          <button onClick={handleUpdate}>Update event</button>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
