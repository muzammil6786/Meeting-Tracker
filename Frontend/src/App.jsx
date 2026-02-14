import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home";
import Status from "./pages/Status";
import About from "./pages/About";
import "./index.css";
import Footer from "./components/footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="bg-3d">
        <div className="container">
          <nav className="nav">
            <h2 className="logo">Meeting Tracker</h2>

            {/* Hamburger Icon */}
            <div
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </div>

            {/* Links */}
            <div className={`navlinks ${menuOpen ? "active" : ""}`}>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/status" onClick={() => setMenuOpen(false)}>Status</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            </div>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/status" element={<Status />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
