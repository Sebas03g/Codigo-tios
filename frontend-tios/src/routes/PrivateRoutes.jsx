import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("authToken");
  const csrf = localStorage.getItem("csrfToken");

  if (!token || !csrf) {
    return <Navigate to="/" replace />;
  }

  return children;
}