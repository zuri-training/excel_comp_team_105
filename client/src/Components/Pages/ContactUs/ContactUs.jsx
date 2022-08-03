import React from "react";
import Footer from "../Footer/Footer";
import "./contact-us.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div>
    <form>
          <h2>Get In touch</h2>
          <p>We would love to hear from you</p>
          <label>
            Full Name
            <div className="inputbox">
              <input type="text" placeholder="Shearly Wilson" />
            </div>
          </label>

          <label>
            Email Address
            <div className="inputbox">
              <input type="email" placeholder="shearlywilson@address.company" />
            </div>
          </label>
          <label>
            Phone Number
            <div className="inputbox">
              <input type="number" placeholder="+274 000 0000" />
            </div>
          </label>
          <label>
            Message
            <div className="inputbox">
              <textarea name="message" id="message" rows="5" >
                Write your message
              </textarea>
            </div>
          </label>

          <div className="button">
            <button>Send Message</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
