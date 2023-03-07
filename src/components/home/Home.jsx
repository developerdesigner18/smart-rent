import React, { useEffect } from "react";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Carousel } from "antd";
import AvailableServices from "./components/availableServices/AvailableServices";
import SelfGuide from "./components/selfGuide/SelfGuide";
// import ContectDivider from "./components/contectDivider/ContectDivider";
import Getintouch from "./components/getintouch/Getintouch";

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
            src="https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VjdXJpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
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
            src="https://media.istockphoto.com/id/1310118255/photo/smart-home-control-in-kitchen.jpg?b=1&s=170667a&w=0&k=20&c=VvdjVx9xJpSPi1A8ghJ4u0d6DQJr7RhJ29-oZWmhA-k="
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
      <Getintouch />
    </div>
  );
}
