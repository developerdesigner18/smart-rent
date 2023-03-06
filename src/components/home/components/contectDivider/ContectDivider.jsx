import React from "react";
import "./ContectDivider.css";
import { PhoneOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function ContectDivider() {
  return (
    <div className="contect-divider-container">
      <h1>Ready to Get Protected by Secuger?</h1>
      <div>
        <div className="footer-contact-row">
          <PhoneOutlined className="footer-contact-icon" />
          <p>+44 167 033 8119</p>
        </div>
        <Button>CALL BACK</Button>
      </div>
    </div>
  );
}
