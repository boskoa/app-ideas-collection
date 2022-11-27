import Book from "./Book";

const BooksContainer = ({ books, loading }) => {
  if (!books.length) {
    return <div />;
  }
  return (
    <div id="books-container">
      {loading ? (
        <button id="spinner" className="fa fa-spinner fa-spin" />
      ) : (
        books.map((b) => (
          <Book
            key={b.id}
            book={{
              title: b.volumeInfo.title,
              image: b.volumeInfo.imageLinks.thumbnail,
              author: b.volumeInfo.authors,
              publisher: b.volumeInfo.publisher,
              published: b.volumeInfo.publishedDate,
              description: b.volumeInfo.description,
              link: b.volumeInfo.previewLink,
            }}
          />
        ))
      )}
    </div>
  );
};

export default BooksContainer;
