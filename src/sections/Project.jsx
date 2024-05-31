import React, { useState, useContext, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  ProjectCard,
  ProjectCardMobile,
  CursorDiv,
  Button,
} from "../components";
import data from "../../data";
import { windowWidthContext } from "../App";

function Project() {
  const [projectsData, setProjectsData] = useState(data.projectsData);
  const [showMore, setShowMore] = useState(false);
  const windowWidth = useContext(windowWidthContext);

  const [images, setImages] = useState({});

  useEffect(() => {
    const importImage = import.meta.glob("../assets/project/*.png");
    const loadImages = async () => {
      const loadedImages = {};
      for (const path in importImage) {
        const module = await importImage[path]();
        const filename = path.split("/").pop();
        loadedImages[filename] = module.default;
      }
      setImages(loadedImages);
    };
    loadImages();
  }, []);

  const parentVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const childVariant = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

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
      id="projects"
      className="min-h-screen px-8 py-16 md:mt-4 md:px-14 lg:mt-16 lg:px-16"
    >
      {windowWidth > 1024 && (
        <CursorDiv controls={controls} bg={"bg-cyan-950"} />
      )}
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: "all" }}
        className="relative text-3xl font-semibold text-primary-dark md:py-1 md:text-4xl lg:py-2 lg:text-5xl"
      >
        Projects
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true, amount: "all" }}
          className="absolute bottom-0 left-0 h-[1px] bg-primary-light md:h-[2px]"
        />
      </motion.h1>

      <motion.div
        variants={parentVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-12 flex flex-wrap items-center justify-center gap-12 md:mt-24"
      >
        {showMore
          ? projectsData.map((project, index) => {
              if (windowWidth < 1024)
                return (
                  <ProjectCardMobile
                    variants={childVariant}
                    key={index}
                    {...project}
                    image={images[project.image]}
                  />
                );
              else {
                return (
                  <ProjectCard
                    variants={childVariant}
                    key={index}
                    {...project}
                    image={images[project.image]}
                  />
                );
              }
            })
          : projectsData.slice(0, 6).map((project, index) => {
              if (windowWidth < 1024)
                return (
                  <ProjectCardMobile
                    variants={childVariant}
                    key={index}
                    {...project}
                    image={images[project.image]}
                  />
                );
              else {
                return (
                  <ProjectCard
                    variants={childVariant}
                    key={index}
                    {...project}
                    image={images[project.image]}
                  />
                );
              }
            })}
      </motion.div>
      <div
        onClick={() => setShowMore(!showMore)}
        className="mx-auto mt-12 w-fit text-center"
      >
        <Button>{showMore ? "Show Less" : "Show More"}</Button>
      </div>
    </motion.div>
  );
}

export default Project;
