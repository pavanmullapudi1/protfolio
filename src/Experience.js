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
    color: "#FFB400",
    position: "absolute",
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: "48px",
    top: "5px",
    textTransform: "uppercase",
    right: "148px",
    wordSpacing: "-5px",
  };
  const aboutMePlace = {
    position: "relative",
    width: "1279px",
  };
  const aboutText = {
    fontSize: "12px",
    padding: "10px",
    width: "442px",
    color: "rgb(183, 183, 164)",
    verticalAlign: "middle",
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
              Designed intuitive user interfaces and improved user experience,
              resulting in a 35% increase in user engagement and a 25% boost in
              retention within six months. - Created responsive designs with
              Figma, improving user satisfaction scores by 25% via usability
              testing and iterative feedback
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
