import React from "react";
import Navbar from "./navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
}
