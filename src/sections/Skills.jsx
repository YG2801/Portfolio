import React, { useContext } from "react";
import { motion } from "framer-motion";
import { windowWidthContext } from "../App";
import { SkillComp, SkillCompMobile } from "../components";

function Skills() {
  const windowWidth = useContext(windowWidthContext);
  if (windowWidth >= 1024)
    return (
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        id="skills"
        className="relative mx-8 mt-24 grid min-h-screen grid-cols-10 grid-rows-10 gap-[1px] overflow-hidden rounded-md bg-zinc-950"
      >
        {Array(100)
          .fill(0)
          .map((_, i) => (
            <motion.div
              key={i}
              className={`z-10 col-span-1 row-span-1 bg-zinc-900`}
            />
          ))}
        <motion.div
          animate={{
            translateX: ["-100%", "100%"],
          }}
          transition={{ duration: 10, repeat: Infinity, times: [0, 0.1] }}
          className="absolute left-0 top-0 h-screen w-full bg-gradient-to-l from-primary-light to-primary-dark"
        />
        <motion.div className="blob absolute left-4 top-1/2 z-10 flex size-[320px] -translate-y-1/2 items-center justify-center bg-white bg-opacity-10 backdrop-blur-md xl:left-10 xl:size-[400px]">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 1 }}
            className="text-6xl text-primary-dark xl:text-7xl"
          >
            Skills
          </motion.div>
        </motion.div>
        <SkillComp
          extraStyles={
            "absolute bottom-0 right-4 xl:right-20 h-[90%] w-[600px]"
          }
        />
      </motion.div>
    );

  return (
    <motion.div id="skills" className="relative px-8 pt-16 md:mt-4 md:px-14">
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: "all" }}
        className="relative text-3xl font-semibold text-primary-dark md:py-1 md:text-4xl"
      >
        Skills
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, amount: "all" }}
          className="absolute bottom-0 left-0 h-[1px] bg-primary-light md:h-[2px]"
        />
      </motion.h1>
      <SkillCompMobile />
    </motion.div>
  );
}

export default Skills;
