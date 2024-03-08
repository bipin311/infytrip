import React from "react";
import {
  Typography,
  Row,
  Col,
  Divider,
  Avatar,
  Input,
  Select,
  Button,
} from "antd";

import { UserOutlined } from "@ant-design/icons";

function Basic(props) {
  const changeData = (e) => {
    let targetName = e.target.name;
    let targetValue = e.target.value;

    props.setData(targetName, targetValue);
  };

  return (
    <>
      <Typography
        style={{ fontSize: "19px", fontWeight: "bold", color: "#3C3C3C" }}
      >
        Update Profile
      </Typography>

      <Col
        span={24}
        style={{
          backgroundColor: "#FFFFFF",
          padding: "16px",
          marginTop: "10px",
        }}
      >
        <Row>
          <Typography
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#3C3C3C",
              textAlign: "left",
            }}
          >
            Add/Change Profile Picture
          </Typography>
        </Row>
        <Row>
          <Typography
            style={{ fontSize: "16px", color: "#827E7E", textAlign: "left" }}
          >
            Put a face to your name! We'll add this to your profile, and share
            it with future hosts and guests.
          </Typography>
        </Row>
        <Divider
          style={{
            backgroundColor: "#D4DCE2",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        />
        <Row justify="space-between">
          <Col xs={24} xl={17}>
            <Row style={{ width: "100%" }}>
              <Col xs={0} sm={3}>
                <Avatar
                  size={60}
                  style={{ backgroundColor: "#06A69E" }}
                  icon={<UserOutlined />}
                />
              </Col>
              <Col xs={24} sm={0}>
                <Avatar
                  size={100}
                  style={{ backgroundColor: "#06A69E" }}
                  icon={<UserOutlined />}
                />
              </Col>
              <Col xs={0} sm={21}>
                <Typography
                  style={{
                    fontSize: "16px",
                    color: "#827E7E",
                    marginTop: "4px",
                    marginLeft: "10px",
                    textAlign: "left",
                  }}
                >
                  Your picture matters. Pick a clear and friendly-looking one,
                  to increase bookings
                </Typography>
              </Col>
              <Col xs={24} sm={0}>
                <Typography
                  style={{
                    fontSize: "16px",
                    color: "#827E7E",
                    marginTop: "4px",
                    marginLeft: "10px",
                    textAlign: "center",
                  }}
                >
                  Your picture matters. Pick a clear and friendly-looking one,
                  to increase bookings
                </Typography>
              </Col>
            </Row>
          </Col>
          <Col xs={0} sm={24} xl={7}>
            <Row justify="end" style={{ width: "100%" }}>
              <Button
                style={{
                  height: "30px",
                  marginTop: "10px",
                  paddingTop: "10px",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  paddingBottom: "33px",
                  borderRadius: "3px",
                  backgroundColor: "#1A588B",
                  border: "none",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                Update Your Profile Picture
              </Button>
            </Row>
          </Col>
          <Col xs={24} sm={0}>
            <Row justify="center" style={{ width: "100%" }}>
              <Button
                style={{
                  height: "30px",
                  marginTop: "10px",
                  paddingTop: "10px",
                  paddingRight: "10px",
                  paddingLeft: "10px",
                  paddingBottom: "33px",
                  borderRadius: "3px",
                  backgroundColor: "#1A588B",
                  border: "none",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                }}
              >
                Update Your Profile Picture
              </Button>
            </Row>
          </Col>
        </Row>
      </Col>

      <Col
        span={24}
        style={{
          backgroundColor: "#FFFFFF",
          padding: "20px",
          marginTop: "25px",
        }}
      >
        <Row>
          <Typography
            style={{ fontSize: "18px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            Name
          </Typography>
        </Row>
        <Row>
          <Col xs={24} md={8} style={{ padding: "5px" }}>
            <Row>
              <Typography
                style={{
                  fontSize: "16px",
                  color: "#827E7E",
                  marginTop: "15px",
                  marginBottom: "10px",
                }}
              >
                First Name
              </Typography>
            </Row>
            <Row>
              <Input name="firstName" size="large" />
            </Row>
          </Col>
          <Col xs={24} md={8} style={{ padding: "5px" }}>
            <Row>
              <Typography
                style={{
                  fontSize: "16px",
                  color: "#827E7E",
                  marginTop: "15px",
                  marginBottom: "10px",
                }}
              >
                Last Name
              </Typography>
            </Row>
            <Row>
              <Input name="lastName" size="large" />
            </Row>
          </Col>
          <Col xs={24} md={8} style={{ padding: "5px" }}>
            <Row>
              <Typography
                style={{
                  fontSize: "16px",
                  color: "#827E7E",
                  marginTop: "15px",
                  marginBottom: "10px",
                }}
              >
                Display Name
              </Typography>
            </Row>
            <Row>
              <Input name="name" size="large" onChange={changeData} />
            </Row>
          </Col>
        </Row>
      </Col>
      <Col
        span={24}
        style={{
          backgroundColor: "#FFFFFF",
          padding: "20px",
          marginTop: "25px",
        }}
      >
        <Row>
          <Typography
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#3C3C3C",
              textAlign: "left",
            }}
          >
            Mobile Phone Verification
          </Typography>
        </Row>
        <Row>
          <Typography
            style={{
              fontSize: "16px",
              color: "#827E7E",
              marginTop: "15px",
              textAlign: "left",
            }}
          >
            Mobile phone number (optional)(we will send you an SMS to verify)
          </Typography>
        </Row>
        <Row>
          <Col xs={24} md={8} style={{ padding: "5px" }}>
            <Row>
              <Typography
                style={{
                  fontSize: "16px",
                  color: "#827E7E",
                  marginTop: "15px",
                  marginBottom: "10px",
                }}
              >
                Country
              </Typography>
            </Row>
            <Row>
              <Select size="large" style={{ width: "100%" }}></Select>
            </Row>
          </Col>
          <Col xs={24} md={8} style={{ padding: "5px" }}>
            <Row>
              <Typography
                style={{
                  fontSize: "16px",
                  color: "#827E7E",
                  marginTop: "15px",
                  marginBottom: "10px",
                }}
              >
                Mobile Number
              </Typography>
            </Row>
            <Row>
              <Input name="lastName" size="large" />
            </Row>
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default Basic;
