import React from "react";
import CountryList from "country-list-with-dial-code-and-flag";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function Login() {
  const a = CountryList.findOneByCountryCode("IN");
  const flag = window.CountryFlagSvg[a.code];
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  const flagDiag = {
    width: "28px",
    position: "absolute",
    left: "6px",
    top: "6px",
  };
  const posDiv = {
    position: "relative",
  };
  const inpSTyles = {
    border: "1px solid rgb(231, 231, 231)",
    padding: "7px 38px",
    borderRadius: "3px",
    color: "#6e6868",
  };
  const dropdown = {
    width: "70px",
    left: "39px",
    top: "1px",
    position: "absolute",
    height: "39px !important",
  };

  return (
    <div>
      <div style={posDiv}>
        <div
          className="flag"
          style={flagDiag}
          dangerouslySetInnerHTML={{ __html: flag }}
        ></div>
        <Dropdown
          options={options}
          value={defaultOption}
          style={dropdown}
          placeholder="Select an option"
        />
        <input style={inpSTyles} />
      </div>
    </div>
  );
}

export default Login;
