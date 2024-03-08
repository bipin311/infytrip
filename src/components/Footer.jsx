import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  List,
  Typography,
  Button,
  Divider,
  Menu,
  Dropdown,
} from "antd";
import {
  CaretRightOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  GoogleOutlined,
} from "@ant-design/icons";

import Logo from "../assets/img/footer_logo.png";
import Android from "../assets/img/android.jpeg";
import iOS from "../assets/img/ios.jpeg";

function Footer() {
  const [windowWidth, setWindowWidth] = useState("");

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", updateWindowSize);
  }, []);

  const updateWindowSize = () => {
    setWindowWidth(window.innerWidth);
  };

  const companyInfo = (
    <Menu style={{ width: "150px" }}>
      <Menu.Item
        key="1"
        style={{ padding: "15px", color: "#1A588B", textAlign: "center" }}
      >
        About Us
      </Menu.Item>
      <Menu.Item
        key="2"
        style={{ padding: "15px", color: "#1A588B", textAlign: "center" }}
      >
        TERMS OF USE
      </Menu.Item>
      <Menu.Item
        key="3"
        style={{ padding: "15px", color: "#1A588B", textAlign: "center" }}
      >
        JOBS
      </Menu.Item>
      <Menu.Item
        key="4"
        style={{ padding: "15px", color: "#1A588B", textAlign: "center" }}
      >
        PRIVACY POLICY
      </Menu.Item>
      <Menu.Item
        key="5"
        style={{ padding: "15px", color: "#1A588B", textAlign: "center" }}
      >
        FAQ
      </Menu.Item>
      <Menu.Item
        key="6"
        style={{ padding: "15px", color: "#1A588B", textAlign: "center" }}
      >
        LINKS
      </Menu.Item>
      <Menu.Item
        key="7"
        style={{ padding: "15px", color: "#1A588B", textAlign: "center" }}
      >
        BLOG
      </Menu.Item>
      <Menu.Item
        key="8"
        style={{
          padding: "15px",
          color: "#1A588B",
          textAlign: "center",
        }}
      >
        CONTACT US
      </Menu.Item>
    </Menu>
  );

  const support = (
    <Menu style={{ width: "150px" }}>
      <Menu.Item
        key="1"
        style={{ padding: "15px", color: "#1A588B", textAlign: "center" }}
      >
        FEEDBACK
      </Menu.Item>
      <Menu.Item
        key="2"
        style={{ padding: "15px", color: "#1A588B", textAlign: "center" }}
      >
        COMPLAINTS
      </Menu.Item>
    </Menu>
  );

  const optionRowOne = ["Help Center", "FAQ", "Privacy Policy", "Terms Of Use"];

  const optionRowTwo = ["About Us", "Career", "Contact Us", "Blog"];

  const { Title } = Typography;

  return (
    <>
      {windowWidth > 920 ? (
        <Col
          span={24}
          style={{
            backgroundColor: "#F6F6F6",
            zIndex: 19,
            paddingLeft: "105px",
            paddingRight: "105px",
            paddingTop: "55px",
            paddingBottom: "55px",
            bottom: 0,
            left: 0,
            right: 0,

            width: "100%",
          }}
        >
          <Row>
            <Col span={8}>
              <Row justify="start">
                <img
                  src={Logo}
                  alt="logo"
                  style={{
                    height: "90px",
                    width: "250px",
                  }}
                ></img>
              </Row>
              <Row justify="start" style={{ marginTop: "20px" }}>
                <Col xs={6}>
                  <Title
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#2D2D2D",
                      textAlign: "start",
                    }}
                  >
                    HELP
                  </Title>
                </Col>
                <Col xs={6}>
                  <Title
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color: "#2D2D2D",
                      textAlign: "start",
                    }}
                  >
                    COMPANY INFO
                  </Title>
                </Col>
              </Row>
              <Row
                justify="start"
                style={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  height: "10px",
                  border: "black 1px",
                }}
              >
                <Col xs={6}>
                  <List
                    dataSource={optionRowOne}
                    renderItem={(item) => (
                      <List.Item
                        style={{
                          paddingTop: "1px",

                          fontWeight: "bold",
                          fontSize: 15,
                          color: "#2D2D2D",
                          border: "0px",
                        }}
                      >
                        {item}
                      </List.Item>
                    )}
                  />
                </Col>
                <Col xs={6}>
                  <List
                    dataSource={optionRowTwo}
                    renderItem={(item) => (
                      <List.Item
                        style={{
                          paddingTop: "1px",
                          fontWeight: "bold",
                          fontSize: 15,
                          color: "#2D2D2D",
                          border: "0px",
                        }}
                      >
                        {item}
                      </List.Item>
                    )}
                  />
                </Col>
              </Row>
            </Col>
            <Col span={16}>
              <Row>
                <Col span={10} style={{ marginTop: "60px" }}>
                  <Row>
                    <Col span={24}>
                      <Title
                        align="center"
                        style={{
                          fontSize: 20,
                          fontWeight: "bold",
                          color: "#2D2D2D",
                        }}
                      >
                        FOLLOW US
                      </Title>
                    </Col>
                    <Col span={24}>
                      <Button
                        type="primary"
                        shape="circle"
                        size="large"
                        style={{
                          backgroundColor: "#06A69E",
                          margin: "10px",
                          border: "0px",
                        }}
                      >
                        <FacebookOutlined />
                      </Button>
                      <Button
                        type="primary"
                        shape="circle"
                        size="large"
                        style={{
                          backgroundColor: "#06A69E",
                          margin: "10px",
                          border: "0px",
                        }}
                      >
                        <LinkedinOutlined />
                      </Button>
                      <Button
                        type="primary"
                        shape="circle"
                        size="large"
                        style={{
                          backgroundColor: "#06A69E",
                          margin: "10px",
                          border: "0px",
                        }}
                      >
                        <TwitterOutlined />
                      </Button>
                      <Button
                        type="primary"
                        shape="circle"
                        size="large"
                        style={{
                          backgroundColor: "#06A69E",
                          margin: "10px",
                          border: "0px",
                        }}
                      >
                        <GoogleOutlined />
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col span={6} style={{ marginTop: "60px" }}>
                  <Row>
                    <img
                      src={Android}
                      style={{ width: "200px", cursor: "pointer" }}
                      alt="android"
                    ></img>
                  </Row>
                  <Row style={{ marginTop: "10px" }}>
                    <img
                      src={iOS}
                      style={{ width: "200px", cursor: "pointer" }}
                      alt="iOS"
                    ></img>
                  </Row>
                </Col>
                <Col span={6} style={{ marginTop: "60px" }}>
                  <Col span={24}>
                    <Title
                      align="center"
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#2D2D2D",
                      }}
                    >
                      SUPPORT
                    </Title>
                  </Col>
                  <Col
                    span={24}
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      color: "#2D2D2D",
                    }}
                  >
                    Feedback
                  </Col>
                  <Col
                    span={24}
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      color: "#2D2D2D",
                    }}
                  >
                    Complaints
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row justify="end">
            <Col span={4} style={{ marginTop: "60px" }}>
              <Row justify="center">
                <Button
                  type="primary"
                  shape="round"
                  size="large"
                  style={{
                    backgroundColor: "#06A69E",
                    margin: "10px",
                    width: "100px",
                    fontWeight: "bold",
                    border: "0px",
                  }}
                >
                  Chat
                </Button>
              </Row>
            </Col>
          </Row>
          <Row justify="center" style={{ marginTop: "20px" }}>
            <Divider
              color="#F6F6F6"
              size="2px"
              style={{ backgroundColor: "#1A588B", margin: "0px" }}
            ></Divider>
            <Title
              style={{
                padding: "0px",
                marginTop: "10px",
                fontSize: 15,
                fontWeight: "bold",
                color: "#1A588B",
              }}
            >
              2020 InfyTrip. All Rights Reserved.
            </Title>
          </Row>
          <Row justify="center" style={{ marginTop: "0px" }}>
            <Title
              style={{
                padding: "0px",
                marginTop: "10px",
                fontSize: 15,
                fontWeight: "bold",
                color: "#1A588B",
              }}
            >
              InfyTrip is a part of infynitee, a leading tech company in
              software development.
            </Title>
          </Row>
        </Col>
      ) : (
        <Col
          span={24}
          style={{
            backgroundColor: "#F6F6F6",
            zIndex: 19,
            boxShadow: "0 1px 1px 0 rgba(0, 0, 0, 1)",
            paddingLeft: "15px",
            paddingRight: "15px",
            paddingTop: "10px",
            paddingBottom: "10px",
            bottom: 0,
            left: 0,
            right: 0,
            height: "250px",
            width: "100%",
          }}
        >
          <Row>
            <Col xs={12} sm={7} md={5}>
              <Row justify="center">
                <img
                  src={Logo}
                  alt="logo"
                  style={{
                    height: "50px",
                    width: "150px",
                  }}
                ></img>
              </Row>
              <Row justify="center" style={{ marginTop: "20px" }}>
                <Title
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "#1A588B",
                  }}
                >
                  COMPANY INFO
                </Title>

                <Dropdown overlay={companyInfo} trigger={["click"]}>
                  <CaretRightOutlined
                    style={{ fontSize: "20px", color: "#1A588B" }}
                  />
                </Dropdown>
              </Row>
              <Row justify="center">
                <Title
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "#1A588B",
                  }}
                >
                  SUPPORT
                </Title>
                <Dropdown overlay={support} trigger={["click"]}>
                  <CaretRightOutlined
                    style={{ fontSize: "20px", color: "#1A588B" }}
                  />
                </Dropdown>
              </Row>
            </Col>
          </Row>
          <Row justify="center" style={{ marginTop: "10px" }}>
            <Button
              type="primary"
              shape="circle"
              size="large"
              style={{ backgroundColor: "#06A69E", margin: "10px" }}
            >
              <FacebookOutlined />
            </Button>
            <Button
              type="primary"
              shape="circle"
              size="large"
              style={{ backgroundColor: "#06A69E", margin: "10px" }}
            >
              <LinkedinOutlined />
            </Button>
            <Button
              type="primary"
              shape="circle"
              size="large"
              style={{ backgroundColor: "#06A69E", margin: "10px" }}
            >
              <TwitterOutlined />
            </Button>
            <Button
              type="primary"
              shape="circle"
              size="large"
              style={{ backgroundColor: "#06A69E", margin: "10px" }}
            >
              <GoogleOutlined />
            </Button>
            <Divider
              color="#F6F6F6"
              size="2px"
              style={{
                backgroundColor: "#1A588B",
                marginTop: "5px",
                marginBottom: "2px",
              }}
            ></Divider>
            <Title
              style={{
                padding: "0px",
                marginTop: "10px",
                fontSize: 13,
                fontWeight: "bold",
                color: "#1A588B",
              }}
            >
              &copy; 2020 infytrips. All Rights Reserved
            </Title>
          </Row>
        </Col>
      )}
    </>
  );
}

export default Footer;
