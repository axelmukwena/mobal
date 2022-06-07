import React, { useEffect, useState } from "react"

const Layout = function Layout({ children }) {
  const [myHook, setMyHook] = useState([])

  useEffect(() => {
	}, []);

  return (
    <div style={{ backgroundColor: "red" }}>{ children }</div>
  )
}

export default Layout