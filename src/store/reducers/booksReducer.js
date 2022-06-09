import { createReducer } from "@reduxjs/toolkit";
import { addBook, deleteBook } from "../actions/booksActions";

const initialState = { books: [] };

const booksReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addBook, (state, action) => {
      state.books.push(action.payload);
    })
    .addCase(deleteBook, (state, action) => {
      state.books = state.books.filter(
        (book) => book.slug !== action.payload.slug
      );
    });
});

export default booksReducer;
