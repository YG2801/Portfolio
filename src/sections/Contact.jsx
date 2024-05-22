import React, { useRef, useState, useContext } from "react";
import config from "../config/config";
import emailjs from "@emailjs/browser";
import { CursorDiv, Button, Popup } from "../components";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { IoIosCall } from "react-icons/io";
import { windowWidthContext } from "../App";

function Contact() {
  const controls = useAnimation();
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const windowWidth = useContext(windowWidthContext);

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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(config.serviceId, config.templateId, form.current, {
        publicKey: config.publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setShowPopup(true);
          setPopupMessage("success");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setShowPopup(true);
          setPopupMessage("error");
        },
      );
    form.current.reset();
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="contact"
      className="mt-16 min-h-screen px-8 py-28 md:mt-20 md:px-12 lg:mt-28 lg:px-16"
    >
      {windowWidth > 1024 && (
        <CursorDiv controls={controls} bg={"bg-yellow-950"} />
      )}
      <AnimatePresence>
        {showPopup && <Popup setShowPopup={setShowPopup}>{popupMessage}</Popup>}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto w-full sm:w-[500px] md:flex md:w-auto md:justify-around"
      >
        <div className="flex flex-col items-center gap-10 md:basis-1/3 md:items-start">
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            Contact Me
          </h1>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <FaLocationDot className="text-lg text-primary-dark md:text-xl" />
              <h3 className="font-montserrat text-white lg:text-lg">
                Delhi, India
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <LuMail className="text-lg text-primary-dark md:text-xl" />
              <a
                href="mailto:yashgarg.6208@gmail.com"
                className="font-montserrat text-white lg:text-lg"
              >
                yashgarg.6208@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <IoIosCall className="text-lg text-primary-dark md:text-xl" />
              <h3 className="font-montserrat text-white lg:text-lg">
                +91-9582255098
              </h3>
            </div>
          </div>
          <a
            href="https://i.imghippo.com/files/q0a6G1715858355.pdf"
            target="_blank"
          >
            <Button>View Resume</Button>
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:basis-1/2">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-4 font-montserrat *:rounded-lg  *:px-4 *:py-3 *:font-semibold *:outline-none *:placeholder:font-medium *:placeholder:text-zinc-800 *:placeholder:text-opacity-50"
          >
            <input
              className="bg-zinc-300 text-black"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <input
              className="bg-zinc-300 text-black"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <textarea
              className="resize-none bg-zinc-300 text-black"
              placeholder="Type your message..."
              name="message"
              rows={8}
              required
            />
            <Button extraStyles={"md:mt-2 lg:mt-6 w-full"}>Send Message</Button>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
