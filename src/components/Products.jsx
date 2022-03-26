import React from "react";
import "./styles.css";

function Products() {
  return (
    <main className="wrapper-products">
      <h1 className="product-title">Products and Services</h1>
      <section className="products">
        <div className="product">
          <div className="product-products">
            <img
              className="product-img"
              src={require("../images/product-description1.png")}
              alt="product-discription"
            />
            <h2 className="product-name">Our Product</h2>
            <p className="product-discription">
              Our product is made on the base of our team’s careful research and
              analyses, ranging from internet based application.
            </p>
            <button className="product-btn">Read More</button>
          </div>
        </div>
        <div className="product">
          <div className="product-products">
            <img
              className="product-img"
              src={require("../images/product-description2.png")}
              alt="product-discription"
            />
            <h2 className="product-name">Our Services</h2>
            <p className="product-discription">
              DSI’s shared service solutions focus on the front-end based
              software development, designed specifically for the banking and
              financial sectors.
            </p>
            <button className="product-btn">Read More</button>
          </div>
        </div>
        <div className="product">
          <div className="product-products">
            <img
              className="product-img"
              src={require("../images/product-description3.png")}
              alt="product-discription"
            />
            <h2 className="product-name">Our Technology</h2>
            <p className="product-discription">
              First JAVA, runs on more than 850 million personal computers
              worldwide, and on billions of devices worldwide, including mobile
              and TV devices.
            </p>
            <button className="product-btn">Read More</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Products;
