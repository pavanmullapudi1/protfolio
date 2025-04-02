import React from "react";
import vandm from "./assets/images/missionandvission.png";
function VisionMission() {
  const vandmStyle = {
    width: "795px",
    height: "343px",
  };
  const leftInfo = {
    width: "485px",
  };
  const vision = {
    margin: "0px",
    height: "62px",
    position: "absolute",
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: "48px",
    top: "5px",
    textTransform: "uppercase",
    zIndex: 1,
    color: "#9B51E0",
  };
  const mission = {
    margin: "0px",
    height: "62px",
    position: "absolute",
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: "48px",
    top: "159px",
    textTransform: "uppercase",
    zIndex: 1,
    color: "#41E884",
  };
  const visionMission = {
    position: "relative",
    width: "1279px",
  };
  const vissionText = {
    fontSize: "12px",
    padding: "10px",
    marginTop: "67px",
    width: "442px",
    height: "92px",
    color: "#B0B0B0",
  };
  return (
    <div className="mt-1" style={visionMission}>
      <p style={vision}>Vision</p>
      <p style={mission}>Mission</p>
      <div className="d-flex flex-row">
        <div style={leftInfo}>
          <div style={vissionText}>
            <p>
              To create impactful digital experiences that blend creativity and
              functionality. I aim to design with purpose, ensuring every
              interface is intuitive, visually appealing, and user-centered. My
              goal is to push the boundaries of design and technology,
              delivering solutions that inspire and empower users.
            </p>
          </div>
          <div style={vissionText}>
            <p>
              To continuously enhance my skills in UI/UX and development,
              crafting designs that are both innovative and accessible. I am
              committed to delivering user-focused solutions that solve
              real-world problems, collaborating with teams to transform ideas
              into seamless digital experiences that exceed expectations.
            </p>
          </div>
        </div>
        <div>
          <div className="intoImg">
            <img src={vandm} alt="logo" style={vandmStyle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionMission;
