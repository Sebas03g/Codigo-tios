import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/general/AppHeader.jsx";

export default function AppLayout() {
  return (
    <>
      <HeaderComponent />
      <main className="flex-grow flex items-center justify-center bg-gray-100 p-4">
        <Outlet />
      </main>
    </>
  );
}