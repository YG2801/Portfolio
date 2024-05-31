import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

function ProjectCard({
  variants,
  image,
  title,
  liveLink,
  githubLink,
  alignment,
  techStack,
  isVideo,
}) {
  const [innerCardVisible, setInnerCardVisible] = useState(false);
  const [centerCoords, setCenterCoords] = useState({ x: 0, y: 0 });

  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    setCenterCoords({
      x: card.offsetLeft + card.offsetWidth / 2,
      y: card.offsetTop + card.offsetHeight / 2,
    });
    window.addEventListener("resize", () => {
      const card = cardRef.current;
      setCenterCoords({
        x: card.offsetLeft + card.offsetWidth / 2,
        y: card.offsetTop + card.offsetHeight / 2,
      });
    });
  }, []);

  function handleHoverCard(e) {
    const xAngle = (e.pageY - centerCoords.y) / 10;
    const yAngle = (centerCoords.x - e.pageX) / 10;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${xAngle}deg) rotateY(${yAngle}deg)`;
  }

  const controlsInnerCard = useAnimation();

  function handleHoverStart() {
    controlsInnerCard.start({
      top: "auto",
      border: "1px solid #ccc",
      opacity: 1,
      transition: { duration: 0.3, ease: "linear" },
    });
    setInnerCardVisible(true);
  }

  function handleHoverEnd() {
    controlsInnerCard.start({
      top: "30%",
      opacity: 0,
    });
    setInnerCardVisible(false);
  }

  return (
    <motion.div
      ref={cardRef}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onMouseMove={handleHoverCard}
      onMouseLeave={() => (cardRef.current.style.transform = "none")}
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)) , url(${image}) no-repeat ${alignment}/cover`,
      }}
      className="relative flex size-[320px] shrink-0 items-center justify-center overflow-hidden rounded-lg border hover:border-none"
    >
      <motion.div
        animate={controlsInnerCard}
        className="absolute top-1/3 size-[300px] rounded-lg bg-white bg-opacity-5 p-4 opacity-0 backdrop-blur-md"
      >
        {innerCardVisible && (
          <motion.h2
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="mb-4 font-montserrat text-2xl font-semibold text-zinc-100"
          >
            {title}
          </motion.h2>
        )}
        {innerCardVisible && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <a
              href={liveLink}
              target="_blank"
              className="block w-24 rounded-md bg-gradient-to-r from-zinc-900 via-zinc-400 to-zinc-200 p-1"
            >
              <p className="rounded-sm bg-zinc-50 bg-opacity-60 px-3 py-1 text-center font-montserrat font-semibold text-black">
                {isVideo ? "Video" : "Live"}
              </p>
            </a>
            <a
              href={githubLink}
              target="_blank"
              className="block w-24 rounded-md bg-gradient-to-r from-zinc-900 via-zinc-400 to-zinc-200 p-[3px]"
            >
              <p className="rounded-sm bg-zinc-50 bg-opacity-60 px-3 py-1 text-center font-montserrat font-semibold text-black">
                Github
              </p>
            </a>
          </motion.div>
        )}
        {innerCardVisible && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="mt-5 flex items-center gap-2"
          >
            {Object.values(techStack).map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="size-8 object-contain"
              />
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default ProjectCard;
