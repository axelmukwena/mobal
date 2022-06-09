import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import MainLayout from "../../components/MainLayout";
import AddBooks from "./AddBooks";
import ShowBook from "./ShowBook";

const Books = function Books() {
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.books);

  const showBookHandler = (slug) => {
    navigate(`/books/${slug}`, { replace: true });
  };

  return (
    <MainLayout>
      <div className="books-container">
        <table className="books">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Rating</th>
            </tr>
          </thead>
          {!books && <p>No books in the catalog</p>}
          {books && (
            <tbody>
              {books.map((book) => (
                <tr
                  className="book-row"
                  key={book.title}
                  onClick={(e) => showBookHandler(book.slug)}
                >
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.rating}</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
        <div className="add-books">
          <Routes>
            <Route path="/" element={<AddBooks />} />
            <Route path="/:bookSlug" element={<ShowBook />} />
          </Routes>
        </div>
      </div>
    </MainLayout>
  );
};

export default Books;
