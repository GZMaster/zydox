import React from "react";
import { NavLink } from "react-router-dom";
import "./About.scss";

const About = () => {
  return (
    <section id="about" className="A_Container">
      <div className="A_Wrapper">
        <div className="A_Text_Wrap">
          <div className="A_Text_Title">
            <span className="A_Orange">ZY</span>
            <span className="A_Blue">DOX</span> INVESTMENTS LTD
          </div>
          <h3 className="A_Text_Header">We are the best Investment Platform</h3>
          <p>
            Zydox Investment limited is one of Nigeria’s leading providers of
            foreign exchange related services and all round financial solutions.
            Our clientele base spans across various industries such as
            construction, telecommunications, IT, breweries etc. With a team of
            professional and passion driven individuals, our primary goal is to
            create a financial utopia for our clients as they deserve nothing
            less.
          </p>
          <NavLink className="A_Btn" to="/about">
            More About Us
          </NavLink>
        </div>
        <div className="A_Image_Wrap">
          <img src={null} className="A_Image" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
