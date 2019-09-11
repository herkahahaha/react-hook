import React, { useContext } from "react";
import { BookContext } from "../context/bookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Mari Membaca Bung</h1>
      <p>sekarang kamu memiliki {books.length} untuk dibaca</p>
    </div>
  );
};
export default Navbar;
