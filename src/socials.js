import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Socials() {
  const email = "mullapudipavanphaniteja@gmail.com";
  const navigateTo = () => {
    window.open(
      "https://www.linkedin.com/in/mullapudi-pavan-phani-teja-4159561a1/"
    );
  };
  return (
    <div style={{ alignContent: "center" }}>
      <div className="d-flex flex-row">
        <div className="social-icon p-2">
          <FaLinkedin onClick={() => navigateTo()} />
        </div>
        <div className="social-icon p-2">
          <a href={`mailto:${email}`}>
            <BiLogoGmail />
          </a>
        </div>
        <div className="social-icon p-2">
          <FaXTwitter />
        </div>
        <div className="social-icon p-2">
          <FaInstagram />
        </div>
        <div className="social-icon p-2">
          <FaFacebookSquare />
        </div>
        <div className="social-icon p-2">
          <FaGithubSquare />
        </div>
        <div className="social-text"></div>
      </div>
    </div>
  );
}

export default Socials;
