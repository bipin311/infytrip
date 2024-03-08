import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  DatePicker,
  Badge,
  Divider,
  Button,
  Tabs,
} from "antd";
import { Carousel } from "react-responsive-carousel";
import Image1 from "../assets/img/caro_1.png";
import Image2 from "../assets/img/caro_2.png";
import Image3 from "../assets/img/caro_3.png";
import Image4 from "../assets/img/caro_4.png";
import Image5 from "../assets/img/caro_5.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  StarFilled,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import Recommendations from "../components/HotelDetailedView/Recommendations";
import PopularDestinations from "../components/HotelDetailedView/PopularDestinations";
import Reviews from "../components/HotelDetailedView/Reviews";
import Footer from "../components/Footer";
import Header from "../components/HotelDetailedView/Header";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import Axios from "axios";
import { useEffect } from "react";
import RoomComponent from "../components/HotelDetailedView/RoomComponent";

const { TabPane } = Tabs;

function HotelDetailedView(props) {
  const user = useSelector((state) => state.user);

  const id = useSelector((state) => state.search.id);

  console.log({ id });

  const [hotelData, setHotelData] = useState({
    name: "",
    category: "",
    ratings: "",
    location: {
      country: "",
      province: "",
    },
    price: "",
  });

  useEffect(() => {
    Axios.get("organisations/" + id)
      .then((res) => {
        setHotelData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const redirectToLogin = () => {
    props.history.push("/login");
  };

  return (
    <>
      <Header user={user} redirectToLogin={() => redirectToLogin} />
      <Row>
        <Col xs={0} sm={1} style={{ width: "100px" }} />
        <Col
          xs={24}
          sm={22}
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <Row justify="space-between">
            <Col
              xs={24}
              lg={16}
              style={{ paddingRight: "10px", paddingLeft: "10px" }}
            >
              <Row>
                <h1 style={{ fontWeight: "bold" }}>{hotelData.name}</h1>
              </Row>
              <Row>
                <h3>
                  <span style={{ color: "#FFAF0F" }}>
                    <StarFilled /> {hotelData.ratings}
                  </span>{" "}
                  {/* (234 reviews) */}
                </h3>
              </Row>
              <Row>
                <h3>
                  {" "}
                  {hotelData.location.province}, {hotelData.location.country}
                </h3>
              </Row>
              <Row style={{ marginTop: "15px" }}>
                <Carousel className="carousel">
                  <div style={{ maxHeight: "550px" }}>
                    <img src={Image1} alt="first carousel" />
                  </div>
                  <div style={{ maxHeight: "550px" }}>
                    <img src={Image2} alt="second carousel" />
                  </div>
                  <div style={{ maxHeight: "550px" }}>
                    <img src={Image3} alt="third carousel" />
                  </div>
                  <div style={{ maxHeight: "550px" }}>
                    <img src={Image4} alt="fourth carousel" />
                  </div>
                  <div style={{ maxHeight: "550px" }}>
                    <img src={Image5} alt="fifth carousel" />
                  </div>
                </Carousel>
              </Row>
            </Col>
            <Col
              xs={24}
              lg={8}
              style={{ paddingLeft: "10px", paddingRight: "10px" }}
            >
              <div
                style={{
                  backgroundColor: "#06A69E",
                  padding: "40px",
                }}
              >
                <Row justify="center">
                  <h1 style={{ color: "#fff" }}>
                    <span style={{ fontWeight: "bolder" }}>
                      ${hotelData.price}
                    </span>{" "}
                    / Per night
                  </h1>
                </Row>
              </div>
              <div
                style={{
                  backgroundColor: "#E5F5F3",
                  padding: "20px",
                }}
              >
                <Row justify="center">
                  <h2 style={{ fontWeight: "bold" }}>BOOK ROOM</h2>
                </Row>
                <Row>
                  <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                    Check In
                  </Typography>
                  <DatePicker
                    size="large"
                    placeholder="DD/MM/YY"
                    dateRender={(current) => {
                      const style = {};
                      if (current.date() > 2) {
                        style.backgroundColor = "#06A69E";
                      }

                      return (
                        <div className="ant-picker-cell-inner" style={style}>
                          {current.date()}
                        </div>
                      );
                    }}
                    format="DD/MM/YY"
                    style={{
                      borderRadius: 3,
                      width: "100%",
                      marginTop: "10px",
                    }}
                  />
                </Row>
                <Row style={{ marginTop: "15px" }}>
                  <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                    Check Out
                  </Typography>
                  <DatePicker
                    size="large"
                    placeholder="DD/MM/YY"
                    format="DD/MM/YY"
                    style={{
                      borderRadius: 3,
                      width: "100%",
                      marginTop: "10px",
                    }}
                  />
                </Row>

                <Row style={{ marginTop: "15px" }}>
                  <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                    Guests
                  </Typography>
                </Row>
                <div
                  style={{
                    backgroundColor: "#fff",
                    padding: "20px",
                    marginTop: "10px",
                  }}
                >
                  <Row>
                    <Badge
                      count={25}
                      style={{
                        backgroundColor: "#06A69E",
                        fontSize: 15,
                      }}
                    />
                  </Row>
                  <Divider />
                  <Row justify="space-between" style={{ marginTop: "10px" }}>
                    <Col xs={4}>
                      <Typography
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        Rooms
                      </Typography>
                    </Col>
                    <Col xs={4}></Col>
                    <Col>
                      <PlusCircleOutlined style={{ fontSize: 27 }} />
                    </Col>
                    <Col>
                      <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                        1
                      </Typography>
                    </Col>
                    <Col>
                      <MinusCircleOutlined style={{ fontSize: 27 }} />
                    </Col>
                  </Row>
                  <Row justify="space-between" style={{ marginTop: "10px" }}>
                    <Col xs={4}>
                      <Typography
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        Adults
                      </Typography>
                    </Col>
                    <Col xs={4}></Col>
                    <Col>
                      <PlusCircleOutlined style={{ fontSize: 27 }} />
                    </Col>
                    <Col>
                      <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                        1
                      </Typography>
                    </Col>
                    <Col>
                      <MinusCircleOutlined style={{ fontSize: 27 }} />
                    </Col>
                  </Row>
                  <Row justify="space-between" style={{ marginTop: "10px" }}>
                    <Col xs={4}>
                      <Typography
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        Children
                      </Typography>
                    </Col>
                    <Col xs={4}></Col>
                    <Col>
                      <PlusCircleOutlined style={{ fontSize: 27 }} />
                    </Col>
                    <Col>
                      <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                        1
                      </Typography>
                    </Col>
                    <Col>
                      <MinusCircleOutlined style={{ fontSize: 27 }} />
                    </Col>
                  </Row>
                  <Row justify="space-between" style={{ marginTop: "10px" }}>
                    <Col xs={4}>
                      <Typography
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        Infants
                      </Typography>
                    </Col>
                    <Col xs={4}></Col>
                    <Col>
                      <PlusCircleOutlined style={{ fontSize: 27 }} />
                    </Col>
                    <Col>
                      <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                        1
                      </Typography>
                    </Col>
                    <Col>
                      <MinusCircleOutlined style={{ fontSize: 27 }} />
                    </Col>
                  </Row>
                </div>
                <Row justify="center" style={{ paddingBottom: "25px" }}>
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      marginLeft: "0px",
                      marginTop: "35px",
                      paddingRight: "50px",
                      paddingLeft: "50px",
                      backgroundColor: "#1A588B",
                      paddingTop: "5px",
                      paddingBottom: "10px",
                    }}
                  >
                    BOOK
                  </Button>
                </Row>
              </div>
            </Col>
          </Row>

          <Tabs size="large">
            <TabPane
              tab="DETAILS"
              key="1"
              style={{ paddingRight: "10px", paddingLeft: "10px" }}
            >
              <div style={{ textAlign: "start" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                urna diam, tincidunt eget rutrum in, tristique eget nisi. Nunc
                luctus sapien ut tellus accumsan volutpat. Quisque pellentesque
                magna a facilisis eleifend. In ac fermentum turpis, non lobortis
                nunc. Ut molestie sem et congue dignissim. Integer gravida
                semper felis, id convallis
              </div>
              <div
                style={{
                  padding: "15px",
                  backgroundColor: "#E8EFF7",
                  marginTop: "20px",
                }}
              >
                <Row justify="space-between">
                  <Col xs={24} sm={6} style={{ marginTop: "10px" }}>
                    <Row justify="center">
                      <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                        Address
                      </Typography>
                    </Row>
                    <Row>
                      <Col style={{ textAlign: "left" }}>
                        Amrit Marg(Manang Plaza), Thamel, 44600 Kathmandu, Nepal
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} sm={6} style={{ marginTop: "10px" }}>
                    <Row justify="center">
                      <Typography
                        style={{
                          fontWeight: "bold",
                          fontSize: 16,
                        }}
                      >
                        Check-In Time
                      </Typography>
                    </Row>
                    <Row justify="center">
                      <Col style={{ textAlign: "center" }}>14:00</Col>
                    </Row>
                  </Col>
                  <Col xs={24} sm={6} style={{ marginTop: "10px" }}>
                    <Row justify="center">
                      <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                        Check-Out Time
                      </Typography>
                    </Row>
                    <Row justify="center">
                      <Col style={{ textAlign: "left" }}>17:00</Col>
                    </Row>
                  </Col>
                </Row>
              </div>
              <Row justify="space-between" style={{ marginTop: "10px" }}>
                <Col
                  lg={4}
                  md={7}
                  sm={11}
                  xs={24}
                  style={{ marginTop: "10px" }}
                >
                  <Row>
                    <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                      General
                    </Typography>
                  </Row>
                  <Row>
                    <Col style={{ textAlign: "start" }}>
                      Parking, Bar / Lounge, Facilities for people with special
                      needs, Cable / Satellite TV, Luggage Storage, Air
                      Conditioned, Non-Smoking Rooms, Room Service, Express
                      Check-In / Check-Out, Restaurant, Sauna, Safe-Deposit Box,
                      Terrace / Patio, and 24-Hour Front Desk
                    </Col>
                  </Row>
                </Col>
                <Col
                  lg={4}
                  md={7}
                  sm={11}
                  xs={24}
                  style={{ marginTop: "10px" }}
                >
                  <Row>
                    <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                      Services
                    </Typography>
                  </Row>
                  <Row>
                    <Col style={{ textAlign: "left" }}>
                      Business center, Meeting / banquet facilities, Concierge,
                      Babysitting / child care (surcharge), and Laundry
                      facilities
                    </Col>
                  </Row>
                </Col>
                <Col
                  lg={4}
                  md={7}
                  sm={11}
                  xs={24}
                  style={{ marginTop: "10px" }}
                >
                  <Row>
                    <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                      Internet
                    </Typography>
                  </Row>
                  <Row>
                    <Col style={{ textAlign: "left" }}>
                      Wi-Fi (free of charge) and Internet (free of charge)
                    </Col>
                  </Row>
                </Col>
                <Col
                  lg={4}
                  md={7}
                  sm={11}
                  xs={24}
                  style={{ marginTop: "10px" }}
                >
                  <Row>
                    <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                      Leisure
                    </Typography>
                  </Row>
                  <Row>
                    <Col style={{ textAlign: "center" }}>Fitness Center</Col>
                  </Row>
                </Col>
                <Col
                  lg={4}
                  md={7}
                  sm={11}
                  xs={24}
                  style={{ marginTop: "10px" }}
                >
                  <Row>
                    <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                      Policy
                    </Typography>
                  </Row>
                  <Row>
                    <Col style={{ textAlign: "left" }}>
                      Wi-Fi (free of charge) and Internet (free of charge)
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row justify="space-between">
                <Col xs={24} lg={6}>
                  <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                    Deluxe King Room
                  </Typography>
                  <RoomComponent sleeps={2} />
                </Col>
                <Col xs={24} lg={6}>
                  <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                    Deluxe Triple Room
                  </Typography>
                  <RoomComponent sleeps={3} />
                </Col>
                <Col xs={24} lg={6}>
                  <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                    Deluxe King Room
                  </Typography>
                  <RoomComponent sleeps={4} />
                </Col>
              </Row>
            </TabPane>
            <TabPane
              tab="LOCATION"
              key="2"
              style={{ paddingRight: "10px", paddingLeft: "10px" }}
            >
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
            </TabPane>
            <TabPane
              tab="REVIEWS"
              key="3"
              style={{ paddingRight: "10px", paddingLeft: "10px" }}
            >
              <Reviews />
            </TabPane>
          </Tabs>
          <Recommendations />
          <PopularDestinations />
        </Col>
        <Col xs={0} sm={1} style={{ width: "120px" }} />
      </Row>
      <Footer />
    </>
  );
}

export default withRouter(HotelDetailedView);
