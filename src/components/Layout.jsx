import React from "react";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
