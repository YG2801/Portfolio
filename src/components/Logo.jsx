import React from "react";
import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      onClick={() => {
        window.location.href = "/";
      }}
      className="relative w-fit cursor-pointer font-lora text-4xl -tracking-widest text-primary-dark"
    >
      Y<span className="text-primary-light">G</span>
      <div className="absolute left-0 top-1/2 h-[6px] w-full -translate-y-1/2 backdrop-blur-md"></div>
    </motion.div>
  );
}

export default Logo;
