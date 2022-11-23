import { Provider } from "react-redux";
import { apps } from "../../../applications";
import store from "./app/store";
import SingleEvent from "./features/events/SingleEvent";
import "./myCalendar.css";
import Container from "./Container";

const MyCalendar = () => {
  const app = apps[7];

  return (
    <Provider store={store}>
      <div id="calendar-container">
        <h3>{app.name}</h3>
        <SingleEvent />
        <Container />
      </div>
    </Provider>
  );
};

export default MyCalendar;
