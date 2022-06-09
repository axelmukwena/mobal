import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../../store/actions/booksActions";

const AddBooks = function AddBooks() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(1);
  const [errors, setErrors] = useState("");

  const dispatch = useDispatch();

  const books = useSelector((state) => state.books.books);

  function duplicateSlug(slug) {
    const book = books.find((book) => book.slug === slug);
    if (!book) return false;
    return true;
  }

  const submitBookHandler = (e) => {
    e.preventDefault();
    setErrors("");

    if (!title || !author) {
      setErrors("Please eneter required values.");
      return;
    }
    const regex = /[^a-zA-Z0-9]+/g;
    const path = title.trim().replace(regex, "-").toLowerCase();

    let slug = path;
    let count = 1;
    while (true) {
      if (!duplicateSlug(slug)) break;
      else {
        slug = `${slug}-${count}`;
        count += 1;
      }
    }

    const book = { title, author, rating, slug };
    dispatch(addBook(book));
  };

  return (
    <>
      <h3>Add Books</h3>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <input
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            type="number"
            min={1}
            max={10}
          />
        </div>
        {errors && <p>{errors}</p>}
        <button type="submit" onClick={submitBookHandler}>
          Add Book
        </button>
      </form>
    </>
  );
};

export default AddBooks;
