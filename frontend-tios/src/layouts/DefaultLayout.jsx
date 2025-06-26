// src/layouts/DefaultLayout.tsx
import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/general/header.jsx";

export default function DefaultLayout() {
  return (
    <>
      <HeaderComponent />
      <main>
        <Outlet />
      </main>
    </>
  );
}
