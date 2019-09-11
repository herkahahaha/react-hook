import React, { useContext } from "react";
import { BookContext } from "../context/bookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    // if true
    <div className="book-list">
      <ul>
        {books.map(book => {
          return <BookDetails book={book} key={book.id} />;
        })}
      </ul>
    </div>
  ) : (
    // false
    <div className="empty">free time mari hibernasi</div>
  );
};
export default BookList;
