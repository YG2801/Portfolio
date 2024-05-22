import React, { useState, useEffect, useContext } from "react";
import pfp from "../assets/yash.png";
import { AboutCard, AboutGlowCircle, Navbar2, CursorDiv } from "../components";
import { motion, useAnimation } from "framer-motion";
import data from "../../data";
import { windowWidthContext } from "../App";

function About() {
  const [aboutData, setAboutData] = useState(data.aboutData);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const windowWidth = useContext(windowWidthContext);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= window.innerHeight) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <>
      {isNavVisible && <Navbar2 />}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        id="about"
        className="mt-12 min-h-screen px-8 py-16 md:px-14 lg:px-16"
      >
        {windowWidth > 1024 && (
          <CursorDiv controls={controls} bg={"bg-green-950"} />
        )}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: "all" }}
          className="relative text-3xl font-semibold text-primary-dark md:py-1 md:text-4xl lg:py-2 lg:text-5xl"
        >
          About
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true, amount: "all" }}
            className="absolute bottom-0 left-0 h-[1px] bg-primary-light md:h-[2px]"
          />
        </motion.h1>

        <div className="relative mt-12 p-1 font-montserrat md:p-8">
          {windowWidth < 1024 ? (
            <div>
              <div className="blob mx-auto flex size-[250px] items-end justify-center overflow-hidden rounded-full border-2 border-primary-light bg-teal-700">
                <img src={pfp} alt="Yash" />
              </div>
              <div className="absolute left-2 top-[300px] h-[calc(100%-280px)] w-[2px] rounded-full bg-primary-light md:left-9 " />

              {aboutData.map((data, index) => {
                return (
                  <div key={index} className="mt-20 flex gap-4 sm:gap-12">
                    <div className="mt-6">
                      <AboutGlowCircle extraStyles={"size-[15px]"} />
                    </div>
                    <AboutCard
                      alignment={"right"}
                      extraStyles={"text-sm p-8 ml-4 sm:p-12 sm:max-w-[400px]"}
                    >
                      {data}
                      {index === aboutData.length - 1 && (
                        <span
                          onClick={() => {
                            const section = document.getElementById("contact");
                            section.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="cursor-pointer text-primary-dark underline underline-offset-2"
                        >
                          Contact
                        </span>
                      )}
                    </AboutCard>
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-primary-light " />
              {aboutData.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="mt-16 flex items-start justify-center gap-20"
                  >
                    {index === 0 ? (
                      <div className="flex basis-1/3 items-center justify-center">
                        <div className="blob flex h-[330px] max-w-[330px] items-end justify-center overflow-hidden rounded-full border-2 border-primary-light bg-teal-700">
                          <img src={pfp} alt="Yash" />
                        </div>
                      </div>
                    ) : index % 2 === 0 ? (
                      <div className="basis-1/3"></div>
                    ) : null}
                    {index % 2 === 0 ? (
                      <AboutGlowCircle extraStyles={"size-[30px]"} />
                    ) : null}
                    <AboutCard
                      alignment={index % 2 !== 0 ? "left" : "right"}
                      extraStyles={"basis-1/3 p-12"}
                    >
                      {data}
                      {index === aboutData.length - 1 && (
                        <span
                          onClick={() => {
                            const section = document.getElementById("contact");
                            section.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="cursor-pointer text-lg text-primary-dark underline underline-offset-2"
                        >
                          Contact
                        </span>
                      )}
                    </AboutCard>
                    {index % 2 === 0 ? null : (
                      <AboutGlowCircle extraStyles={"size-[30px]"} />
                    )}
                    {index === 0 ? null : index % 2 === 0 ? null : (
                      <div className="basis-1/3"></div>
                    )}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default About;
