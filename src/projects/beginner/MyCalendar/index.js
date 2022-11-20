import { Provider } from "react-redux";
import { apps } from "../../../applications";
import store from "./app/store";
import SingleEvent from "./features/events/SingleEvent";
import "./myCalendar.css";
import Container from "./Container";

const MyCalendar = () => {
  const app = apps[7];
  console.log(store.getState());

  // Napraviti redux za događaje (datum objekat, podsetnik datum objekat, naslov podsetnika, tekst podsetnika).

  // Napraviti funkciju za određivanje broja dana u odabranom mesecu.
  // Napraviti stejt erej za odabrani mesec (po difoltu trenutni) - sa Date objektima za svaki dan u mesecu.
  // Napraviti stejt za odabrani datum.
  // Prilikom učitavanja dana za odabrani mesec proveriti svaki dan sa datumima unetih događaja; ako se
  // poklapaju - prikazati i događaj u toj ćeliji.

  // Napraviti kontejner koji će slajdovati kada se odabere događaj, ili datum na kom nema događaja. (formular)
  // Napraviti element za podsetnike, koji će slajdovati kad im dođe vreme

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
