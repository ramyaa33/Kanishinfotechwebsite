// src/components/Footer.js
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXing
} from "react-icons/fa";
import { SiGmail } from "react-icons/si"; // ✅ Add this line


const Footer = () => {
  return (
    <footer className="simple-footer">
      <div className="footer-content">
        <div className="footer-columns">
          <img src="img/Logo_Kanish_01.ico"></img>
          {/* Company Info */}
          <div className="footer-column">
            <h3>Company</h3>
            <p>2nd Floor, Karthick Raja Complex, Anna Nagar, Vinayagar Nagar <br /> Madurai, Tamil Nadu 625020</p>
            <p><strong>Phone:</strong> 91-6374278716</p>
            <p><strong>Email:</strong> kanishinfotech02@gmail.com</p>
            <div className="social-icons">
            <h3>Follow Us</h3>
           
              <a href="#"><FaXing /></a>
              <a href="mailto:kanishinfotech02@gmail.com"><SiGmail /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="footer-column">
            <h3>Useful Links</h3>
            <ul>
              <li><a href="/firstpg">Home</a></li>
              <li><a href="/about">About us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/navbar">Category Index</a></li>
              <li><a href="#">Security Policy</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-column">
            <h3>Our Services</h3>
            <ul>
              <li><a href="/services">Data Entry</a></li>
              <li><a href="/services">Typesettingt</a></li>
              <li><a href="/services">Desktop Publishing</a></li>
              <li><a href="/services">Image Editing</a></li>
              <li><a href="/services">Data Mining</a></li>
            </ul>
          </div>
        </div>

        
          {/* Aboutus */}
          {/* <div className="footer-column">
            <h3>About us</h3>
            <p> Offers a wide range of offshore services all under one roof and a one-stop basis including 
              Data Entry, Specializes in digitizing data from handwritten documents and manuscripts, Data Mining 
              Services, Scanning / OCR Services, Form Processing Services, Form Filling, Conversion, Transcribing 
              handwritten document & Document Management Services at affordable rates. If you are looking for data entry service provider.
           </p>
          </div> */}

        <div className="footer-bottom">
          <p>© 2025 Your Company. All rights reserved.</p>
        </div>
      </div>

      {/* Wave Animation */}
      <div className="wave-wrapper">
        <svg className="bottom-wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            d="M0,192L60,170.7C120,149,240,107,360,112C480,117,600,171,720,176C840,181,960,139,1080,122.7C1200,107,1320,117,1380,122.7L1440,128V320H0Z"
            fill="Black"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
