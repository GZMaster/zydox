/* eslint-disable indent */
import React, { useState, useEffect, useRef } from "react";
import background1 from "../../assets/construct.jpg";
import background2 from "../../assets/consult.png";
import background3 from "../../assets/oil-refinery-vessels-1_1.jpg";
import background4 from "../../assets/slider1.jpg";
import background5 from "../../assets/oil_field_shillouete-1.jpg";
import "./banner.css";

const Banner = () => {
  const [panel, setPanel] = useState("panel-one");
  const change = useRef(0);

  useEffect(() => {
    setInterval(() => {
      if (change.current === 0) {
        setPanel("panel-one");
        change.current += 1;
      } else if (change.current === 1) {
        setPanel("panel-two");
        change.current += 1;
      } else if (change.current === 2) {
        setPanel("panel-three");
        change.current += 1;
      } else if (change.current === 3) {
        setPanel("panel-four");
        change.current += 1;
      } else if (change.current === 4) {
        setPanel("panel-five");
        change.current = 0;
      }
    }, 5000);
    console.log(change);
  }, []);

  return (
    <div className="banner__container">
      <div
        className={
          panel === "panel-one"
            ? "banner__holder active"
            : "banner__holder inactive"
        }
        onClick={() => setPanel("panel-one")}
      >
        <img className="banner" src={background1} alt="background" />
      </div>
      <div
        className={
          panel === "panel-two" ? "banner__holder active" : "banner__holder"
        }
        draggable="true"
        onClick={() => setPanel("panel-two")}
      >
        <img className="banner" src={background2} alt="background" />
      </div>
      <div
        className={
          panel === "panel-three" ? "banner__holder active" : "banner__holder"
        }
        onClick={() => setPanel("panel-three")}
      >
        <img className="banner" src={background3} alt="background" />
      </div>
      <div
        className={
          panel === "panel-four" ? "banner__holder active" : "banner__holder"
        }
        onClick={() => setPanel("panel-four")}
      >
        <img className="banner" src={background4} alt="background" />
      </div>
      <div
        className={
          panel === "panel-five" ? "banner__holder active" : "banner__holder"
        }
        onClick={() => setPanel("panel-five")}
      >
        <img className="banner" src={background5} alt="background" />
      </div>
    </div>
  );
};

export default Banner;
