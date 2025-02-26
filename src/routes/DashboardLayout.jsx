import { useAuthStore } from "@/store/authStore";
import { Navigate, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="flex min-h-screen w-full bg-white text-black">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      <div className="flex flex-col flex-1">
        {/* Navbar */}
        {/* <Navbar /> */}

        {/* Page Content */}
        <main className="p-4">
          <Outlet />
        </main>
      </div> 
    </div>
  );
};

export default DashboardLayout;
