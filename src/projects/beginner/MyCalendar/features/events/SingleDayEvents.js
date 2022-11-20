import { useSelector } from "react-redux";
import { selectEventsByDay } from "./eventsSlice";
import SingleEvent from "./SingleEvent";

const SingleDayEvents = ({ day, show, setShow }) => {
  const events = useSelector((state) => selectEventsByDay(state, day));
  console.log("SINGLE DAY", day, events);

  return (
    <div
      className={`${(!show || !events.length) && "events-hide"} events-show`}
    >
      <h3>Events:</h3>
      {events.map((e) => (
        <SingleEvent key={e.id} event={e} />
      ))}
      <button onClick={() => setShow(false)}>close</button>
    </div>
  );
};

export default SingleDayEvents;
