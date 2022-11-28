import axios from "axios";
import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import "./bookFinderApp.css";
import { apps } from "../../../applications";
import BooksContainer from "./BooksContainer";

const BookFinderApp = () => {
  const [books, setBooks] = useState([]);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const app = apps[8];

  const fetchBooks = async () => {
    setLoading(true);
    const response =
      await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${term}
`);
    setBooks(response.data.items);
    setLoading(false);
  };

  useEffect(() => {
    if (term.length > 1) {
      fetchBooks();
    }
  }, [term]);

  return (
    <div id="main-container">
      <h3>{app.name}</h3>
      <SearchForm setTerm={setTerm} />
      <BooksContainer books={books} loading={loading} />
    </div>
  );
};

export default BookFinderApp;
