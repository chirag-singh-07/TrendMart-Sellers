import { Package } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuthStore } from "@/store/authStore";

const LandingHeader = () => {
  const { isAuthenticated } = useAuthStore();

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center justify-between shadow-md">
      <Link className="flex items-center justify-center" to="/">
        <Package className="h-6 w-6" />
        <span className="ml-2 text-lg font-bold">TrendMart Vendors</span>
      </Link>
      <nav className=" flex gap-4 sm:gap-6">
        <button
          className="text-sm font-medium hover:underline underline-offset-4"
          onClick={() => handleScroll("feature")}
        >
          Features
        </button>
        <button
          className="text-sm font-medium hover:underline underline-offset-4"
          onClick={() => handleScroll("price")}
        >
          Pricing
        </button>
        <button
          className="text-sm font-medium hover:underline underline-offset-4"
          onClick={() => handleScroll("about")}
        >
          About
        </button>
        <button
          className="text-sm font-medium hover:underline underline-offset-4"
          onClick={() => handleScroll("contact")}
        >
          Contact
        </button>
      </nav>
      <div className="flex items-center justify-end">
        {isAuthenticated ? (
          <>
            <Link to={"/dashboard"}>
              <Button className="ml-4 text-sm font-medium0">Deshboard</Button>
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Login
            </Link>
            <Link to={"/register"}>
              <Button className="ml-4 text-sm font-medium0">Sign Up</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default LandingHeader;
