import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import SocialIcon from "./SocialIcon";
import { motion } from "framer-motion";

function SocialIconsMenu() {
  const [isVisible, setIsVisible] = useState(false);

  const socialIconsArray = [
    {
      icon: <FaLinkedin className="bg-white text-3xl text-[#0A66C2]" />,
      link: "https://www.linkedin.com/in/yash-garg-20071122a/",
      animationProp: {
        animateToTop: 60,
        animateDuration: 0.3,
        exitDuration: 0.2,
        exitDelay: 0.8,
      },
      zIndex: 50,
    },
    {
      icon: <FaGithub className="rounded-full bg-black text-3xl text-white" />,
      link: "https://github.com/YG2801",
      animationProp: {
        animateToTop: 120,
        animateDuration: 0.6,
        exitDuration: 0.4,
        exitDelay: 0.6,
      },
      zIndex: 40,
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 95 111"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="h-full w-auto max-w-none"
        >
          <path
            d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z"
            fill="#FFA116"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z"
            fill="#B3B3B3"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z"
            fill="black"
          ></path>
        </svg>
      ),
      link: "https://leetcode.com/u/Yash_6207/",
      animationProp: {
        animateToTop: 180,
        animateDuration: 0.9,
        exitDuration: 0.6,
        exitDelay: 0.4,
      },
      zIndex: 30,
    },
    {
      icon: (
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3521352-2944796.png"
          alt="codeforces-icon"
          className="size-[28px]"
        />
      ),
      link: "https://codeforces.com/profile/yashgarg_2801",
      animationProp: {
        animateToTop: 240,
        animateDuration: 1.2,
        exitDuration: 0.8,
        exitDelay: 0.2,
      },
      zIndex: 20,
    },
    {
      icon: (
        <img
          src="https://download.logo.wine/logo/Gmail/Gmail-Logo.wine.png"
          alt="gmail-icon"
        />
      ),
      link: "mailto:yashgarg.6208@gmail.com",
      animationProp: {
        animateToTop: 300,
        animateDuration: 1.5,
        exitDuration: 1,
        exitDelay: 0,
      },
      zIndex: 10,
    },
  ];

  return (
    <motion.div
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed left-2 top-[15%] z-50 font-montserrat md:left-3 md:top-[20%] lg:left-5 lg:top-1/4"
    >
      <div
        onClick={() => setIsVisible(!isVisible)}
        className="absolute left-0 top-0 z-[100] flex size-[40px] cursor-pointer items-center justify-center rounded-full bg-slate-100 bg-opacity-60 text-xs text-black transition-transform active:scale-125 active:bg-opacity-80 active:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)] lg:bg-opacity-100 lg:hover:scale-125 lg:hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
      >
        {isVisible ? "Close" : "Social"}
      </div>
      {socialIconsArray.map((iconDetail, index) => (
        <SocialIcon key={index} isVisible={isVisible} iconDetail={iconDetail} />
      ))}
    </motion.div>
  );
}

export default SocialIconsMenu;
