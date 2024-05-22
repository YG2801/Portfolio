import React from "react";
import { motion } from "framer-motion";

function EducationCard({ image, title, year, school, location, grade }) {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col-reverse items-center justify-evenly text-slate-100 sm:items-start md:flex-row md:items-center md:gap-4"
    >
      <div className="mt-12 flex flex-col gap-2 border-l-2 border-[#5ca4a9] pl-4 md:mt-0">
        <h2 className="text-xl font-semibold lg:text-3xl">{title}</h2>
        <p className="font-montserrat lg:text-lg">{year}</p>
        <p className="font-montserrat lg:text-lg">{school}</p>
        <p className="font-montserrat lg:text-lg">{location}</p>
        <p className="font-montserrat font-medium lg:text-lg">{grade}</p>
      </div>
      <img
        src={image}
        alt="institue image"
        className="h-[220px] w-full max-w-[400px] rounded-lg object-cover shadow-2xl md:h-[270px] lg:h-[350px]"
      />
    </motion.div>
  );
}

export default EducationCard;
