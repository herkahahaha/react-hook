import React from "react";
import BookContextProvider from "./context/bookContext";
import Navbar from "./component/Navbar";
import BookList from "./component/BookList";
import NewBook from "./component/NewBook";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <h1>Context App</h1>
        <Navbar />
        <BookList />
        <NewBook />
      </BookContextProvider>
    </div>
  );
}

export default App;
