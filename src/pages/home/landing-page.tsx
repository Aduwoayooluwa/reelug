import React from "react";
import { motion } from "framer-motion";
import Home from ".";
import Benefits from "./benefits";
import { CTA } from "./cta";
import { Features } from "./features";
import Footer from "./footer";
import Testimonials from "./testimonials";

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5,
};

export function HomePage() {
  return (
    <>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Home />
      </motion.div>
      <div className="min-h-screen w-full grid place-items-center">
        <Benefits />
      </div>
      <Features />
      <Testimonials />
      <CTA />
      <footer className="w-full md:block h-[600px]">
        <Footer />
      </footer>
    </>
  );
}
