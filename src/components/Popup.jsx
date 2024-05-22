import React, { useEffect } from "react";
import { motion } from "framer-motion";

function Popup({ children, setShowPopup }) {
  useEffect(() => {
    setTimeout(() => {
      setShowPopup(false);
    }, 2700);
  }, []);

  return (
    <motion.div
      initial={{ right: -50, opacity: 0 }}
      animate={{
        right: 10,
        opacity: 1,
      }}
      exit={{ right: -50, opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 0.5 }}
      className="fixed top-20 overflow-hidden rounded-md bg-white px-6 py-3 font-montserrat font-medium text-black"
    >
      <motion.div
        animate={{ width: "0%" }}
        transition={{ duration: 2, ease: "linear", delay: 0.6 }}
        className={`absolute bottom-0 left-0 h-[5px] w-full ${children === "success" ? "bg-green-500" : "bg-red-500"}`}
      />
      <p>
        {children === "success"
          ? "Message sent successfully!"
          : "Error in sending message!"}
      </p>
    </motion.div>
  );
}

export default Popup;
