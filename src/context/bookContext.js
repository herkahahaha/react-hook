import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducer/bookReducer";

export const BookContext = createContext();

const BookContextProvider = props => {
  // here we go to use dispatch from reducer
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    // add saving data in our browser
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    // render data to our localstorage
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};
export default BookContextProvider;
