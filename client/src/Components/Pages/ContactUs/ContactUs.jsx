import React from "react";
import Footer from "../Footer/Footer";
import "./contact-us.css";

const ContactUs = () => {
  const nameRef = React.createRef();
  const emailRef = React.createRef();
  const phoneRef = React.createRef();
  const messageRef = React.createRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    const messageBody = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneRef.current.value,
      message: messageRef.current.value,
      createdAt: new Date(),
    };
    
    // send messageBody to backend for processing
  };
  return (
    <div className="contact-container">
      <div>
        <form onSubmit={handleSubmit}>
          <h2>Get In touch</h2>
          <p>We would love to hear from you</p>
          <label>
            Full Name
            <div className="inputbox">
              <input type="text" placeholder="Shearly Wilson" ref={nameRef} />
            </div>
          </label>

          <label>
            Email Address
            <div className="inputbox">
              <input
                type="email"
                placeholder="shearlywilson@address.company"
                ref={emailRef}
              />
            </div>
          </label>
          <label>
            Phone Number
            <div className="inputbox">
              <input type="number" placeholder="+274 000 0000" ref={phoneRef} />
            </div>
          </label>
          <label>
            Message
            <div className="inputbox">
              <textarea
                name="message"
                id="message"
                rows="5"
                defaultValue="Write your message"
                ref={messageRef}
              />
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
