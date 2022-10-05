import React from 'react'
import { Link } from "react-scroll";
import "./Home.scss"

const Home = () => {
    return (
        <div className="banner_container">
        <div className="banner_wrapper">
          <h3>
            World-class financial services, We are <b>ZYDOX.</b>
          </h3>
          <p>
            Here at ZYDOX, we’re committed to doing all we can to ensure you have
            the best experience with the variety of financial services we offer.
            Some of which include; foreign exchange transactions, business
            consulting, cash deliveries and many more.
          </p>
          <Link activeClass="active" smooth spy to="contact">
            Contact Us
          </Link>
        </div>
      </div>
    )
}

export default Home