import { Button, Input } from "antd";
import AOS from "aos";
import React, { useEffect } from "react";
import "./Getintouch.css";
const { TextArea } = Input;

export default function Getintouch() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      {/* <div className="get-in-touch-divider"></div> */}
      <div className="get-in-touch-container">
        <div className="get-in-touch-left-container" data-aos="fade-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.6315288944174!2d72.79533461441031!3d21.206791687053776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d9aaab44881%3A0x727aee842640f142!2sJust%20Smile%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1678101489157!5m2!1sen!2sin"
            className="get-in-touch-map"
            title="map"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            // data-aos="fade-left"
          ></iframe>
        </div>
        <div className="get-in-touch-input-form-container-bkg">
          <div className="get-in-touch-input-form-container">
            <p style={{ marginTop: "70px", marginBottom: "0px" }}>CONTACT US</p>
            <h1 className="get-in-touch-title">Get in Touch</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <div className="get-in-touch-input-container">
              <Input placeholder="Name" className="get-in-touch-name-input" />
              <Input placeholder="Email" className="get-in-touch-email-input" />
            </div>
            <br />
            <Input placeholder="Subject" />
            <br />
            <br />
            <TextArea
              placeholder="Message"
              className="get-in-touch-message-input"
            />
            {/* <div style={{ width: "50%" }}> */}
            <Button className="send-msg-btn" size="large">
              SEND MESSAGE
            </Button>
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* <div className="get-in-touch-divider"></div> */}
    </>
  );
}
