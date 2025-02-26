import { Package } from "lucide-react";
import { Link } from "react-router-dom";

const LandingHeader = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center shadow-md">
      <Link className="flex items-center justify-center" to="/">
        <Package className="h-6 w-6" />
        <span className="ml-2 text-lg font-bold">TrendMart Vendors</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
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
    </header>
  );
};

export default LandingHeader;
