import React from "react";
import Footer from "../../components/footer/Footer";
import clients from "../../assets/clients.jpg";
import "./clients.css";

const Clients = () => {
  return (
    <div>
      <div>
        <div className="clients_img__container">
          <img className="clients_img" src={clients} alt="clients" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Clients;
