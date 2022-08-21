import React from "react";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import cardImage from "../../assets/Oil-and-gas.jpg";
import logoImage from "../../assets/Chevron.jpg";
import "./home.css";
//Changes made to the home page

export default function Home() {
  return (
    <div className="home__container">
      <Banner />

      <div className="container">
        <div className="card__holder">
          <div>
            <h1 className="card__header">Oil & Gas</h1>
            <img className="card__image" src={cardImage} alt="construction" />
          </div>

          <p className="paragraph1">
            We provide top-notch oil and gas services which cut across upstream,
            midstream and downstream. We provide top-notch oil and gas services
            which cut across upstream, midstream and downstream.
          </p>

          <button className="card__btn">Learn More</button>
        </div>

        <div className="card__holder">
          <div>
            <h1 className="card__header">Consultancy</h1>
            <img className="card__image" src={cardImage} alt="construction" />
          </div>

          <p className="paragraph1">
            We provide top-notch oil and gas services which cut across upstream,
            midstream and downstream. We provide top-notch oil and gas services
            which cut across upstream, midstream and downstream.
          </p>

          <button className="card__btn">Learn More</button>
        </div>

        <div className="card__holder">
          <div>
            <h1 className="card__header">Marine Services</h1>
            <img className="card__image" src={cardImage} alt="construction" />
          </div>

          <p className="paragraph1">
            We provide top-notch oil and gas services which cut across upstream,
            midstream and downstream. We provide top-notch oil and gas services
            which cut across upstream, midstream and downstream.
          </p>

          <button className="card__btn">Learn More</button>
        </div>
      </div>

      <h1 className="best__client">The Best Clients</h1>

      <div className="logo__holders">
        <div>
          <img className="logo__img" src={logoImage} alt="logo1" />
        </div>

        <div>
          <img className="logo__img" src={logoImage} alt="logo1" />
        </div>

        <div>
          <img className="logo__img" src={logoImage} alt="logo1" />
        </div>

        <div>
          <img className="logo__img" src={logoImage} alt="logo1" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
