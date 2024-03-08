import React from "react";

import { Col, Row, Typography } from "antd";
import TextArea from "antd/lib/input/TextArea";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Description(props) {
  const changeData = (e) => {
    let targetName = e.target.name;
    let targetValue = e.target.value;

    props.setData(targetName, targetValue);
  };

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
        What’s unique and wonderful about your property?
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
            Name your property
          </Typography>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Typography
            style={{ fontSize: "16px", color: "#827E7E", textAlign: "left" }}
          >
            Make it count, and make it sound inviting! Please enter in English.
            Don’t worry, we’ll generate other languages using a standard
            translation template. If you want a custom title in a different
            language, please reach out to us through the help center.
          </Typography>
        </Row>
        <Col>
          <Row style={{ marginTop: "15px" }}>
            <TextArea
              rows={3}
              size="large"
              placeholder="Ex. Romantic beach getaway, perfect for honeymooners"
              name="description_name"
              onChange={changeData}
            />
          </Row>
        </Col>
        <Row justify="end">
          <Typography
            style={{ fontSize: "20px", color: "#827E7E", fontWeight: "bold" }}
          >
            50
          </Typography>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{ fontSize: "18px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            Describe your place
          </Typography>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Typography
            style={{ fontSize: "16px", color: "#827E7E", textAlign: "left" }}
          >
            Why should a traveler choose to stay at your property?
          </Typography>
        </Row>
        <Col>
          <Row style={{ marginTop: "15px", marginBottom: "45px" }}>
            <ReactQuill
              theme="snow"
              style={{ width: "100%", textAlign: "start" }}
            ></ReactQuill>
          </Row>
        </Col>
        <Row justify="end">
          <Typography
            style={{ fontSize: "20px", color: "#827E7E", fontWeight: "bold" }}
          >
            2500
          </Typography>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{ fontSize: "18px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            House rules (optional)
          </Typography>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Typography
            style={{ fontSize: "16px", color: "#827E7E", textAlign: "left" }}
          >
            Let guests know what rules they should follow when staying at your
            property.
          </Typography>
        </Row>
        <Col>
          <Row style={{ marginTop: "15px", marginBottom: "45px" }}>
            <ReactQuill
              theme="snow"
              style={{ width: "100%", textAlign: "start" }}
            ></ReactQuill>
          </Row>
        </Col>
        <Row justify="end">
          <Typography
            style={{
              fontSize: "20px",
              color: "#827E7E",
              fontWeight: "bold",
              marginBottom: "25px",
            }}
          >
            2500
          </Typography>
        </Row>
      </Col>
    </>
  );
}

export default Description;
