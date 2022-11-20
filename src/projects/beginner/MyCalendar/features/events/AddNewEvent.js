import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent, selectEventIds } from "./eventsSlice";

const AddNewEvent = ({ year, month, day }) => {
  const [show, setShow] = useState(false);
  const [reminder, setReminder] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const id = useSelector(selectEventIds).length;
  const dispatch = useDispatch();

  console.log("IDS", id, day);

  const handleNewEvent = () => {
    let selectedDate = null;
    if (reminder) {
      selectedDate = new Date(year, month, day, 12);
      selectedDate.setDate(selectedDate.getDate() - reminder);
    }
    const date = new Date(year, month, day, 12).toString();
    console.log("RIMAJNDER", year, month, day, date);
    dispatch(
      addEvent({
        id,
        date,
        reminder: selectedDate.toString(),
        title,
        content,
      })
    );
  };

  return (
    <div className="new-event-button">
      <button onClick={() => setShow(!show)}>Add new event</button>
      <div className={`new-event ${show && "show-new-event"}`}>
        <p>New event for {new Date(year, month, day, 12).toDateString()}</p>
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
          <label htmlFor="reminder">Reminder (days before the event): </label>
          <input
            id="reminder"
            type="number"
            name="reminder"
            value={reminder}
            onChange={(e) => setReminder(Number(e.target.value))}
          />
        </div>
        <button onClick={handleNewEvent}>Create new event</button>
      </div>
    </div>
  );
};

export default AddNewEvent;
