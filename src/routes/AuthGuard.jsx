import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const AuthGuard = () => {
  const { isAuthenticated, user } = useAuthStore();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (isAuthenticated && !user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  // Redirect authenticated users away from home ("/") to "/dashboard"
  if (location.pathname === "/") {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />; // Render protected routes
};

export default AuthGuard;
