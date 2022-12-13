import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./pages/Home";
import Events from "./pages/Events";
import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Event from "./pages/Event";
import React from 'react'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/events" element={<Events/>}  />
        <Route exact path="/event-detail" element={<Event/>}/>
      </Routes>
    </>
  );
}

export default App;
