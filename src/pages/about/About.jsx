import React, { useState } from "react";
import "./About.scss";
import One from "../../assets/images/AboutFire Image.png";
import ACard from "../../components/Card/ACard";
import AboutData from "../../Data/AboutData";

const About = () => {
  const [data] = useState(AboutData);
  return (
    <section id="about" className="A_Container">
      <div className="A_Wrapper">
        <div className="A_Text_Wrap">
          <div className="border-left">
            <div className="A_Text_Title">
              ZYDOX INC <span className="red-dot">.</span>
            </div>
            <h3 className="A_Text_Header">OUR CORE VALUES</h3>
          </div>
          <p>
            We operate on a set of core principles and values that guide how we
            conduct our business
          </p>
          <ACard items={data} />
        </div>
        <div className="A_Image_Wrap">
          <img src={One} className="A_Image" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
