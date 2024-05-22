import React from "react";
import { motion } from "framer-motion";

function CursorDiv({ controls, bg }) {
  return (
    <motion.div
      animate={controls}
      className={`fixed left-0 top-0 -z-[1] size-[80px] rounded-full opacity-0 ${bg}`}
    />
  );
}

export default CursorDiv;
