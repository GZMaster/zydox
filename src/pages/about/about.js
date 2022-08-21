import React from "react";
import { DiAtom } from "react-icons/di";
import { UseMediaQuery } from "../../components/Components";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import rigImage from "../../assets/rig.jpg";
import "./about.css";

export default function About() {
  let isPageWide = UseMediaQuery("(min-width: 860px)");

  return (
    <div className="about_page">
      <Banner />

      <div className="about_cards">
        <div className="about_card">
          <DiAtom className="about_card_icon"></DiAtom>
          <div className="about_card_details">
            <h2 className="about_card_title">Our Vision</h2>
            <p className="about_card_text">
              To render qualitative service to our clients and above all,
              maintain the highest standards of honesty, integrity, and ethics
              in all aspects of our business.
            </p>
          </div>
        </div>

        <div className="about_card">
          <DiAtom className="about_card_icon"></DiAtom>
          <div className="about_card_details">
            <h2 className="about_card_title">Our Vision</h2>
            <p className="about_card_text">
              To render qualitative service to our clients and above all,
              maintain the highest standards of honesty, integrity, and ethics
              in all aspects of our business.
            </p>
          </div>
        </div>

        <div className="about_card">
          <DiAtom className="about_card_icon"></DiAtom>
          <div className="about_card_details">
            <h2 className="about_card_title">Our Vision</h2>
            <p className="about_card_text">
              To render qualitative service to our clients and above all,
              maintain the highest standards of honesty, integrity, and ethics
              in all aspects of our business.
            </p>
          </div>
        </div>
      </div>

      <div className="history_card">
        <img className="about_card_image" src={rigImage} alt=""></img>
        <div className="history_card_details">
          <h2 className="history_card_title">History of the Energy Business</h2>
          <p className="history_card_text">
            ADSAN RICH INVESTMENT LTD is in the business of petroleum products
            trading, construction, shipping, bureau de change, marine operations
            and consulting as a fully integrated energy & gas business services
            provider.
          </p>
          <p className="company">
            The Company’s Downstream business operations comprise the following
            key business areas:
          </p>
          <ul>
            <li>Supply & Trading (Importation & Bulk Marketer to PPMC)</li>
            <li>Marketing & Distribution</li>
            <li>Storage Facility Ownership (Depot Management)</li>
            <li>Vessel Sourcing & Management (Our Maritime Operations)</li>
            <li>Haulage & Transport (Our Logistics Operations)</li>
            <li>Crude Oil Marketing</li>
            <li>Other exceptional products</li>
          </ul>
        </div>
      </div>

      <div className="about_history">
        <p className="about__Paragraph">
          ADSAN RICH INVESTMENT LTD via its Marketing and Distribution unit is
          involved in getting local purchase orders (LPO) as well as other
          prospective buyers for AGO, PMS, DPK, LPFO, and other petroleum
          products. The Unit is saddled with the responsibilities of getting
          these products to the end-users as well as getting in touch with other
          independent petroleum products firms that do bulk purchases so that
          whenever the products are available, they can be distributed to where
          they are needed without delay. Whilst the Supply & Trading unit is
          responsible for the importation of petroleum products from refineries
          or foreign trading suppliers. The unit also handles the importation of
          the products, packages the deal contract with the supplier and also
          operates as a broker for the Company in line with the overall
          Company’s objectives. The Supply & Trading also take charge to partner
          with Shipping Company’s Storage facility owners and Top Management to
          ensure that there is speedy delivery.
        </p>
      </div>

      <div className="about_contactus">
        <div className="text_contactus_container">
          {isPageWide ? (
            <h3 className="text_contactus">
              Are you in any of our valued services
            </h3>
          ) : null}
        </div>
        <div className="contactus_btn_container">
          <button className="contactus_btn">Contact Us</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
