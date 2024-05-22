import React, { useState, useEffect, useContext } from "react";
import { motion, useAnimation } from "framer-motion";
import { EducationCard, CursorDiv } from "../components";
import data from "../../data";
import { windowWidthContext } from "../App";

function Education() {
  const [currIndex, setCurrIndex] = useState(0);
  const [educationData, setEducationData] = useState(data.educationData);
  const windowWidth = useContext(windowWidthContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrIndex((prevIndex) => (prevIndex + 1) % educationData.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [currIndex]);

  const controls = useAnimation();

  function handleMouseMove(e) {
    controls.start({
      x: e.clientX - 40,
      y: e.clientY - 40,
      opacity: 1,
      transition: { duration: 0 },
    });
  }

  function handleMouseLeave() {
    controls.start({ x: 0, y: 0, opacity: 0 });
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="education"
      className="min-h-screen px-8 py-16 md:mt-4 md:px-14 lg:mt-16 lg:px-16"
    >
      {windowWidth > 1024 && (
        <CursorDiv controls={controls} bg={"bg-red-950"} />
      )}
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: "all" }}
        className="relative text-3xl font-semibold text-primary-dark md:py-1 md:text-4xl lg:py-2 lg:text-5xl"
      >
        Education💡
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, amount: "all" }}
          className="absolute bottom-0 left-0 h-[1px] bg-primary-light md:h-[2px]"
        />
      </motion.h1>
      <div className="mx-auto mt-16 flex flex-col-reverse items-center gap-8 lg:flex-row lg:gap-16">
        <motion.ul
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center gap-5 lg:ml-20 lg:flex-col"
        >
          {educationData.map((_, index) => (
            <li
              key={index}
              onClick={() => setCurrIndex(index)}
              className={`relative flex size-10 cursor-pointer items-center justify-center rounded-full border border-zinc-100 md:size-12 md:text-xl lg:size-16 lg:text-2xl ${currIndex === index ? "text-[#0B0D17]" : "text-zinc-100"}`}
            >
              {index + 1}
              {currIndex === index && (
                <motion.div
                  layoutId="circle"
                  className="absolute left-0 top-0 -z-[1] size-10 rounded-full bg-zinc-100 md:size-12 lg:size-16"
                />
              )}
            </li>
          ))}
        </motion.ul>
        <div className="md:grow">
          <EducationCard {...educationData[currIndex]} />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
