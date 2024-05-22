import React from "react";
import { motion } from "framer-motion";

function AboutCard({ alignment, children, extraStyles }) {
  return (
    <motion.div
      initial={{ x: alignment === "left" ? -50 : 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className={`border-b-2 border-primary-light bg-[#655a4c] bg-opacity-80 ${extraStyles} ${alignment === "left" ? "rounded-br-[50%] rounded-tl-[50%]" : "rounded-bl-[50%] rounded-tr-[50%]"}`}
    >
      <p className="text-center font-medium leading-relaxed text-zinc-100 drop-shadow-[0_0_20px_rgba(0,0,0,1)]">
        {children}
      </p>
    </motion.div>
  );
}

export default AboutCard;
