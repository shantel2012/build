import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="/images/logo.png" alt="Buildlinks Logo" />
          <h2>Buildlinks</h2>
        </div>
        <h3 className="website">www.Buildlinks.com</h3>
      </div>

      <div className="footer-content">
        <div className="footer-about">
          <h4>About</h4>
          <p>
            At Buildlink Zimbabwe, we believe in building stronger communities—
            one project at a time. Whether you’re constructing a new home,
            fixing a burst pipe, or rewiring your office, finding a reliable
            expert shouldn’t be complicated
          </p>
        </div>

        <div className="footer-links">
          <h4>Links</h4>
          <ul>
            <li>About Us</li>
            <li>Service</li>
            <li>Contact Us</li>
            <li>Log in</li>
          </ul>
        </div>

        <div className="footer-hours">
          <h4>Working hours</h4>
          <p>Monday - Friday is</p>
          <p>8:00 - 16:00</p>
        </div>

        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <p>Phone number: +263077453434</p>
          <p>Head Office</p>
          <p>Harare, 231 Seke Road or Mutare ,Masasa 212 st</p>
          <p>Email us</p>
          <p>Buildlinks@gmail.com</p>
          <div className="footer-icons">
            <span>📞</span>
            <span>✉️</span>
            <span>🔗</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright 2020 by Buillinks</p>
      </div>
    </footer>
  );
}
