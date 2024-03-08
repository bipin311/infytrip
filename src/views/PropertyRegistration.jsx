import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import { Layout, Steps, Row, Button, Col, Typography } from "antd";

import Basic from "../components/PropertyRegistration/Basic";
import Property from "../components/PropertyRegistration/Property";
import RoomDetails from "../components/PropertyRegistration/RoomDetails";
import Location from "../components/PropertyRegistration/Location";
import Description from "../components/PropertyRegistration/Description";
import Amenities from "../components/PropertyRegistration/Amenities";
import Publish from "../components/PropertyRegistration/Publish";
import Payment from "../components/PropertyRegistration/Payment";
import Photo from "../components/PropertyRegistration/Photo";
import Axios from "axios";

const { Sider, Content } = Layout;
const { Step } = Steps;

function PropertyRegistration() {
  const [data, setData] = useState({
    property: {
      images: [],
      payment_methods: [
        {
          method: "",
          number: "",
          name: "",
          expiry: "",
          cvv: "",
          bank_name: "",
          address: "",
          iban_number: "",
          account_type: "",
          bsb: "",
          swift_code: "",
        },
      ],
      category: 1,
      name: "",
      location: {
        continent: "",
        country: "",
        district: "",
        province: "",
        municipality: [],
        latitude: [],
        longitude: [],
        area: [],
      },
      size: 0,
      website: "",
      ratings: 0,
      photo_url: "",
      recommended: [],
      internet: [],
      accessibility: [],
      kitchen: [],
      facilities: [],
      safety: [],
      description_name: "",
      description: "",
      house_rules: "",
      deposit_required: false,
      deposit_amount: 0,
      is_accepted: true,
      is_refundable: false,
      join_membership: true,
      local_law: "",
      membership_plan: 1,
    },
    rooms: [],
  });

  const changeData = (variable, value) => {
    setData({
      ...data,
      property: {
        ...data.property,
        [variable]: value,
      },
    });
  };

  const changeRooms = (value) => {
    setData({
      ...data,
      rooms: value,
    });
  };

  const handleSubmit = () => {
    console.log(data);

    Axios.post("/api/createproperty/", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const steps = [
    {
      title: "Basic",
      content: <Basic setData={changeData} />,
    },
    {
      title: "Property",
      content: <Property setData={changeData} />,
    },
    {
      title: "Rooms/Details",
      content: <RoomDetails setRooms={changeRooms} />,
    },
    {
      title: "Register Your Location",
      content: <Location setData={changeData} />,
    },
    {
      title: "Description",
      content: <Description setData={changeData} />,
    },
    {
      title: "Amenities",
      content: <Amenities setData={changeData} />,
    },
    {
      title: "Payment/Pricing",
      content: <Payment setData={changeData} />,
    },
    {
      title: "Photo",
      content: <Photo setData={changeData} />,
    },
    {
      title: "Publish",
      content: <Publish setData={changeData} />,
    },
  ];

  const [windowWidth, setWindowWidth] = useState("");

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", updateWindowSize);
  }, []);

  const updateWindowSize = () => {
    setWindowWidth(window.innerWidth);
  };

  const [current, setCurrent] = useState(0);

  const next = () => {
    const cur = current + 1;
    setCurrent(cur);
  };

  const prev = () => {
    const cur = current - 1;
    setCurrent(cur);
  };

  const onChange = (current) => {
    setCurrent(current);
  };

  return (
    <>
      <Header />
      <Layout>
        {windowWidth > 450 ? (
          <Sider
            breakpoint="lg"
            width="250px"
            theme="light"
            style={{ padding: "25px" }}
          >
            <Steps direction="vertical" current={current} onChange={onChange}>
              {steps.map((item) => (
                <Step
                  key={item.title}
                  title={item.title}
                  style={{
                    marginTop: "30px",
                    fontSize: "12px",
                    textAlign: "left",
                  }}
                />
              ))}
            </Steps>
          </Sider>
        ) : null}

        <Content>
          <Row>
            <Col
              xs={24}
              lg={23}
              style={{
                paddingTop: "20px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <Row className="steps-content">{steps[current].content}</Row>
              {windowWidth < 450 ? (
                <Row justify="center" style={{ marginTop: "10px" }}>
                  <Col
                    style={{
                      backgroundColor: "#FFFFFF",
                      paddingLeft: "15px",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                      borderRadius: "30px",
                    }}
                  >
                    <Steps
                      size="small"
                      direction="horizantal"
                      current={current}
                    >
                      {steps.map((item) => (
                        <Step key={item.title} />
                      ))}
                    </Steps>
                  </Col>
                </Row>
              ) : null}
              <Row justify="space-between">
                <Col xs={24} sm={6}>
                  <Row justify="start">
                    <Typography
                      style={{
                        fontSize: "14px",
                        color: "#827E7E",
                        marginTop: "20px",
                        marginLeft: "10px",
                        fontWeight: "bold",
                        cursor: "pointer",
                      }}
                    >
                      SAVE AND EXIT
                    </Typography>
                  </Row>
                </Col>
                <Col xs={24} sm={18}>
                  <Row justify="end">
                    {current > 0 && (
                      <Button
                        style={{
                          height: "30px",
                          width: "130px",
                          margin: "10px",
                          paddingTop: "10px",
                          paddingRight: "15px",
                          paddingLeft: "15px",
                          paddingBottom: "30px",
                          borderRadius: "3px",
                          backgroundColor: "transparent",
                          border: "#1A588B 2px solid",
                          color: "#1A588B",
                          fontWeight: "bold",
                        }}
                        onClick={prev}
                      >
                        Previous
                      </Button>
                    )}

                    {current < steps.length - 1 && (
                      <Button
                        style={{
                          height: "30px",
                          width: "130px",
                          margin: "10px",
                          paddingTop: "10px",
                          paddingRight: "15px",
                          paddingLeft: "15px",
                          paddingBottom: "33px",
                          borderRadius: "3px",
                          backgroundColor: "#1A588B",
                          border: "none",
                          color: "#FFFFFF",
                          fontWeight: "bold",
                        }}
                        onClick={next}
                      >
                        Next
                      </Button>
                    )}
                    {current === steps.length - 1 && (
                      <Button
                        style={{
                          height: "30px",
                          width: "200px",
                          margin: "10px",
                          paddingTop: "10px",
                          paddingRight: "15px",
                          paddingLeft: "15px",
                          paddingBottom: "33px",
                          borderRadius: "3px",
                          backgroundColor: "#1A588B",
                          border: "none",
                          color: "#FFFFFF",
                          fontWeight: "bold",
                        }}
                        onClick={handleSubmit}
                      >
                        PUBLISH MY PROPERTY
                      </Button>
                    )}
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col lg={1} xs={0} />
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export default PropertyRegistration;
