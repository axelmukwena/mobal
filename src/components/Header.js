import React from "react";
import { Link } from "react-router-dom";

const Header = function Header({ children }) {
  const items = [
    { name: "Home", path: "/" },
    { name: "Books", path: "/books" },
    { name: "Others", path: "/others" },
  ];
  return (
    <div className="header">
      <div className="menu">
        {items.map((item) => (
          <Link className="menu-item" key={item.path} to={item.path}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
