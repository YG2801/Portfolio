import React, { useState, useContext } from "react";
import Logo from "./Logo";
import { motion, AnimatePresence } from "framer-motion";
import { Nav2Comp, MobileMenu } from "./index";
import data from "../../data";
import { windowWidthContext } from "../App";

function Navbar2() {
  const [menuOptions, setMenuOptions] = useState(data.menuOptions);
  const [isOpen, setIsOpen] = useState(false);

  const windowWidth = useContext(windowWidthContext);

  const parentVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: -10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.div className="fixed top-0 z-50 flex w-full items-center justify-between px-4 py-2 backdrop-blur-md">
        <Logo />
        <div>
          {windowWidth >= 768 ? (
            <motion.ul
              variants={parentVariants}
              initial="hidden"
              animate="visible"
              className="flex gap-6 font-montserrat font-medium"
            >
              {menuOptions.map(({ name, scroll }, index) => {
                return (
                  <Nav2Comp
                    variants={childVariants}
                    key={index}
                    name={name}
                    scroll={scroll}
                  />
                );
              })}
            </motion.ul>
          ) : (
            <motion.svg
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="21"
              className="cursor-pointer fill-primary-light transition-colors active:fill-white"
              onClick={() => setIsOpen(true)}
            >
              <g fillRule="evenodd">
                <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
              </g>
            </motion.svg>
          )}
        </div>
      </motion.div>
      <AnimatePresence>
        {isOpen && <MobileMenu setIsOpen={setIsOpen} options={menuOptions} />}
      </AnimatePresence>
    </>
  );
}

export default Navbar2;
