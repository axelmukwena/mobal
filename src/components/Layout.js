import React, { useEffect, useState } from "react"

const Layout = function Layout({ children }) {
  const [myHook, setMyHook] = useState([])

  useEffect(() => {
    console.log(children)
	}, []);

  return (
    <div className="layout" style={{ backgroundColor: "red" }}>{ children }</div>
  )
}

export default Layout