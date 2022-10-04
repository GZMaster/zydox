import React from "react";
import Hero from "./hero/Hero";
import About from "./about/about";
import Services from "./services/Services";
import Contact from "./contacts/Contacts";
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
