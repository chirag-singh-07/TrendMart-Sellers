import { useEffect, useState } from "react";
import { landing_features } from "../../constants/index.js";
import mermaid from "mermaid";
import { motion } from "framer-motion";

const LandingKeyFeatures = () => {
  const [diagramDirection, setDiagramDirection] = useState(
    window.innerWidth < 1024 ? "TB" : "LR"
  );

  useEffect(() => {
    const updateDiagramDirection = () => {
      setDiagramDirection(window.innerWidth < 1024 ? "TB" : "LR");
    };
    window.addEventListener("resize", updateDiagramDirection);
    return () => window.removeEventListener("resize", updateDiagramDirection);
  }, []);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false });
    mermaid.init(undefined, ".mermaid");
  }, [diagramDirection]);

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 flex justify-center items-center" id="feature">
      <div className="container px-6 md:px-12 lg:px-16">
        {/* Title Animation */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-gray-900 dark:text-white">
            Key Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
            Everything you need to manage your store efficiently.
          </p>
        </motion.div>

        {/* Features Grid Animation */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {landing_features.map((feature, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 shadow-lg rounded-xl space-y-4 text-center"
            >
              <div className="p-4 rounded-full bg-gray-200 dark:bg-gray-700">
                <feature.icon className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Diagram Section Animation */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-20 flex justify-center"
        >
          <div className="w-full bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white mb-4">
              Product Tracking Process
            </h3>
            <div key={diagramDirection} className="mermaid flex items-center justify-center">
              {`graph ${diagramDirection};
  A[Order Received] --> B[Process Order];
  B -->|In Stock| C[Prepare Shipment];
  B -->|Out of Stock| D[Backorder];
  C --> E[Deliver to Customer];

  %% Styling for Black Nodes with White Text
  style A fill:#000000,stroke:#000000,color:#ffffff,stroke-width:2px;
  style B fill:#000000,stroke:#000000,color:#ffffff,stroke-width:2px;
  style C fill:#000000,stroke:#000000,color:#ffffff,stroke-width:2px;
  style D fill:#000000,stroke:#000000,color:#ffffff,stroke-width:2px;
  style E fill:#000000,stroke:#000000,color:#ffffff,stroke-width:2px;
  linkStyle default stroke:#000000,stroke-width:2px;
  `}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingKeyFeatures;





