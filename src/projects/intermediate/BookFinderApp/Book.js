import { useTheme } from "@emotion/react";

const Book = ({ book }) => {
  const theme = useTheme().palette.mode;

  return (
    <div id={`${theme === "dark" ? "book" : "book-light"}`}>
      <h4>
        <a
          id="book-link"
          href={book.link || "#"}
          rel="noreferrer"
          target="_blank"
        >
          {book.title}
        </a>
      </h4>
      <div id="details">
        <img alt="book-image" width="130" height="200" src={book.image} />
        <div id="book-data">
          <p>Author: {book.author?.join(", ") || "none"}</p>
          <p>Publisher: {book.publisher || "none"}</p>
          <p>Published: {book.published?.slice(0, 4) || "none"}</p>
        </div>
      </div>
      <p id="description">Description: {book.description || "none"}</p>
    </div>
  );
};

export default Book;
