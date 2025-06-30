import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/general/AppHeader.jsx";

export default function AppLayout() {
  return (
    <>
      <HeaderComponent />
      <main>
        <Outlet />
      </main>
    </>
  );
}