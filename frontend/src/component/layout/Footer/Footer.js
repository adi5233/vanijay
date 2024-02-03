import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>ECOMMERCE.</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2021 @ Aditya Senapati</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <h1>Instagram</h1>
        <h1>Youtube</h1>
        <h1>Facebook</h1>
      </div>
    </footer>
  );
};

export default Footer;
