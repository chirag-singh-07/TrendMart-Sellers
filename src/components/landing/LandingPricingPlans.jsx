import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { plans } from "@/constants";

// Parent container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Smooth delay between items
    },
  },
};

// Individual card animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Increased duration for smoothness
      ease: "easeInOut",
      delay: index * 0.5, // Delayed stagger for a flowing effect
    },
  }),
};

const LandingPricingPlans = () => {
  return (
    <section
      className="w-full py-16 bg-gray-50 dark:bg-gray-900 flex items-center justify-center "
      id="price"
    >
      <div className="container px-6 md:px-12 lg:px-16">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold tracking-tight sm:text-5xl text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Pricing Plans
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Choose a plan that fits your business needs.
        </motion.p>

        {/* Pricing Cards */}
        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              custom={index}
              variants={cardVariants}
              className={`flex flex-col p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105 
              ${
                plan.name === "Pro"
                  ? "bg-black text-white"
                  : "bg-white dark:bg-gray-800"
              }`}
            >
              {/* Plan Name & Price */}
              <h3 className="text-2xl font-semibold text-center">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-center opacity-80">
                {plan.description}
              </p>
              <div className="mt-4 text-center">
                <span className="text-5xl font-bold">{plan.price}</span>
                {plan.name !== "Enterprise" && (
                  <span className="text-gray-500 dark:text-gray-400 text-lg">
                    /month
                  </span>
                )}
              </div>

              {/* Features List */}
              <ul className="mt-6 space-y-4 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Call to Action Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
              >
                <Button
                  className={`mt-8 w-full py-3 rounded-lg font-medium transition 
                    ${
                      plan.name === "Pro"
                        ? "bg-white text-black hover:bg-gray-200"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LandingPricingPlans;
