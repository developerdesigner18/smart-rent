import AOS from "aos";
import React, { useEffect } from "react";
import "./SelfGuide.css";

export default function SelfGuide() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <div className="self-guide-tour-container">
      <div className="self-guide-tour-content">
        <h1>Self Guided Tours</h1>
        <h3>Flexible & Scalable to suit any property type</h3>
        <p>
          Enable prospects to search available units using a completely web
          based self-guided tour experience of your property without the
          restriction of office hours, limited staff resources or security
          concerns.
        </p>
      </div>
      <img
        src="./images/home/cctv-camera.png"
        alt="cctv-camera"
        data-aos="fade-up"
      />
    </div>
  );
}
