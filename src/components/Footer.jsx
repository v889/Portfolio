import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineArrowUp,
} from "react-icons/ai";
import profile from '../assets/FooterProfile.png'

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={profile}
          alt="Founder"
        />

        <h2>Vishal Gupta</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://instagram.com/vishal_gupta1809" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/v889" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;