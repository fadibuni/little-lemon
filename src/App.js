import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes and Route

import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import BookingPage from "./components/BookingPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
