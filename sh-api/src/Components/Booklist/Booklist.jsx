import React from "react";
import { useGlobalContext } from "../../context";
import Book from "../Booklist/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./Booklist.css";
function Booklist() {
  const { books, loading, resultTitle } = useGlobalContext();
  const bookswithCover = books.map((singlebook) => {
    return {
      ...singlebook,
      id: singlebook.id.replace("/works/", ""),
      cover_img: singlebook.cover_id
        ? `https://covers.openlibrary.org/b/id/${singlebook.cover_id}-L.jpg`
        : coverImg,
    };
  });
  console.log(bookswithCover);
  if (loading) return <Loading />;
  return (
    <section className="bookList">
      <div className="container">
        <div className="section-title">
          <h2>{resultTitle}</h2>
        </div>
        <div className="booklist-content grid">
          {bookswithCover.slice(0, 30).map((item, index) => {
            return <Book key={index} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Booklist;
