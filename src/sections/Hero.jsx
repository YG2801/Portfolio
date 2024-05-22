import React, { useRef, useEffect, useState, useContext } from "react";
import { Navbar, Menu } from "../components";
import { motion } from "framer-motion";
import Typed from "typed.js";
import BgHeroDesktop from "../assets/bg-hero-desktop.jpg";
import BgHeroMobile from "../assets/bg-hero-mobile.jpg";
import data from "../../data";
import { windowWidthContext } from "../App";

function Hero() {
  const [words, setWords] = useState(data.words);
  const typedRef = useRef(null);

  const windowWidth = useContext(windowWidthContext);

  useEffect(() => {
    const options = {
      strings: words,
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const parentH1 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const childH1 = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div
      id="hero"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${windowWidth <= 468 ? BgHeroMobile : BgHeroDesktop}) no-repeat center center/cover`,
      }}
      className="relative z-40 h-screen"
    >
      <Navbar />
      <motion.div
        variants={parentH1}
        initial="hidden"
        animate="visible"
        className="ml-12 mt-24 overflow-hidden text-3xl leading-relaxed drop-shadow-[0_0_20px_rgba(0,0,0,1)] md:ml-20 md:text-4xl md:leading-relaxed lg:ml-32 lg:text-5xl lg:leading-relaxed"
      >
        <motion.h1 variants={childH1}>Hi,</motion.h1>
        <motion.h1 variants={childH1}>
          I am <span className="font-semi text-primary-dark">Yash Garg</span>
        </motion.h1>
        <motion.h1 variants={childH1}>
          and a{" "}
          <span ref={typedRef} className="font-semibold">
            Front-end Developer
          </span>
        </motion.h1>
      </motion.div>
      <Menu />
    </div>
  );
}

export default Hero;
