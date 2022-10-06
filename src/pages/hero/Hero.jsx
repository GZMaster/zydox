import React from "react";
import { Link } from "react-scroll";
import "./Hero.scss";

const Home = () => {
  return (
    <div className="banner_container">
      <div className="banner_wrapper">
        <p>
          <span>Integrity.</span>
          <span>Innovation. </span>
          <span>Teamwork</span>
        </p>
        <h3>MEETING THE WORLD’S EVER-GROWING DEMAND FOR ENERGY.</h3>
        <p>
          Zydox Incorporation is an integrated energy company that aims to meet
          Nigeria’s ever-growing demand for energy in ways that are
          economically, environmentally, and socially responsible. Our ambition
          is to provide reliable, affordable, and more sustainable energy. We
          focus on oil and gas production for industrial and commercial
          customers. We aim to position ourselves as top leaders in the oil and
          gas industry competing with industry giants like Shell, Chevron, Exxon
          Mobil, and the likes.
        </p>
        <Link activeClass="active" smooth spy to="contact">
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Home;
