import React from "react";
import '../styles/App.css';
import { Provider } from "react-redux";
import store from "../store/store";
import { Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import LocIndex from "./locations/LocIndex"
const logo = '/assets/logo.svg'

const App = function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<LocIndex name="home" />} />
              <Route path="axel" element={<LocIndex name="Axel" />} />
            </Route>
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
