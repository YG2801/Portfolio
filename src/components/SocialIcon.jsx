import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function SocialIcon({ isVisible, iconDetail }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ top: 0, opacity: 0 }}
          animate={{ top: iconDetail.animationProp.animateToTop, opacity: 1 }}
          exit={{
            top: 0,
            opacity: 0,
            transition: {
              duration: iconDetail.animationProp.exitDuration,
              delay: iconDetail.animationProp.exitDelay,
              ease: "linear",
            },
          }}
          transition={{
            duration: iconDetail.animationProp.animateDuration,
            ease: "linear",
          }}
          style={{ zIndex: iconDetail.zIndex }}
          className="absolute left-0 top-0 flex size-[40px] items-center justify-center rounded-full transition-transform hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] active:scale-125 md:hover:scale-125"
        >
          <a href={iconDetail.link} target="_blank">
            {iconDetail.icon}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SocialIcon;
