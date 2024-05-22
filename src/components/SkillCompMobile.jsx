import React from "react";
import { motion } from "framer-motion";

function SkillCompMobile() {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      className="mt-16 flex flex-wrap justify-evenly gap-x-5 gap-y-10 *:size-16 sm:px-12 md:gap-x-8"
    >
      <motion.img
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        alt="react"
        className="object-contain"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png"
        alt="tailwindcss"
        className="object-contain"
      />
      <motion.img
        animate={{ rotate: -360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        src="https://cdn.worldvectorlogo.com/logos/redux.svg"
        alt="redux"
        className="object-contain"
      />
      <img
        src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
        alt="framer-motion"
        className="object-contain"
      />
      <img
        src="https://www.svgrepo.com/show/303206/javascript-logo.svg"
        alt="javascript"
        className="rounded-xl object-contain"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/128/5968/5968896.png"
        alt="github"
        className="animate-pulse object-contain"
      />
      <img
        src="https://appwrite.io/assets/logomark/logo.png"
        alt="appwrite"
        className="animate-pulse object-contain"
      />
      <img
        src="https://static-00.iconduck.com/assets.00/file-type-vscode2-icon-256x256-z9lqyh9h.png"
        alt="vscode"
        className="object-contain"
      />
      <motion.img
        animate={{
          filter: [
            "drop-shadow(0 0 15px #f9f971)",
            "drop-shadow(0 0 15px #f9f97180)",
            "drop-shadow(0 0 15px #f9f971)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Firebase_icon.svg/2048px-Firebase_icon.svg.png"
        alt="firebase"
        className="object-contain"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
        alt="css3"
        className="object-contain"
      />
      <motion.img
        animate={{
          filter: [
            "drop-shadow(0 0 15px #e66d4c80)",
            "drop-shadow(0 0 15px #e66d4c30)",
            "drop-shadow(0 0 15px #e66d4c80)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-1-1175208.png?f=webp"
        alt="html5"
        className="object-contain"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
        alt="c++"
        className="object-contain"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/926px-C_Programming_Language.svg.png"
        alt="c"
        className="object-contain"
      />
    </motion.div>
  );
}

export default SkillCompMobile;
