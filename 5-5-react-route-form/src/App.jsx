import { NavLink, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Registeration from "./pages/Registeration";

export default function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="brand">🧑‍💻 Student Portal</div>
        <div className="links">
          <NavLink to="/" end className="navlink">
            Home
          </NavLink>
          <NavLink to="/about" className="navlink">
            About
          </NavLink>
          <NavLink to="/registration" className="navlink">
            Registration
          </NavLink>
        </div>
      </nav>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/registration" element={<Registeration />} />
          <Route path="*" element={<h2>404 - Not Found</h2>} />
        </Routes>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} React Student Portal</span>
      </footer>
    </div>
  );
}
