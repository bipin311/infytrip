import React from "react";
import { Card, Typography, Select, Row, Col, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Option } = Select;

export default function RoomComponent(props) {
  const returnSleeps = (sleepCount) => {
    let arr = [];

    for (let index = 0; index < sleepCount; index++) {
      arr.push(<UserOutlined />);
    }

    return arr;
  };

  return (
    <Card
      style={{ marginTop: "10px" }}
      actions={[
        <Typography>Select Rooms</Typography>,
        <Select defaultValue={1} style={{ width: "100px" }}>
          <Option value={1}>1</Option>
          <Option value={2}>2</Option>
        </Select>,
        <Button
          type="primary"
          style={{
            backgroundColor: "#1A588B",
          }}
        >
          BOOK
        </Button>,
      ]}
    >
      <Row justify="space-between">
        <Col xs>
          <span style={{ fontWeight: "bold" }}>1 Extra-large double bed</span>
        </Col>
        <Col xs>
          <span style={{ fontWeight: "bold", color: "#06A69E" }}>
            AUD 1,258
          </span>
        </Col>
      </Row>
      <Row justify="space-between" style={{ marginTop: "10px" }}>
        <Col xs>
          <span style={{ fontWeight: "bold", color: "#E64444" }}>
            Only 5 rooms left!
          </span>
        </Col>
        <Col xs>
          <Row justify="center">{returnSleeps(props.sleeps)}</Row>
          <Row justify="center">Sleeps</Row>
        </Col>
      </Row>
      <Row justify="space-between" style={{ marginTop: "10px" }}>
        <Col xs={12} style={{ textAlign: "start" }}>
          Area: 23m
        </Col>
        <Col xs={12} style={{ textAlign: "start" }}>
          Flat Screen TV
        </Col>
        <Col xs={12} style={{ textAlign: "start" }}>
          City View
        </Col>
        <Col xs={12} style={{ textAlign: "start" }}>
          Soundproofing
        </Col>
        <Col xs={12} style={{ textAlign: "start" }}>
          Air conditioning
        </Col>
        <Col xs={12} style={{ textAlign: "start" }}>
          Mini bar
        </Col>
        <Col xs={12} style={{ textAlign: "start" }}>
          Private Bathroom
        </Col>
        <Col xs={12} style={{ textAlign: "start" }}>
          Free Wifi
        </Col>
        <Col xs={12} style={{ textAlign: "start" }}>
          <span style={{ color: "#06A69E" }}>More</span>
        </Col>
      </Row>
      <Row style={{ marginTop: "10px" }}>
        <span style={{ fontWeight: "bold", textAlign: "start" }}>
          Price are per room for 2 nights (included 13% VAT, 10% City Tax)
        </span>
      </Row>
    </Card>
  );
}
