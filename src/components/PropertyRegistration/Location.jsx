import React, { useState, useEffect } from "react";
import { Typography, Col, Row, Input, Select } from "antd";
import Axios from "axios";

function Location(props) {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const { Option } = Select;

  const dataChange = (e) => {
    props.setData("location", {
      continent: "",
      country: e,
      district: "",
      province: "",
      municipality: [],
      latitude: [],
      longitude: [],
      area: [],
    });
  };

  useEffect(() => {
    Axios.get("https://restcountries.eu/rest/v2/all?fields=name")
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Typography
        style={{ fontSize: "19px", fontWeight: "bold", color: "#3C3C3C" }}
      >
        Put yourself on the map
      </Typography>

      <Col
        span={24}
        style={{
          backgroundColor: "#FFFFFF",
          padding: "20px",
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
            Location
          </Typography>
        </Row>
        <Row>
          <Typography
            style={{ fontSize: "16px", color: "#827E7E", textAlign: "left" }}
          >
            Guests will only receive your exact address once they’ve confirmed a
            booking.
          </Typography>
        </Row>
        <Col span={24} style={{ padding: "5px" }}>
          <Row style={{ marginTop: "20px" }}>
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#3C3C3C",
                textAlign: "left",
              }}
            >
              Street Address
            </Typography>
          </Row>
          <Row style={{ marginTop: "15px" }}>
            <Input
              name="streetAddress"
              size="large"
              style={{
                width: "100%",
                maxWidth: "510px",
              }}
            />
          </Row>
        </Col>
        <Col span={24} style={{ padding: "5px" }}>
          <Row style={{ marginTop: "20px" }}>
            <Typography
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#3C3C3C",
                textAlign: "left",
              }}
            >
              Building, floor and unit number(optional)
            </Typography>
          </Row>
          <Row style={{ marginTop: "15px" }}>
            <Input
              name="streetAddress"
              size="large"
              style={{
                width: "100%",
                maxWidth: "510px",
              }}
            />
          </Row>
        </Col>
        <Row style={{ marginTop: "20px" }}>
          <Col style={{ padding: "5px" }}>
            <Row>
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#3C3C3C",
                  textAlign: "left",
                }}
              >
                Country
              </Typography>
            </Row>
            <Row style={{ marginTop: "15px" }}>
              {loading ? (
                <Select
                  size="large"
                  style={{ minWidth: "250px" }}
                  showSearch
                  loading
                  onChange={dataChange}
                >
                  {countries.map((val, i) => (
                    <Option key={i} value={val.name}>
                      {val.name}
                    </Option>
                  ))}
                </Select>
              ) : (
                <Select
                  size="large"
                  style={{ minWidth: "250px" }}
                  showSearch
                  onChange={dataChange}
                >
                  {countries.map((val, i) => (
                    <Option key={i} value={val.name}>
                      {val.name}
                    </Option>
                  ))}
                </Select>
              )}
            </Row>
          </Col>
          <Col style={{ padding: "5px" }}>
            <Row>
              <Typography
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  color: "#3C3C3C",
                  textAlign: "left",
                }}
              >
                ZIP / Postal code (optional)
              </Typography>
            </Row>
            <Row style={{ marginTop: "15px" }}>
              <Input name="zip" size="large" style={{ minWidth: "250px" }} />
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#3C3C3C",
              textAlign: "left",
            }}
          >
            Map location
          </Typography>
        </Row>
        <Row>
          <Typography
            style={{ fontSize: "16px", color: "#827E7E", textAlign: "left" }}
          >
            Guests will only receive your exact address once they’ve confirmed a
            booking.
          </Typography>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7068.266738331892!2d85.29527638829956!3d27.65134510367721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb178eba404dbb%3A0xab03d76a81534a02!2sBhaisepati%20%2C%20Lalitpur!5e0!3m2!1sen!2snp!4v1586515973025!5m2!1sen!2snp"
            width="100%"
            height="450"
            frameborder="0"
            title={"Google map"}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </Row>
      </Col>
    </>
  );
}

export default Location;
