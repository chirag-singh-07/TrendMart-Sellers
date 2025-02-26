import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

const LandingHeroSection = () => {
  const { user } = useAuthStore();

  return (
    <section
      className="w-full bg-black text-white py-12 md:py-24 lg:py-32 xl:py-48 flex items-center  justify-center"
      id="home"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          {/* Title with animation */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-4"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Grow Your Business with Ease
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
              Sell effortlessly on TrendMart! Add products, manage orders, and
              grow your business—all in one powerful seller platform
            </p>
          </motion.div>

          {/* Buttons with subtle scaling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="space-x-4"
          >
            <Link to={user ? "/dashboard" : "/register"}>
              <Button>{user ? "Deshboard" : ">Get Started"}</Button>
            </Link>
            <Button variant="outline" className="text-black">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LandingHeroSection;
