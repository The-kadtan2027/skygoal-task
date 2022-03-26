import React from "react";

function Contact() {
  return (
    <section className="wrapper-contact">
      <div className="address">
        <h3>PT Dwidasa Samsara Indonesia</h3>
        <p>Ruko Jalur Sutera 29A No. 53 Alam Sutera Serpong, Tangerang 15323</p>
      </div>
      <div className="contact">
        <h2>Contact</h2>
        <span>Phone : +62.21.5314.1135.</span>
        <span>Fax : +62.21.5314.1135</span>
        <span>Email :community@dwidasa.com</span>
      </div>
      <div className="technologies">
        <img src={require("../images/image1.png")} alt="" />
        <img src={require("../images/image2.png")} alt="" />
        <img src={require("../images/image3.png")} alt="" />
        <img src={require("../images/image4.png")} alt="" />
        <img src={require("../images/image5.png")} alt="" />
        <img src={require("../images/image6.png")} alt="" />
      </div>
    </section>
  );
}

export default Contact;
