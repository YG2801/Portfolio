import React, { useEffect, useState } from "react";
import { GiHummingbird } from "react-icons/gi";
import BirdsChirp from "../assets/birds-chirp.mp3";
import { motion } from "framer-motion";

const audio = new Audio(BirdsChirp);

function AudioComp() {
  const [audioPlaying, setAudioPlaying] = useState(false);
  function toggleAudio() {
    setAudioPlaying(!audioPlaying);
  }

  useEffect(() => {
    if (audioPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [audioPlaying]);

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="fixed bottom-10 left-4 z-50 lg:left-10 md:left-6"
    >
      <GiHummingbird
        onClick={toggleAudio}
        className="size-10 -rotate-45 cursor-pointer text-teal-600 drop-shadow-[0_0_30px_rgba(255,255,255,1)] transition-transform lg:hover:scale-125"
      />
    </motion.div>
  );
}

export default AudioComp;
