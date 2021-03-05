import React from "react";
import { motion } from "framer-motion";

const AnimatedMessage: React.FC = ({ children }) => {
  return (
    <motion.div initial={{ opacity: 0, x: 200 }} animate={{ opacity: 1, x: 0 }}>
      {children}
    </motion.div>
  );
};

export default AnimatedMessage;
