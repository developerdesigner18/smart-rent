import { Button, Drawer } from "antd";
import React, { useState } from "react";
import "./Navbar.css";
import { MenuOutlined } from "@ant-design/icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <img src="/images/logo.png" alt="logo" width="80%" />
        </div>
        <div className="nabvar-center-menu">
          <p>Products & Solutions</p>
          <p>Hardware</p>
          <p>Customers</p>
          <p>Company</p>
          <p>Contact</p>
        </div>
        <div>
          <Button className="navbar-demo-btn" size="default">
            Demo
          </Button>
        </div>
        <div className="navbar-mobile-menu-icon-div">
          <MenuOutlined
            onClick={showDrawer}
            className="navbar-mobile-menu-icon"
          />
        </div>
      </div>
      <Drawer
        title="Menu Bar"
        placement="right"
        onClose={onClose}
        open={open}
        width="200px"
        className="navbar-mobile-drawer"
      >
        <p>Products & Solutions</p>
        <p>Hardware</p>
        <p>Customers</p>
        <p>Company</p>
        <p>Contact</p>
      </Drawer>
    </>
  );
}
