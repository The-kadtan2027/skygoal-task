import React from "react";
import "./styles.css";

//icon
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function Specialists() {
  return (
    <section className="wrapper-specialist">
      <h1 className="specialist-title">Mobile Specialist</h1>
      <img className="line" src={require("../images/Line1.png")} alt="" />
      <div className="persons">
        <div className="person">
          <img
            className="person-img"
            src={require("../images/coverp1.png")}
            alt="person"
          />
          <h3 className="field">System Analyst</h3>
          <h1 className="person-name">Rodney Stratton</h1>
          <div className="person-contact">
            <FacebookIcon className="icons" />
            <TwitterIcon className="icons" />
            <InstagramIcon className="icons" />
          </div>
        </div>
        <div className="person">
          <img
            className="person-img"
            src={require("../images/coverp2.png")}
            alt="person"
          />
          <h3 className="field">System Analyst</h3>
          <h1 className="person-name">Rodney Stratton</h1>
          <div className="person-contact">
            <FacebookIcon className="icons" />
            <TwitterIcon className="icons" />
            <InstagramIcon className="icons" />
          </div>
        </div>
        <div className="person">
          <img
            className="person-img"
            src={require("../images/coverp3.png")}
            alt="person"
          />
          <h3 className="field">Programmer</h3>
          <h1 className="person-name">Rodney Stratton</h1>
          <div className="person-contact">
            <FacebookIcon className="icons" />
            <TwitterIcon className="icons" />
            <InstagramIcon className="icons" />
          </div>
        </div>
        <div className="person">
          <img
            className="person-img"
            src={require("../images/coverp4.png")}
            alt="person"
          />
          <h3 className="field">Programmer</h3>
          <h1 className="person-name">Rodney Stratton</h1>
          <div className="person-contact">
            <FacebookIcon className="icons" />
            <TwitterIcon className="icons" />
            <InstagramIcon className="icons" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Specialists;
