# HOOKS Reactjs

## Intro

> Reactjs di 2019, maksimal dengan menggunakan Context Api dan High Order Component dalam pendistribusian data setiap component, serta 90% clean code.
> namun ini dalam bentuk OPTIONAL/pilihan.

info lebih lanjut:<br/>

- [reactjs](https://reactjs.org/docs/hooks-intro.html)<br/>
- [id.reactjs](https://id.reactjs.org/docs/hooks-intro.html)

## Study Kasus

### Book-App

```
branch: master (full)
branch: starter (basic)
branch: custom (next level)
```

**Context**<br/>

- bookContext.js

```js {4}
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
```

**Components**<br/>

- BookList.js

```js {1,2,6,}
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
```

- bookDetails

```js {2,5}
import React, { useContext } from "react";
import { BookContext } from "../context/bookContext";

// parsing props book
const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li onClick={() => removeBook(book.id)}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};
export default BookDetails;
```

> merupakan contoh kecil penerapan Context API kepada components yg membuthkan dengan menggunakan HOOKS.
