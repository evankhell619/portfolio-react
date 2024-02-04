import React from "react";
import { ImLinkedin, ImGithub } from "react-icons/im";
// import { FaGithub, FaSlack, FaLinkedin } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-20">
      <ul className="flex gap-x-4">
        <li>
          <a
            href="https://www.linkedin.com/in/hanifan-hart/"
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/evankhell619"
            target="_blank"
            rel="noreferrer"
          >
            <ImGithub />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
