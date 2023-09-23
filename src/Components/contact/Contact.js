import React from "react";
import Nav from "../Nav/Nav";
import "../../Assets/CSS/Contact.css"

const Contact = () => {
  return (
    <>
      <div className="contactmain">
        <Nav />
        <div className="contact-first-content">
          <div className="contact-content">
          <h3>EXPERT IN FIELD</h3>
          <h2>WHERE I AM?</h2>
          <h2>LET'S FIND OUT!</h2>
<div className="contact-line-position">
          <div className="contact-line"></div>
          </div>
          <p>
            Morbi tincidunt augue interdum velit euismod in pellentesque. Eget
            magna fermentum iaculis eu non diam phasellus vestibulum lorem.
            Mauris vitae ultricies leo integer malesuada nunc vel risus commodo.
          </p>
          </div>
        
        <div className="contactcont">
          <h2>Drop me a message</h2>
          <form>
            <div className="inputbox">
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="inp1"
                required
              />
            </div>
            <div className="inputbox">
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="inp1"
                required
              />
            </div>
            <div className="inputbox">
              <textarea
                placeholder="Your message"
                name="message"
                className="inp1"
                required
              />
            </div>
            <div className="inputbox">
              <button className="inp1" type="submit">
                Contact me
              </button>
            </div>
          </form>
        </div>
        </div>
        <div className="map-position">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62751.68000084051!2d77.18446257153063!3d10.580736388660538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9cc53593a4a43%3A0x2a25be82b1f743e9!2sUdumalaipettai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1664801861769!5m2!1sen!2sin"
            width="600"
            height="450"
            //   style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
