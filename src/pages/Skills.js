import React from "react";
import Img1 from "../img/skills/1.png";
import Img2 from "../img/skills/2.png";
import Img3 from "../img/skills/3.png";
import Img6 from "../img/skills/4.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          {/* img  grid*/}
          <div className="grid grid-cols-2 lg:gap-2">
            {/* img */}
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Img1}
                alt=""
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Img2}
                alt=""
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Img3}
                alt=""
              />
            </div>
            <div
              className="max-w-[250px] lg:max-w-[320px]
            h-[187px] lg:h-[220px] bg-accent overflow-hidden"
            >
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Img6}
                alt=""
              />
            </div>
          </div>
          {/* text */}
          <div className="flex flex-col lg:items-start">
            <h1 className="h1">My Skills</h1>
            <p className="mb-12 max-w-sm">
              With skills i have now, I am the perfect person to hire when it
              comes to a web project. Whatever your needs are, I can pretty much
              take on any challenge.
              <br />
            </p>
            <Link to={"/contact"} className="btn mb-[30px] mx-auto lg:mx-0">
              hire me
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
