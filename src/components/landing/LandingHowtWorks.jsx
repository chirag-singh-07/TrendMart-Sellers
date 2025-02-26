import { steps } from "@/constants";
import { motion } from "framer-motion";

const LandingHowItWorks = () => {
  return (
    <section
      className="w-full py-16 bg-gray-100 flex items-center justify-center"
      id="about"
    >
      <div className="container px-6 md:px-12 lg:px-16">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-bold tracking-tight sm:text-5xl text-center text-gray-900"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>

        {/* Steps Container */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="bg-white shadow-lg rounded-2xl p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-black text-white rounded-full text-2xl font-bold">
                {step.id}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600">{step.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Final Description */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700">
            Our streamlined process ensures efficient order management, shipment
            tracking, and inventory updates, helping you scale your business
            with ease.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingHowItWorks;
