import React, { useState } from "react";
import { Typography, Col, Row, Checkbox } from "antd";
import { useEffect } from "react";
import Axios from "axios";

function Amenities(props) {
  const changed = (e, name) => {
    props.setData(name, e);
  };

  const [amenities, setAmenities] = useState({
    recommended: [],
    internet: [],
    accessibility: [],
    kitchen: [],
    facilities: [],
    safety: [],
  });

  useEffect(() => {
    Axios.get("https://api.stg.infytrip.com.au/amenities/")
      .then((res) => setAmenities(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Typography
        style={{
          fontSize: "19px",
          fontWeight: "bold",
          color: "#3C3C3C",
          textAlign: "left",
        }}
      >
        All the little things (and big things) you provide.
      </Typography>
      <Col
        span={24}
        style={{
          backgroundColor: "#FFFFFF",
          padding: "20px",
          marginTop: "15px",
        }}
      >
        <Row>
          <Typography
            style={{ fontSize: "18px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            Recommended
          </Typography>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Typography
            style={{ fontSize: "16px", color: "#827E7E", textAlign: "left" }}
          >
            Travelers often look for these when booking homes.
          </Typography>
        </Row>
        <Row
          style={{
            padding: "15px",
            border: "#D9D9D9 1px solid",
            width: "100%",
            marginTop: "10px",
          }}
        >
          <Checkbox.Group
            style={{ width: "100%" }}
            onChange={(e) => changed(e, "recommended")}
          >
            <Row>
              {amenities.recommended.map((val, i) => (
                <Col xs={24} sm={12} lg={6}>
                  <Row justify="start" key={i}>
                    <Checkbox value={val}>{val}</Checkbox>
                  </Row>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{ fontSize: "18px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            Internet
          </Typography>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Typography
            style={{ fontSize: "16px", color: "#827E7E", textAlign: "left" }}
          >
            How travelers can stay connected.
          </Typography>
        </Row>
        <Row
          style={{
            padding: "15px",
            border: "#D9D9D9 1px solid",
            width: "100%",
            marginTop: "10px",
          }}
        >
          <Checkbox.Group
            style={{ width: "50%" }}
            onChange={(e) => changed(e, "internet")}
          >
            <Row>
              {amenities.internet.map((val, i) => (
                <Col xs={24} sm={12} lg={6}>
                  <Row justify="start" key={i}>
                    <Checkbox value={val}>{val}</Checkbox>
                  </Row>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{ fontSize: "18px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            Accessibility
          </Typography>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Typography
            style={{ fontSize: "16px", color: "#827E7E", textAlign: "left" }}
          >
            What travelers want to have a convenient stay.
          </Typography>
        </Row>
        <Row
          style={{
            padding: "15px",
            border: "#D9D9D9 1px solid",
            width: "100%",
            marginTop: "10px",
          }}
        >
          <Checkbox.Group
            style={{ width: "100%" }}
            onChange={(e) => changed(e, "accessibility")}
          >
            <Row>
              {amenities.accessibility.map((val, i) => (
                <Col xs={24} sm={12} lg={6}>
                  <Row justify="start" key={i}>
                    <Checkbox value={val}>{val}</Checkbox>
                  </Row>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{ fontSize: "18px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            Kitchen
          </Typography>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Typography
            style={{ fontSize: "16px", color: "#827E7E", textAlign: "left" }}
          >
            Facilities and amenities that allow travelers to eat and drink
            comfortably.
          </Typography>
        </Row>
        <Row
          style={{
            padding: "15px",
            border: "#D9D9D9 1px solid",
            width: "100%",
            marginTop: "10px",
          }}
        >
          <Checkbox.Group
            style={{ width: "100%" }}
            onChange={(e) => changed(e, "kitchen")}
          >
            <Row>
              {amenities.kitchen.map((val, i) => (
                <Col xs={24} sm={12} lg={6}>
                  <Row justify="start" key={i}>
                    <Checkbox value={val}>{val}</Checkbox>
                  </Row>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{ fontSize: "18px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            Facilities
          </Typography>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Typography
            style={{ fontSize: "16px", color: "#827E7E", textAlign: "left" }}
          >
            What travelers are looking for and might increase the chances of you
            getting more bookings
          </Typography>
        </Row>
        <Row
          style={{
            padding: "15px",
            border: "#D9D9D9 1px solid",
            width: "100%",
            marginTop: "10px",
          }}
        >
          <Checkbox.Group
            style={{ width: "100%" }}
            onChange={(e) => changed(e, "facilities")}
          >
            <Row>
              {amenities.facilities.map((val, i) => (
                <Col xs={24} sm={12} lg={6}>
                  <Row justify="start" key={i}>
                    <Checkbox value={val}>{val}</Checkbox>
                  </Row>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{ fontSize: "18px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            Safety
          </Typography>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Typography
            style={{ fontSize: "16px", color: "#827E7E", textAlign: "left" }}
          >
            What travelers are looking for and might increase the chances of you
            getting more bookings
          </Typography>
        </Row>
        <Row
          style={{
            padding: "15px",
            border: "#D9D9D9 1px solid",
            width: "100%",
            marginTop: "10px",
          }}
        >
          <Checkbox.Group
            style={{ width: "100%" }}
            onChange={(e) => changed(e, "safety")}
          >
            <Row>
              {amenities.safety.map((val, i) => (
                <Col xs={24} sm={12} lg={6}>
                  <Row justify="start" key={i}>
                    <Checkbox value={val}>{val}</Checkbox>
                  </Row>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>
        </Row>
      </Col>
    </>
  );
}

export default Amenities;
