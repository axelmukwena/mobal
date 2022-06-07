import React from "react";
import { useSelector } from "react-redux"

const LocIndex = function LocIndex({ name }) {
  const currentUser = useSelector((state) => state.currentUser.user);

  return <div className="name" style={{ color: "white" }}>Name: {name.toUpperCase()}</div>
}

export default LocIndex