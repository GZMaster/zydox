import React from 'react'
import "./Contact.scss"

const Contact = () => {
    return (
        <section id="contact" className="C_Container">
      <div className="C_Wrapper">
        <h4 className="C_title">GET IN TOUCH WITH US . </h4>
        <p className="C_Text">
          Tincidunt sagittis egestas aliquam volutpat at odio pharetra.
        </p>
        <section className="Contact_Wrapper">
          <form className="C_Form" onSubmit={onSubmit}>
            <label className="form_label">Full Name</label>
            <input
              type="text"
              placeholder="Your Full Name"
              name="from_name"
              value={toSend.from_name}
              className="form_control"
              onChange={handleChange}
            />
            <label className="form_label">Email</label>
            <input
              type="email"
              placeholder="your email address"
              name="from_email"
              value={toSend.from_email}
              className="form_control"
              onChange={handleChange}
            />
            <label className="form_label">Subject</label>
            <input
              type="text"
              placeholder="subject"
              name="from_subject"
              value={toSend.subject}
              className="form_control"
              onChange={handleChange}
            />
            <label className="form_label">Message</label>
            <textarea
              name="message"
              placeholder="Message"
              type="text"
              cols="30"
              rows="10"
              value={toSend.message}
              className="form_control"
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="C_btn">
              Send Message
            </button>
          </form>
          <div className="C_Info">
            <div className="C_item">
              <div className="C_Svg">
                <MdLocationPin />
              </div>
              <div className="C_item_Wrap">
                <h3 className="C_item_title">
                  <span>Our Address</span>
                </h3>
                <h3 className="C_item-text">
                  7th floor CBC Towers, No 11 Olubunmi Owa Street, Lekki Phase
                  1, Lagos
                </h3>
              </div>
            </div>
            <div className="C_item">
              <div className="C_Svg">
                <MdEmail />
              </div>
              <div className="C_item_Wrap">
                <h3 className="C_item_title">
                  <span> Email Us</span>
                </h3>
                <h3 className="C_item-text">info@bralewood.com</h3>
              </div>
            </div>
            <div className="C_item">
              <div className="C_Svg">
                <MdPhoneInTalk />
              </div>
              <div className="C_item_Wrap">
                <h3 className="C_item_title">
                  <span>Call Us</span>
                </h3>
                <h3 className="C_item-text">01-4545505</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    )
}

export default Contact