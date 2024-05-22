import React from "react";
import { motion } from "framer-motion";

function SkillComp({ extraStyles }) {
  return (
    <div
      style={{
        background:
          "url(https://neuron.illinois.edu/games/brain-quiz/outline_003.png) no-repeat center/contain",
      }}
      className={`z-30 rotate-12 rounded-[50%_40%_50%_20%] backdrop-blur-sm ${extraStyles}`}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/320px-Tailwind_CSS_Logo.svg.png"
        alt="tailwindcss"
        className="absolute left-36 top-8 size-24 -rotate-12 object-contain"
      />
      <motion.img
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        alt="react"
        className="absolute left-52 top-24 size-36 object-contain"
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
        className="absolute right-40 top-8 size-20 object-contain"
      />
      <img
        src="https://appwrite.io/assets/logomark/logo.png"
        alt="appwrite"
        className="absolute left-28 top-28 size-20 -rotate-12 animate-pulse object-contain"
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
        className="absolute left-64 top-5 size-20 -rotate-12 object-contain"
      />
      <img
        src="https://cdn.worldvectorlogo.com/logos/framer-motion.svg"
        alt="framer-motion"
        className="absolute right-44 top-52 size-16 -rotate-12 object-contain"
      />
      <img
        src="https://www.svgrepo.com/show/303206/javascript-logo.svg"
        alt="javascript"
        className="absolute right-36 top-72 size-20 -rotate-12 object-contain"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"
        alt="css3"
        className="absolute right-64 top-64 size-16 -rotate-12 object-contain"
      />
      <img
        src="https://static-00.iconduck.com/assets.00/file-type-vscode2-icon-256x256-z9lqyh9h.png"
        alt="vscode"
        className="absolute right-20 top-20 size-16 object-contain"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/926px-C_Programming_Language.svg.png"
        alt="c"
        className="absolute left-24 top-48 size-12 -rotate-12 object-contain"
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
        className="firebase absolute right-16 top-80 size-16 -rotate-12 object-contain"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
        alt="c++"
        className="absolute right-12 top-44 size-28 -rotate-12 object-contain"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/128/5968/5968896.png"
        alt="github"
        className="absolute right-36 top-32 size-16 -rotate-12 animate-pulse object-contain"
      />
    </div>
  );
}

export default SkillComp;
