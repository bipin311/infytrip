import React, { useState, useEffect } from "react";
import { Row, Col, Divider, Dropdown, Menu } from "antd";
import Logo from "../assets/img/logo.png";
import { MenuOutlined } from "@ant-design/icons";
import { Link, withRouter } from "react-router-dom";

import * as ROUTES from "../constants/routes";

function Header(props) {
  const [windowWidth, setWindowWidth] = useState("");

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", updateWindowSize);
  }, []);

  const updateWindowSize = () => {
    setWindowWidth(window.innerWidth);
  };

  const menu = (
    <Menu style={{ width: "250px" }}>
      <Menu.Item
        key="1"
        style={{
          padding: "15px",
          color: "#1A588B",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <Link to={ROUTES.LIST_PROPERTY} className="link">
          LIST YOUR PROPERTY
        </Link>
      </Menu.Item>
      <Menu.Divider
        style={{
          padding: "2px",
          marginRight: "5px",
          marginLeft: "5px",
        }}
      />
      <Menu.Item
        key="2"
        style={{
          marginRight: "10px",
          padding: "7px",
          color: "#1A588B",
          textAlign: "right",
        }}
      >
        +123 4567 8900
      </Menu.Item>
      <Menu.Item
        key="3"
        style={{
          marginRight: "10px",
          padding: "7px",
          color: "#1A588B",
          textAlign: "right",
        }}
      >
        FAQ
      </Menu.Item>
      <Menu.Item
        key="4"
        style={{
          marginRight: "10px",
          padding: "7px",
          color: "#1A588B",
          textAlign: "right",
        }}
      >
        SUPPORT
      </Menu.Item>
      <Menu.Item
        key="5"
        style={{
          marginRight: "10px",
          padding: "7px",
          color: "#1A588B",
          textAlign: "right",
        }}
      >
        RESPONSIBILITY
      </Menu.Item>

      <Menu.Divider
        style={{
          marginRight: "5px",
          marginLeft: "5px",
        }}
      />
      <Menu.Item key="6" style={{ padding: "15px", color: "#1A588B" }}>
        TOP DEALS
      </Menu.Item>
      <Menu.Item key="7" style={{ padding: "15px", color: "#1A588B" }}>
        REFER AND EARN
      </Menu.Item>
      <Menu.Item key="8" style={{ padding: "15px", color: "#1A588B" }}>
        TOP DESTINATIONS
      </Menu.Item>
      <Menu.Item key="9" style={{ padding: "15px", color: "#1A588B" }}>
        TRIPS & PACKAGES
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      {windowWidth < 920 ? (
        <div
          style={{
            backgroundColor: "#1A588B",
            padding: "15px",
          }}
        >
          <Row justify="space-between">
            <Col span={6}>
              <Row justify="start" style={{ height: "40px" }}>
                <img
                  src={Logo}
                  alt="logo"
                  style={{ height: "100%", maxHeight: "100%" }}
                  onClick={() => props.history.push("/")}
                ></img>
              </Row>
            </Col>
            <Col>
              <Dropdown overlay={menu} trigger={["click"]}>
                <MenuOutlined
                  style={{
                    fontSize: "20px",
                    padding: "10px",
                    color: "#ffffff",
                  }}
                />
              </Dropdown>
            </Col>
          </Row>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#1A588B",
            paddingLeft: "79px",
            paddingRight: "79px",
            paddingTop: "28px",
            paddingBottom: "28px",
            width: "100%",
          }}
        >
          <Row style={{ color: "#fff" }} justify="space-between">
            <Col className="gutter-row" span={18}>
              <Row gutter={32}>
                <Col className="gutter-row">+123 4567 8900</Col>
                <Col className="gutter-row">
                  <span style={{ cursor: "pointer" }}>FAQ</span>
                </Col>
                <Col className="gutter-row">
                  <span style={{ cursor: "pointer" }}>SUPPORT</span>
                </Col>
                <Col className="gutter-row">
                  <span style={{ cursor: "pointer" }}>RESPONSIBILITY</span>
                </Col>
              </Row>
            </Col>
            <Col className="gutter-row">
              <span style={{ fontWeight: "bold", cursor: "pointer" }}>
                <Link to={ROUTES.LIST_PROPERTY} className="link">
                  LIST YOUR PROPERTY
                </Link>
              </span>
            </Col>
          </Row>
          <Divider></Divider>
          <Row gutter={12} style={{ color: "#fff" }} justify="space-between">
            <Col className="gutter-row" span={6}>
              <Row justify="start" style={{ height: "40px" }}>
                <img
                  src={Logo}
                  alt="logo"
                  style={{
                    height: "100%",
                    maxHeight: "100%",
                    cursor: "pointer",
                  }}
                  onClick={() => props.history.push("/")}
                ></img>
              </Row>
            </Col>
            <Col className="gutter-row">
              <div style={{ paddingTop: "7px" }}>
                <Row gutter={32}>
                  <Col className="gutter-row">
                    <span style={{ cursor: "pointer" }}>TOP DEALS</span>
                  </Col>
                  <Col className="gutter-row">
                    <span style={{ cursor: "pointer" }}>REFER AND EARN</span>
                  </Col>
                  <Col className="gutter-row">
                    <span style={{ cursor: "pointer" }}>TOP DESTINATIONS</span>
                  </Col>
                  <Col className="gutter-row">
                    <span style={{ cursor: "pointer" }}>TRIPS & PACKAGES</span>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export default withRouter(Header);
