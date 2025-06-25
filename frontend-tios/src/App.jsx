import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import 'leaflet/dist/leaflet.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes";
import HeaderComponent from "./components/general/header";

export default function App() {
  return (
    <>
      <AppRoutes/>
      <ToastContainer position="center" autoClose={3000}/>
    </>
    
  );
}
