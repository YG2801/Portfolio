import React from "react";
import { motion, useAnimation } from "framer-motion";

function Nav2Comp({ variants, name, scroll }) {
  const controls = useAnimation();

  function handleHover() {
    controls.start({ left: ["-100%", "0%"] });
  }

  function handleHoverExit() {
    controls.start({ left: "100%" });
  }

  return (
    <motion.li
      variants={variants}
      onHoverStart={handleHover}
      onHoverEnd={handleHoverExit}
      onClick={() => {
        const section = document.getElementById(scroll);
        section.scrollIntoView({ behavior: "smooth" });
      }}
      className="relative cursor-pointer overflow-hidden p-1"
    >
      <p>{name}</p>
      <motion.div
        animate={controls}
        className="absolute -left-full bottom-0 h-[1.5px] w-full bg-primary-light"
      ></motion.div>
    </motion.li>
  );
}

export default Nav2Comp;
