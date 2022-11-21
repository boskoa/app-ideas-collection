import { useSelector } from "react-redux";
import { selectEventsByDay } from "./eventsSlice";
import SingleEvent from "./SingleEvent";

const SingleDayEvents = ({ day, show, setShow }) => {
  const events = useSelector((state) => selectEventsByDay(state, day));

  return (
    <div
      className={`${(!show || !events.length) && "events-hide"} events-show`}
    >
      <button
        id="close-button"
        className="fa fa-close"
        onClick={() => setShow(false)}
      />
      <h4>Events:</h4>
      {events.map((e) => (
        <SingleEvent key={e.id} event={e} />
      ))}
    </div>
  );
};

export default SingleDayEvents;
