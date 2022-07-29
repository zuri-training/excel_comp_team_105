import React from "react";
import "./contact.css";
import Footer from "../../Pages/Footer/footer";

const contact = () => {
  return (
    <div id="body">
      <div className="ContactContainer">
        <form>
        <div className="header">
          <h1>Get In Touch</h1>
          <p> We would love to hear from you! </p>
        </div>

          <label>
            Full Name
            <div className="contact_box">
              <input type="text" required placeholder="Shearly Wilson" />
            </div>
          </label>

          <label>
           Email Address
            <div className="contact_box">
              <input type="email" required placeholder="shearlywilson@adress.com" />
            </div>
          </label>

          <label>
           Phone Number
            <div className="contact_box">
              <input type="phone" placeholder="+274 000 0000" />
            </div>
          </label>

          <label>
           Message
            <div className="contact_box">
              <input type="textarea" required placeholder="Write your message" />
            </div>
          </label>


          <div className="submit_button">
            <button>Send Message</button>
          </div>
        </form>
        
        
          </div>
          <Footer />  
    </div>
    
    
  );

  
};

export default contact;
