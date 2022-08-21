import React from "react";
import { NavLink } from "react-router-dom";
import footerImage from "../../assets/adsan-footer.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer">
        <div className="image__footer">
          <img src={footerImage} alt="footer" />
        </div>

        <div className="contact__list">
          <h3 className="c__us">Contact Us</h3>
          <div className="contact">
            <p>7th Floor, CBC Towers, Olubunmi Owa Street.</p>
            <p>Lekki Phase 1, Lagos, Nigeria.</p>
          </div>
          <div className="contact">
            <p>Phone Number</p>
            <p>+2349018823578</p>
          </div>
          <div className="contact">
            <p>Email Address</p>
            <p>opedagogy@gmail.com</p>
          </div>
        </div>

        <div className="footer__links">
          <h3 className="c__us">Hot-Links</h3>
          <div className="f__links">
            <NavLink className="hot__l" to="/about">
              About Us
            </NavLink>
          </div>
          <div className="f__links">
            <NavLink className="hot__l" to="/clients">
              Clients
            </NavLink>
          </div>
          <div className="f__links">
            <NavLink className="hot__l" to="/contacts">
              Contacts
            </NavLink>
          </div>
        </div>
      </div>

      <div className="copy">
        <p>@ 2022 Pedagogy Group | Made By Daniel</p>
      </div>
    </div>
  );
};

export default Footer;
