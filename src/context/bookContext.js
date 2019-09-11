import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: "teman hidup", author: "andaru intan", id: 1 },
    { title: "tuhan maha asyik", author: "sujiwo tejo", id: 2 }
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title, author, id: 4 }]);
  };
  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};
export default BookContextProvider;
