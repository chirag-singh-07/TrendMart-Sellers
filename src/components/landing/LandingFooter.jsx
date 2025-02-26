import { Separator } from "@radix-ui/react-separator";
import { Link } from "react-router-dom";

const LandingFooter = () => {
  return (
    <footer className="w-full bg-black text-white py-8">
      <Separator className="text-gray-400 bg-gray-400" />
      <div className="container px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Copyright Text */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} TrendMart Vendors. All rights reserved.
        </p>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link
            className="text-sm text-gray-400 hover:text-white transition duration-300"
            to="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-sm text-gray-400 hover:text-white transition duration-300"
            to="#"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default LandingFooter;
