import { Mail } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const LandingNewsLetter = () => {
  return (
    <section className="w-full py-16 bg-black text-white" id="contact">
      <div className="container px-6 md:px-12 lg:px-16">
        {/* Content Wrapper */}
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Heading & Subtext */}
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Join thousands of successful sellers on <i>TrendMart Vendors</i> —
              add products, track orders, and scale your business with ease.
            </p>
          </div>

          {/* Email Input & Button */}
          <div className="w-full max-w-md">
            <form className="flex items-center bg-white rounded-full p-1 shadow-lg">
              <Mail className="ml-3 text-gray-500" />
              <Input
                className="flex-1 border-none focus:ring-0 px-4 py-3 text-gray-700 rounded-full outline-none"
                placeholder="Enter your email"
                type="email"
              />
              <Button className="px-6 py-3 rounded-full  font-semibold  transition">
                Sign Up
              </Button>
            </form>
            <p className="mt-2 text-xs text-gray-400">
              By signing up, you agree to our{" "}
              <span className="underline cursor-pointer hover:text-gray-200">
                Terms & Conditions
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingNewsLetter;
