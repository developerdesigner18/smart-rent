import { Button, Col, Row } from "antd";
import React from "react";
import { data } from "../../../../constant/AvailableServicesData";
import "./AvailableServices.css";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function AvailableServices() {
  return (
    <div>
      <div className="available-services-container">
        <div className="available-services-heading">
          <p>WHAT CAN WE OFFER SECURITY</p>
          <span>Available</span>
          <span className="services-dark-title">Services</span>
        </div>
        <Row gutter={[24, 30]}>
          {data?.Services?.map((service, index) => (
            <Col
              className="gutter-row services-clmn"
              lg={6}
              md={12}
              sm={12}
              key={index}
            >
              <div>
                <img
                  src={service.icon}
                  width="60px"
                  height="60px"
                  alt="services-icons"
                />
                <h2 className="services-title">{service.title}</h2>
                <p className="services-desc">{service.desc}</p>
                <Button
                  className="services-learn-more-btn"
                  icon={<ArrowRightOutlined />}
                >
                  LEARN MORE{" "}
                </Button>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
