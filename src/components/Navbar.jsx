import React from "react";
import Logo from "./Logo";
import { BatComp } from "./index";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="px-4 py-2 backdrop-blur-md"
    >
      <Logo />
      <BatComp />
    </motion.div>
  );
}

export default Navbar;
