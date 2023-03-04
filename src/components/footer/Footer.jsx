import { Button } from "antd";
import React from "react";
import "./Footer.css";
import {
  FacebookOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div>
      <div className="footer-upper-box">
        <div>
          <h2>Smart Rent</h2>
          <p>Lorem ipsum is simply dummy text</p>
        </div>
        <div className="footer-input-box">
          <input placeholder="Enter your email" />
          <Button>Subscribe</Button>
        </div>
      </div>
      <div className="footer-container">
        <div className="footer-container-body-gap"></div>
        <div className="footer-container-body">
          <div className="footer-company-logo-dec">
            <img
              src="/images/logo.png"
              alt="logo"
              style={{ marginBottom: "10px" }}
            />
            <p>
              Lorem ipsum is simply dummy text of the printing type setting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown the 1500s, when an unknown
              printer took a galley of type and scrambled it to make
            </p>
            <div>
              <FacebookOutlined className="footer-social-icon" />
              <YoutubeOutlined className="footer-social-icon" />
              <TwitterOutlined className="footer-social-icon" />
              <InstagramOutlined className="footer-social-icon" />
              <LinkedinOutlined className="footer-social-icon" />
            </div>
          </div>
          <div className="footer-two-clm">
            <div className="footer-hardware">
              <h3>Products & Solutions</h3>
              <Link>
                <p>Access Control</p>
              </Link>
              <Link>
                <p>Asset Protection</p>
              </Link>
              <Link>
                <p>Connected Communities</p>
              </Link>
              <Link>
                <p>Community Wifi</p>
              </Link>
              <Link>
                <p>Integrations & Partnerships</p>
              </Link>
              <Link>
                <p>Parking & Management</p>
              </Link>
              <Link>
                <p>Self-Guided Tours</p>
              </Link>
              <Link>
                <p>Smart Apartments</p>
              </Link>
            </div>
            <div className="footer-hardware">
              <h3>Hardware</h3>
              <Link>
                <p>Cameras</p>
              </Link>
              <Link>
                <p>Doorbells</p>
              </Link>
              <Link>
                <p>Hubs</p>
              </Link>
              <Link>
                <p>Lock & Lockboxes</p>
              </Link>
              <Link>
                <p>Pluge</p>
              </Link>
              <Link>
                <p>Readers</p>
              </Link>
              <Link>
                <p>Sensors</p>
              </Link>
              <Link>
                <p>Speakers</p>
              </Link>
              <Link>
                <p>Switches & Dimmers</p>
              </Link>
              <Link>
                <p>Thermostats</p>
              </Link>
            </div>
          </div>
          <div className="footer-hardware">
            <h3>Contact</h3>
            <div className="footer-contact-row">
              <PhoneOutlined className="footer-contact-icon" />
              <div>
                <p>Call Anytime</p>
                <p>+44 167 033 8119</p>
              </div>
            </div>
            <br />
            <div className="footer-contact-row">
              <MailOutlined className="footer-contact-icon" />
              <div>
                <p>Send Mail</p>
                <p>smartrent123@gmail.com</p>
              </div>
            </div>
            <br />
            <div className="footer-contact-row">
              <EnvironmentOutlined className="footer-contact-icon" />
              <div>
                <p>Head Office</p>
                <p>8665 E. Hartford Drive Scottsdale, AZ 85255 Suite 200</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-end-box">
          <p>© 2022 by Smartrent | All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
