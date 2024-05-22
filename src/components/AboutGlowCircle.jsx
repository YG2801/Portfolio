import { motion } from "framer-motion";
import React from "react";

function AboutGlowCircle({ extraStyles }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ boxShadow: "0px 0px 15px 20px #fff", opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: "all" }}
      className={`z-10 rounded-full bg-white ${extraStyles}`}
    ></motion.div>
  );
}

export default AboutGlowCircle;
