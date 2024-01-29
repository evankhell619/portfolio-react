import React from "react";
import { ImLinkedin, ImInstagram, ImTwitter, ImYoutube } from "react-icons/im";
// import { FaGithub, FaSlack, FaLinkedin } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <ImLinkedin />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <ImYoutube />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <ImTwitter />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
