import React, { useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Carousel } from "antd";
import AvailableServices from "./components/availableServices/AvailableServices";
import SelfGuide from "./components/selfGuide/SelfGuide";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div>
      <Carousel autoplay effect="fade" style={{ marginTop: "-100px" }}>
        <div className="home-header-img-container">
          <img
            src="/images/home_header_img.png"
            alt="home-header-img"
            className="home-header-img"
          />
          <div className="home-header-img-title-btn-container">
            <h1
              className="home-header-img-title"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Opening Doors to a<br />
              Smarter World
            </h1>
            <Button
              className="home-header-imglearn-more-btn"
              size="large"
              data-aos="fade-down"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="home-header-img-container">
          <img
            src="https://plus.unsplash.com/premium_photo-1668799885570-efc27ab12293?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW5zfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="home-header-img"
            className="home-header-img"
          />
          <div className="home-header-img-title-btn-container">
            <h1
              className="home-header-img-title"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              Opening Doors to a<br />
              Smarter World
            </h1>
            <Button
              className="home-header-imglearn-more-btn"
              size="large"
              data-aos="fade-down"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="home-header-img-container">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="home-header-img"
            className="home-header-img"
          />
          <div className="home-header-img-title-btn-container">
            <h1
              className="home-header-img-title"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              Opening Doors to a<br />
              Smarter World
            </h1>
            <Button
              className="home-header-imglearn-more-btn"
              size="large"
              data-aos="fade-down"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Carousel>
      <div className="security-solution-container">
        <div className="security-solution-img-box">
          <p
            className="home-color-squre-box"
            data-aos="fade-down"
            // data-aos-offset="300vh"
          ></p>
          <img
            src="./images/home/phone_1.png"
            className="security-solution-center-img"
            data-aos="zoom-in"
            alt=" security-solution-center-img"
            // data-aos-offset="250vh"
          />
          <img
            src="./images/home/phone_2.png"
            className="security-solution-last-img"
            data-aos="fade-up"
            alt="security-solution-last-img"
            // data-aos-offset="250vh"
          />
        </div>
        <div className="security-solution-content">
          <h1>Best Solution For Security System</h1>
          <p>
            SmartRent is an enterprise smart home automation company developing
            software and hardware that empowers property owners, managers and
            homebuilders to effectively manage, protect and automate daily
            operational processes utilizing our proprietary Alloy Automation.
          </p>
          <Button
            className="home-header-imglearn-more-btn"
            size="large"
            // data-aos="fade-down"
          >
            Read More
          </Button>
        </div>
      </div>
      <SelfGuide />
      <AvailableServices />
    </div>
  );
}
