import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";


function App() {
  return (
    <div>
      {/* Navigation Menu */}
      <nav className="navbar">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/about" className="nav-btn">About</Link>
        <Link to="/contact" className="nav-btn">Contact</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
