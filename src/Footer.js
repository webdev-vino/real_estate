import React from "react";
import "./footer.css";

const Footer = () => {

  const year = new Date();
  return (
    <>
    <div className="footer">
      <div className="footer-front margin">
        <img src="/images/logo.png" alt="icon" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis
          ab nulla exercitationem at, asperiores sed incidunt magni Reiciendis
          modi provident eos dolorum ea!
        </p>
        <div className="footer-icon">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-pinterest"></i>
        </div>
      </div>
      <div className="quick-link margin">
      <h1>Quick Links</h1>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>About Us</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="quick-link margin">
      <h1>Services</h1>
        <ul>
          <li>Duplex House</li>
          <li>Apartment</li>
          <li>Plaza</li>
          <li>Building</li>
        </ul>
      </div>
      <div className="get-in-touch quick-link margin">
      <h1>Get In Touch</h1>
        <ul>
          <li><i class="fa-solid fa-phone"></i> +91 00000 00000</li>
          <li><i class="fa-regular fa-envelope"></i> developer@gmail.com</li>
          <li><i class="fa-solid fa-globe"></i> www.google.com</li>
          <li><i class="fa-solid fa-location-dot"></i> no 1, guindy, chennai-600 022</li>
        </ul>
      </div>
    </div>
    <div className="copy">
      <p>{year.getFullYear()} <i class="fa-regular fa-copyright"></i> All right reserved by <b> Real Estate</b></p>
    </div>
    </>
  );
};

export default Footer;
