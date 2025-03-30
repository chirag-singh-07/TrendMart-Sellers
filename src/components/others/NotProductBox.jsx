import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const NotProductBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center p-6  rounded-lg shadow-md"
    >
      <AlertTriangle className="w-12 h-12 text-red-500 animate-bounce" />
      <p className="mt-4 text-lg font-semibol">No Products Found</p>
      <p className="text-gray-500">
        Try adjusting your filters or searching again.
      </p>
    </motion.div>
  );
};

export default NotProductBox;
