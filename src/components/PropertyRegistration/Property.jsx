import React, { useEffect, useState } from "react";

import { Typography, Row, Col, Input } from "antd";
import Axios from "axios";

function Property(props) {
  const changeData = (e) => {
    let targetName = e.target.name;
    let targetValue = e.target.value;

    props.setData(targetName, targetValue);
  };

  const [propertyTypes, setPropertyTypes] = useState([]);

  useEffect(() => {
    Axios.get("https://api.stg.infytrip.com.au/propertycategory/")
      .then((res) => {
        let results = res.data.results;

        results.map((val) => (val.selected = false));
        results[0].selected = true;

        setPropertyTypes(results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const setSelected = (id) => {
    let newList = [];

    console.log(id);

    propertyTypes.forEach((element) => {
      let newElement = element;

      if (element.id === id) {
        newElement.selected = true;

        props.setData("category", id);
      } else {
        newElement.selected = false;
      }

      newList.push(newElement);
    });

    console.log(newList);

    setPropertyTypes(newList);
  };

  return (
    <>
      <Typography
        style={{ fontSize: "19px", fontWeight: "bold", color: "#3C3C3C" }}
      >
        Property
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
            style={{ fontSize: "18px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            Property type
          </Typography>
        </Row>
        <Row>
          {propertyTypes.map((val, i) =>
            val.selected ? (
              <Col
                key={i}
                xs={11}
                sm={9}
                md={5}
                xxl={4}
                onClick={() => setSelected(val.id)}
                style={{
                  cursor: "pointer",
                  marginTop: "20px",
                  marginRight: "5px",
                  marginLeft: "5px",
                  padding: "30px",
                  backgroundColor: "#06A69E",
                  border: "#D4DCE2 1px solid",
                  height: "150px",
                  width: "150px",
                }}
              >
                <Row justify="center">
                  <img
                    src={val.icon}
                    alt="logo"
                    style={{
                      height: "50px",
                      width: "50px",
                      filter: "brightness(50)",
                    }}
                  ></img>
                </Row>
                <Row justify="center" style={{ width: "100%" }}>
                  <Typography
                    style={{
                      fontSize: "16px",
                      color: "#FFFFFF",
                      marginTop: "10px",
                      marginLeft: "10px",
                    }}
                  >
                    {val.name}
                  </Typography>
                </Row>
              </Col>
            ) : (
                <Col
                  key={i}
                  xs={11}
                  sm={9}
                  md={5}
                  xxl={4}
                  onClick={() => setSelected(val.id)}
                  style={{
                    cursor: "pointer",
                    marginTop: "20px",
                    marginRight: "5px",
                    marginLeft: "5px",
                    padding: "30px",
                    border: "#D4DCE2 1px solid",
                    height: "150px",
                    width: "150px",
                  }}
                >
                  <Row justify="center">
                    <img
                      src={val.icon}
                      alt="logo"
                      style={{ height: "50px", width: "50px" }}
                    ></img>
                  </Row>
                  <Row justify="center" style={{ width: "100%" }}>
                    <Typography
                      style={{
                        fontSize: "16px",
                        color: "#827E7E",
                        marginTop: "10px",
                        marginLeft: "10px",
                      }}
                    >
                      {val.name}
                    </Typography>
                  </Row>
                </Col>
              )
          )}
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{ fontSize: "18px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            Property size
          </Typography>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col>
                <Input
                  name="size"
                  size="large"
                  style={{ marginTop: "10px" }}
                  onChange={changeData}
                />
              </Col>
              <Col>
                <Typography
                  style={{
                    fontSize: "18px",
                    fontWeight: "bold",
                    color: "#3C3C3C",
                    marginLeft: "10px",
                    marginTop: "17px",
                  }}
                >
                  sqm
                </Typography>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{ fontSize: "18px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            Property website (optional)
          </Typography>
        </Row>
        <Row>
          <Col span={24}>
            <Row justify="start">
              <Input
                name="website"
                size="large"
                style={{ marginTop: "10px", width: "100%", maxWidth: "500px" }}
                onChange={changeData}
              />
            </Row>
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default Property;
