import React from "react";
import Hero from "./hero/Hero";
import About from "./about/About";
import Services from "./services/Services";
import Contact from "./contact/Contact";
const Home = () => {
  return (
    <section>
      <Hero />
      <About />
      <Services />
      <Contact />
    </section>
  );
};

export default Home;
