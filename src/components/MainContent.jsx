import React from "react";
import "./styles.css";

import vector from "../images/pana.svg";
import vector1 from "../images/pana-1.svg";

function MainContent() {
  return (
    <main>
      <section className="main">
        <div className="main-content">
          <h1 className="main-c-title">
            Making the most of the ever-growing{" "}
            <span className="title-red">Information Technology</span>
          </h1>
          <p className="main-c-disc">
            Managed by a team of professional experts with extensive experience
            and impressive track records
          </p>
          <button className="main-c-btn">Read More</button>
        </div>

        <div className="main-vector">
          <img src={vector} alt="vector" />
        </div>
      </section>
      <section className="main-2">
        <div className="main-vector-2">
          <img src={vector1} alt="vector" />
        </div>
        <div className="main-content-2">
          <h1 className="main-c-title-2">
            Welcome to{" "}
            <span className="title-red">Dwidasa Samsara Indonesia (DSI)</span>
          </h1>
          <p className="main-c-disc">
            Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by
            the founders, who each of them has a common end objective to
            innovate new creations by making the most of the ever-growing
            information technology through{" "}
            <span className="title-red">DSI</span>’s distinct front-end based
            application concept. Managed by a team of professional experts with
            extensive experience and impressive track records,{" "}
            <span className="title-red">DSI</span> believes that continuous
            improvements and innovations assure your business to run effectively
            and efficiently.
          </p>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
