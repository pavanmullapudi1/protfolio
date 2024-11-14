import React from "react";
import exp from "./assets/images/exp.png";
function Experience() {
  const aboutStyle = {
    width: "795px",
    height: "343px",
  };
  const leftInfo = {
    alignItems: "center",
    display: "flex",
    marginLeft: "auto",
  };
  const aboutMe = {
    margin: "0px",
    height: "62px",
    background:
      "linear-gradient(90deg, rgba(177, 177, 129, 1) 13%, rgba(215, 213, 204, 1) 50%) text",
    WebkitTextFillColor: "transparent",
    position: "absolute",
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: "48px",
    top: "5px",
    textTransform: "uppercase",
    right: "288px",
    wordSpacing: "-5px",
  };
  const aboutMePlace = {
    position: "relative",
  };
  const aboutText = {
    fontSize: "12px",
    background: "rgb(37, 37, 37)",
    padding: "10px",
    width: "442px",
    color: "rgb(183, 183, 164)",
    verticalAlign: "middle",
    alignItems: ["center", "flex-start"],
    display: "flex",
    flexDirection: "column",
    height: "137px",
  };
  return (
    <div className="mt-1 " style={aboutMePlace}>
      <p style={aboutMe}>Experience</p>
      <div className="d-flex flex-row">
        <div>
          <img src={exp} alt="logo" style={aboutStyle} />
        </div>
        <div style={leftInfo}>
          <div style={aboutText}>
            <h3>PMS</h3>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;