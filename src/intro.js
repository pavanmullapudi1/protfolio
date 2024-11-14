import React from "react";
import logo from "./assets/images/intro.jpg";
function IntroBlock() {
  const leftInfo = {
    width: "50%",
    position: "relative",
  };
  const imgSTyles = { position: "absolute", bottom: "39px" };
  const textStyle = {
    fontFamily: "Inter, sans-serif",
    fontOpticalSizing: "auto",
    fontWeight: "bold",
    fontStyle: "normal",
    fontSize: "20px",
    textTransform: "uppercase",
    color: "rgb(203, 153, 126)",
    marginBottom: "0px",
    marginTop: "auto",
    bottom: "150px",
    position: "absolute",
    letterSpacing: "1px",
  };
  const uiuixDesign = {
    position: "absolute",
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: "48px",
    bottom: "89px",
    right: "0px",
    letterSpacing: "6px",
  };
  const line = {
    height: "8px",
    background: "#DDBEA9",
  };
  const lineD = {
    height: "8px",
    background: "#505050",
  };
  const pSTyle = {
    margin: "0px",
    height: "62px",
    color: "#DDBEA9",
  };
  const pSTyleD = {
    margin: "0px",
    height: "62px",
    color: "#505050",
    position: "absolute",
    fontFamily: "Inter, sans-serif",
    fontWeight: 500,
    fontSize: "48px",
    bottom: "96px",
    letterSpacing: "6px",
    textTransform: "uppercase",
  };
  const TextSty = {
    margin: "0px",
    height: "61px",
  };
  const rightInfo = {
    position: "relative",
  };
  return (
    <div className="intro">
      <div className="d-flex flex-row">
        <div className="left-info-text" style={leftInfo}>
          <p style={textStyle}>
            Passionate about transforming ideas into intuitive designs and
            efficient code.
          </p>
          <div className="d-flex flex-row" style={imgSTyles}>
            <svg
              width="357"
              height="122"
              viewBox="0 0 357 122"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="74" width="357" height="16" fill="#7F5A39" />
              <rect
                x="110.112"
                width="89.3333"
                height="59.5556"
                rx="5.95556"
                fill="#AFAFAF"
              />
              <circle
                cx="154.781"
                cy="29.7809"
                r="4.46667"
                fill="black"
                fillOpacity="0.2"
              />
              <path
                d="M162.222 54.5898L154.777 54.5923L147.333 54.5898L154.777 59.5528L147.333 74.4417H162.222L154.777 59.5528L162.222 54.5898Z"
                fill="#C3C3C3"
              />
              <path
                d="M74.4453 17.4778C74.4453 15.8332 75.7785 14.5 77.4231 14.5H101.245C102.89 14.5 104.223 15.8332 104.223 17.4778V74.0556H74.4453V17.4778Z"
                fill="#545454"
              />
              <circle
                cx="93.4667"
                cy="25.4667"
                r="4.46667"
                fill="black"
                fillOpacity="0.18"
              />
              <path
                d="M221.333 16.8884C221.333 15.7839 222.229 14.8884 223.333 14.8884H308.667C309.771 14.8884 310.667 15.7839 310.667 16.8884V74.444H221.333V16.8884Z"
                fill="#D9D9D9"
              />
              <circle
                cx="265.945"
                cy="44.945"
                r="5.945"
                fill="black"
                fillOpacity="0.24"
              />
              <path
                d="M20.5093 58.0674H48.7669V61.0735L42.7547 73.9999H33.4357H26.5215L20.5093 61.0735V58.0674Z"
                fill="#6E472E"
              />
              <path
                d="M34.9387 58.0675V57.7669V52.3559M37.043 41.8344L34.9387 46.3436M37.043 41.8344L39.4479 37.3252M37.043 41.8344L31.9326 37.9264L32.5338 36.4233M34.9387 52.3559L32.5338 51.1534L28.3252 48.7485M34.9387 52.3559L39.4479 48.7485M34.9387 52.3559L34.3375 46.9448L34.9387 46.3436M34.9387 46.3436L29.5276 41.8344M34.9387 46.3436L37.043 45.4417L39.7485 42.7362"
                stroke="black"
                strokeWidth="0.601227"
              />
              <path
                d="M38.5711 49.0632C39.7605 50.5774 40.1554 49.7243 41.0654 48.9276C41.9754 48.1309 42.7125 46.4615 42.5851 45.5489C41.6752 46.3456 37.2604 47.3946 38.5711 49.0632Z"
                fill="#5EFF31"
              />
              <path
                d="M38.3229 43.1996C40.1618 45.5778 40.9229 44.1197 42.5468 42.6979C44.1708 41.2761 45.5997 38.4268 45.4861 36.928C43.8622 38.3498 36.2965 40.5788 38.3229 43.1996Z"
                fill="#5EFF31"
              />
              <path
                d="M38.2882 36.9919C40.0525 39.4259 40.8584 37.9921 42.5256 36.6213C44.1928 35.2505 45.7094 32.4469 45.6423 30.9453C43.9751 32.3161 36.3439 34.3096 38.2882 36.9919Z"
                fill="#5EFF31"
              />
              <path
                d="M32.6941 38.6687C30.5049 40.729 29.9819 39.1696 28.6011 37.5106C27.2203 35.8517 26.2561 32.8135 26.6034 31.3511C27.9841 33.0101 35.1065 36.3983 32.6941 38.6687Z"
                fill="#5EFF31"
              />
              <path
                d="M31.1883 43.0982C29.5719 44.6187 29.1888 43.4711 28.1737 42.2515C27.1586 41.0318 26.4525 38.7959 26.7106 37.7185C27.7257 38.9381 32.9696 41.4227 31.1883 43.0982Z"
                fill="#5EFF31"
              />
              <path
                d="M30.9886 49.9621C29.6074 52.0243 28.8997 50.867 27.4837 49.7884C26.0678 48.7098 24.7328 46.4449 24.7428 45.2045C26.1587 46.2831 32.5106 47.6895 30.9886 49.9621Z"
                fill="#5EFF31"
              />
              <path
                d="M56 40C56 38.8954 56.8954 38 58 38H67C68.1046 38 69 38.8954 69 40V74H56V40Z"
                fill="#FF0808"
              />
              <path
                d="M60 32.5H65C65.8284 32.5 66.5 33.1716 66.5 34V37.5H58.5V34C58.5 33.1716 59.1716 32.5 60 32.5Z"
                fill="#C59C9C"
                stroke="black"
              />
              <path
                d="M219 72.5C219 74.433 215.194 74 210.5 74C205.806 74 202 74.433 202 72.5C202 70.567 205.806 69 210.5 69C215.194 69 219 70.567 219 72.5Z"
                fill="#D9D9D9"
              />
              <ellipse cx="211" cy="71.5" rx="0.5" ry="1.5" fill="#877D7D" />
              <ellipse cx="74" cy="22" rx="1" ry="7" fill="#D9D9D9" />
              <ellipse cx="104" cy="21" rx="1" ry="7" fill="#D9D9D9" />
              <path
                d="M105 19C102.265 8 98.0604 3 89.5 3C80.9396 3 76.3479 10 74 19C74 9.61116 80.9396 2 89.5 2C98.0604 2 105 9.61116 105 19Z"
                fill="#D9D9D9"
              />
            </svg>
          </div>
          <div style={uiuixDesign}>
            <p style={pSTyle}>UI/UX</p>
            <div style={line}></div>
          </div>
        </div>
        <div style={rightInfo}>
          <div style={pSTyleD}>
            <p style={TextSty}>Designer.....</p>
            <div style={lineD}></div>
          </div>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default IntroBlock;
