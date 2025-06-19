import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Login from "./pages/Login"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useEffect } from "react";
import 'leaflet/dist/leaflet.css';

function RouteLogger() {
  const location = useLocation();


  useEffect(() => {
    // Cada vez que cambia la URL, se dispara esta petición al backend
    console.log(location.pathname);
    fetch(`http://localhost:3000${location.pathname}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  }, [location]);

  return null; // No renderiza nada, solo se ejecuta
}

export default function App() {
  return (
    <Router>
      <RouteLogger /> {/* Esto escucha los cambios de ruta */}
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}
