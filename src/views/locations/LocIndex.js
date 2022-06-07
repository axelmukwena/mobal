import React from "react";
import { useSelector } from "react-redux"

const LocIndex = function LocIndex({ name }) {
  const currentUser = useSelector((state) => state.currentUser.user);

  return <>Name: {name.toUpperCase()}</>
}

export default LocIndex