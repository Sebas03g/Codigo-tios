import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useEffect } from "react";

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
      <nav className="flex gap-4 p-4 bg-gray-200">
        <Link to="/" className="text-blue-600">Inicio</Link>
        <Link to="/about" className="text-blue-600">Sobre</Link>
        <Link to="/contact" className="text-blue-600">Contacto</Link>
      </nav>
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}
