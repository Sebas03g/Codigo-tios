// src/layouts/DefaultLayout.tsx
import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/general/header.jsx";
import FooterComponent from "../components/general/footer.jsx";

export default function DefaultLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderComponent />
      <main className="flex-grow bg-gray-100 p-6 overflow-auto">
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  );
}
