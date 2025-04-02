import React from "react";
import about from "./assets/images/aboutme.png";
function AboutMe() {
  const aboutStyle = {
    width: "795px",
    height: "343px",
  };
  const leftInfo = {
    width: "485px",
    alignItems: "center",
    display: "flex",
  };
  const aboutMe = {
    margin: "0px",
    height: "62px",
    position: "absolute",
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: "48px",
    top: "5px",
    textTransform: "uppercase",
    wordSpacing: "-5px",
    color: "#FF4D88",
  };
  const aboutMePlace = {
    position: "relative",
    width: "1279px",
  };
  const aboutText = {
    fontSize: "12px",
    padding: "10px",
    width: "442px",
    height: "92px",
    color: "#A1A1A1",
    verticalAlign: "middle",
    alignItems: "center",
    display: "flex",
  };
  return (
    <div className="mt-1" style={aboutMePlace}>
      <p style={aboutMe}>About Me</p>
      <div className="d-flex flex-row">
        <div style={leftInfo}>
          <div style={aboutText}>
            <p>
              To create impactful digital experiences that blend creativity and
              functionality. I aim to design with purpose, ensuring every
              interface is intuitive, visually appealing, and user-centered. My
              goal is to push the boundaries of design and technology,
              delivering solutions that inspire and empower users.
            </p>
          </div>
        </div>
        <div>
          <img src={about} alt="logo" style={aboutStyle} />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
