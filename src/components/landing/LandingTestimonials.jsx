import { testimonials } from "@/constants";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

// Parent container animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Smooth entry one by one
  },
};

// Testimonial card animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      delay: index * 0.2, // Stagger effect
    },
  }),
};

const LandingTestimonials = () => {
  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-900  flex items-center justify-center">
      <div className="container px-6 md:px-12 lg:px-16">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold tracking-tight sm:text-5xl text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          What Our Customers Say
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Hear from businesses that trust us.
        </motion.p>

        {/* Testimonials Grid */}
        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              className="relative flex flex-col p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg transition-transform transform hover:scale-105"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 text-gray-300 dark:text-gray-700 h-6 w-6" />

              {/* Testimonial Text */}
              <p className="text-lg text-gray-600 dark:text-gray-300 italic">
                {`"${testimonial.content}"`}
              </p>

              {/* User Info */}
              <div className="mt-6 flex items-center">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
                  whileHover={{ scale: 1.1 }} // Slight zoom effect
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                />
                <div className="ml-4">
                  <p className="text-lg font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LandingTestimonials;
