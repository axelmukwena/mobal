import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBook } from "../../store/actions/booksActions";

const ShowBook = function ShowBook() {
  const [book, setBook] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { bookSlug } = useParams();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    const _book = books.find((book) => book.slug === bookSlug);
    setBook(_book || {});
  }, [bookSlug, books]);

  const deleteBookHandler = () => {
    dispatch(deleteBook(book));
    navigate("/books", { replace: true });
  };

  return (
    <>
      {bookSlug && !book && <h1>Selected book does not exist</h1>}
      {book && (
        <>
          <h1>{book.title}</h1>
          <p>By {book.author}</p>
          <p>Rated: {book.rating}</p>
          <button type="button" onClick={deleteBookHandler}>
            Delete Book
          </button>
        </>
      )}
    </>
  );
};

export default ShowBook;
