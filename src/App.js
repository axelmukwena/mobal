import React from "react";
import { Route, Routes } from "react-router-dom";
import Books from "./pages/books/Books";
import Home from "./pages/Home";

const App = function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/*" element={<Books />} />
    </Routes>
  );
};

export default App;
