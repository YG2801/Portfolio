import React from "react";
import { motion } from "framer-motion";

function BatEye({ position }) {
  const blinkVariant = {
    blink: {
      backgroundColor: ["#fff", "#000", "#fff"],
      transition: {
        times: [0, 0.25, 1],
        delay: 0.25,
        repeat: Infinity,
        repeatDelay: 4,
        repeatType: "reverse",
      },
    },
  };

  const rotateEyeVariant = {
    rotate: {
      rotate: [0, 180],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 3,
        repeatType: "reverse",
      },
    },
  };
  return (
    <motion.div
      variants={blinkVariant}
      animate="blink"
      className={`absolute top-[44%] flex size-2 items-center justify-center rounded-full ${position}`}
    >
      <motion.div
        variants={rotateEyeVariant}
        animate="rotate"
        className="h-1 w-full"
      >
        <div className="ml-[0.1px] size-1 rounded-full bg-black"></div>
      </motion.div>
    </motion.div>
  );
}

export default BatEye;
