import React from "react";
import { motion } from "framer-motion";

interface ModalTransitionProps {
  children: React.ReactNode;
}

const modalVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delayChildren: 0.2,
    },
  },
  out: {
    opacity: 0,
    y: 20,
  },
};

const modalTransition = {
  type: "spring",
  stiffness: 50,
  damping: 15,
  duration: 0.4,
};
const ModalTransition: React.FC<ModalTransitionProps> = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={modalVariants}
      transition={modalTransition}
      style={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default ModalTransition;
