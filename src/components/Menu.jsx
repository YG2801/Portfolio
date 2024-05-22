import React, { useState } from "react";
import MenuStick from "../assets/menu-stick.png";
import MenuBoard from "../assets/menu-board.png";
import { motion } from "framer-motion";
import data from "../../data";

function Menu() {
  const [menuOptions, setMenuOptions] = useState(data.menuOptions);

  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }

  const boardVariants = {
    visible: ({ rotateAmout, i }) => ({
      x: 0,
      opacity: 1,
      rotate: rotateAmout,
      transition: {
        duration: 0.3,
        delay: i * 0.3,
      },
    }),
  };

  return (
    <div className="absolute bottom-4 right-6 select-none md:bottom-8 md:right-12 lg:bottom-12 lg:right-16">
      <motion.img
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        src={MenuStick}
        alt="MenuStick"
        className="h-[350px] lg:h-auto"
      />
      <div className="absolute left-1/2 top-4 -translate-x-1/2 *:cursor-pointer ">
        {menuOptions.map(({ name, scroll }, index) => {
          return (
            <motion.div
              key={index}
              variants={boardVariants}
              initial={{ x: index % 2 === 0 ? -100 : 50, opacity: 0 }}
              animate="visible"
              custom={{ rotateAmout: index % 2 === 0 ? 3 : 177, i: index }}
              whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
              whileTap={{ scale: 1.1, transition: { duration: 0.1 } }}
              onClick={() => {
                scrollToSection(scroll);
              }}
              style={{
                background: `url(${MenuBoard}) no-repeat center center/cover`,
              }}
              className="flex h-10 w-28 rotate-3 items-center justify-center lg:h-12 lg:w-36"
            >
              <p
                className={`${index % 2 !== 0 && "rotate-180"} text-sm lg:text-lg`}
              >
                {name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
