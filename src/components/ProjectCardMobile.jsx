import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function ProjectCardMobile({
  variants,
  image,
  title,
  liveLink,
  githubLink,
  alignment,
  techStack,
  isVideo,
}) {
  const [img, setImg] = useState(null);

  useEffect(() => {
    async function importImage() {
      const img = await import(`..${image}`);
      setImg(img.default);
    }
    importImage();
  }, []);
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      style={
        img
          ? {
              background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)) , url(${img}) no-repeat ${alignment}/cover`,
            }
          : {
              background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)) , url(https://via.placeholder.com/300) no-repeat ${alignment}/cover`,
            }
      }
      className="relative flex size-[300px] shrink-0 items-center justify-center overflow-hidden rounded-lg border "
    >
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "linear" }}
        viewport={{ once: true, amount: 0.6 }}
        className="absolute size-[270px] rounded-lg bg-white bg-opacity-5 p-4 opacity-0 backdrop-blur-md "
      >
        <motion.h2
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mb-4 font-montserrat text-xl font-semibold text-zinc-100"
        >
          {title}
        </motion.h2>
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
              className="size-7 object-contain"
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectCardMobile;
