import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "./Header";
import Image from "../assets/img/bgg.jpg";
import HomepageImage from "../assets/img/homepage.png";

import {
  Carousel,
  Row,
  Col,
  Card,
  Input,
  Typography,
  DatePicker,
  Select,
  Button,
  Avatar,
  Rate,
} from "antd";
import { withRouter, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { withFirebase } from "../components/Firebase";
import * as ROUTES from "../constants/routes";
import Axios from "axios";
import {
  setLocationAction,
  setResultsAction,
  setFilterDataAction,
} from "../reducers/searchReducer";

function Homepage(props) {
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  const [countriesData, setCountriesData] = useState([]);
  const [roomsData, setRoomsData] = useState([]);
  const [location, setLocation] = useState("");

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const redirectToLogin = () => {
    props.history.push("/login");
  };

  const navigateToSearch = () => {
    dispatch(setLocationAction(location));

    Axios.get("organisations/")
      .then((res) => {
        dispatch(setFilterDataAction(res.data.filterData));

        Axios.get("organisations/?search=" + location)
          .then((res) => {
            console.log(res);

            dispatch(setResultsAction(res.data));

            props.history.push("/hotelListView");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    Axios.get("organisations/summary/?type=continent")
      .then((res) => {
        setCountriesData(res.data);
      })
      .catch((err) => console.log(err));

    Axios.get("rooms/")
      .then((res) => {
        let results = res.data.results;

        // results.forEach((element) => {
        //   if (element.standard.toUpperCase() === "NORMAL") {
        //     element.rating = 3;
        //   } else if (element.standard.toUpperCase() === "HIGH") {
        //     element.rating = 4;
        //   } else if (element.standard.toUpperCase() === "DELUXE") {
        //     element.rating = 5;
        //   } else {
        //     element.rating = 2;
        //   }
        // });

        results.map((val) => (val.rating = 0));

        setRoomsData(results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ backgroundColor: "#F2F4F7" }}>
      <Header user={user} redirectToLogin={() => redirectToLogin} />
      <Carousel
        autoplay
        style={{
          height: "600px",
          width: "100%",
          top: 0,
          left: 0,
          right: 0,
          position: "absolute",
        }}
      >
        <Col>
          <Card
            alt="logo"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${HomepageImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "600px",
              width: "100%",
              border: "none",
              margin: "auto",
            }}
          >
            <Col
              className="landingImage"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bolder",
              }}
            >
              <Row justify="center" style={{ margin: "auto" }}>
                <Typography
                  style={{
                    position: "absolute",
                    top: "35%",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    fontSize: 50,
                    color: "white",
                    width: "90%",
                    margin: "auto",
                  }}
                >
                  Find Your Best Hotel With Us
                </Typography>
              </Row>
            </Col>
          </Card>
        </Col>
        <Col>
          <Card
            alt="logo"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${HomepageImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "600px",
              width: "100%",
              border: "none",
              margin: "auto",
            }}
          >
            <Col
              className="landingImage"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bolder",
              }}
            >
              <Row justify="center" style={{ margin: "auto" }}>
                <Typography
                  style={{
                    position: "absolute",
                    top: "35%",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    fontSize: 50,
                    color: "white",
                    width: "90%",
                    margin: "auto",
                  }}
                >
                  Find Your Best Hotel With Us
                </Typography>
              </Row>
            </Col>
          </Card>
        </Col>
        <Col>
          <Card
            alt="logo"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${HomepageImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "600px",
              width: "100%",
              border: "none",
              margin: "auto",
            }}
          >
            <Col
              className="landingImage"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bolder",
              }}
            >
              <Row justify="center" style={{ margin: "auto" }}>
                <Typography
                  style={{
                    position: "absolute",
                    top: "35%",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    fontSize: 50,
                    color: "white",
                    width: "90%",
                    margin: "auto",
                  }}
                >
                  Find Your Best Hotel With Us
                </Typography>
              </Row>
            </Col>
          </Card>
        </Col>
        <Col>
          <Card
            alt="logo"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${HomepageImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "600px",
              width: "100%",
              border: "none",
              margin: "auto",
            }}
          >
            <Col
              className="landingImage"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "bolder",
              }}
            >
              <Row justify="center" style={{ margin: "auto" }}>
                <Typography
                  style={{
                    position: "absolute",
                    top: "35%",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    fontSize: 50,
                    color: "white",
                    width: "90%",
                    margin: "auto",
                  }}
                >
                  Find Your Best Hotel With Us
                </Typography>
              </Row>
            </Col>
          </Card>
        </Col>
      </Carousel>
      <Row justify="center">
        <Card
          style={{
            width: "90%",
            minHeight: "150px",
            marginTop: "520px",
            backgroundColor: "#06A69E",
            zIndex: "19",
            borderRadius: 10,
            border: "none",
            paddingTop: "10px",
            paddingBottom: "10px",
            maxWidth: "1400px",
          }}
        >
          <Col style={{ width: "90%", margin: "auto" }} span={24}>
            <Row gutter={19} justify="space-around">
              <Col xs={24} sm={24} lg={9}>
                <Row justify="start">
                  <Typography
                    style={{
                      fontSize: 15,
                      color: "white",
                      fontWeight: "bold",
                      marginBottom: "5px",
                      marginTop: "10px",
                    }}
                  >
                    Location
                  </Typography>
                </Row>
                <Row>
                  <Input
                    size="large"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter City/Hotel"
                    style={{ borderRadius: 3, width: "100%" }}
                  />
                </Row>
              </Col>
              <Col xs={24} sm={9} lg={5}>
                <Row justify="start">
                  <Typography
                    style={{
                      fontSize: 15,
                      color: "white",
                      fontWeight: "bold",
                      marginBottom: "5px",
                      marginTop: "10px",
                    }}
                  >
                    Check In
                  </Typography>
                </Row>
                <Row>
                  <DatePicker
                    size="large"
                    placeholder="DD/MM/YY"
                    format="DD/MM/YY"
                    style={{ borderRadius: 3, width: "100%" }}
                  />
                </Row>
              </Col>
              <Col xs={24} sm={9} lg={5}>
                <Row justify="start">
                  <Typography
                    style={{
                      fontSize: 15,
                      color: "white",
                      fontWeight: "bold",
                      marginBottom: "5px",
                      marginTop: "10px",
                    }}
                  >
                    Check Out
                  </Typography>
                </Row>
                <Row>
                  <DatePicker
                    size="large"
                    placeholder="DD/MM/YY"
                    format="DD/MM/YY"
                    style={{ borderRadius: 3, width: "100%" }}
                  />
                </Row>
              </Col>
              <Col xs={24} sm={6} lg={3}>
                <Row justify="start">
                  <Typography
                    style={{
                      fontSize: 15,
                      color: "white",
                      fontWeight: "bold",
                      marginBottom: "5px",
                      marginTop: "10px",
                    }}
                  >
                    Guests
                  </Typography>
                </Row>
                <Row>
                  <Select
                    size="large"
                    type="number"
                    style={{ borderRadius: 3, width: "100%" }}
                  />
                </Row>
              </Col>
              <Col xs={24} lg={2}>
                <Row style={{ marginTop: "37px" }}>
                  <Link to={ROUTES.HOTEL_LIST_VIEW}>
                    <Button
                      size="large"
                      style={{ borderRadius: 3, width: "90px", margin: "auto" }}
                      onClick={() => navigateToSearch()}
                    >
                      SEARCH
                    </Button>
                  </Link>
                </Row>
              </Col>
            </Row>
          </Col>
        </Card>
      </Row>
      <Row justify="center" style={{ marginTop: "50px" }}>
        <Typography
          style={{ fontSize: 30, fontWeight: "bold", color: "#2D2D2D" }}
        >
          TRENDING DESTINATIONS
        </Typography>
      </Row>
      <Row justify="center">
        <Typography style={{ fontSize: 25, marginBottom: "50px" }}>
          What Our Clients Love
        </Typography>
      </Row>
      <Row
        gutter={30}
        justify="center"
        style={{ width: "89vw", minWidth: "305px", margin: "auto" }}
      >
        {countriesData.map((val, i) => (
          <Col
            key={i}
            xs={24}
            md={12}
            xl={8}
            style={{
              height: "320px",
              padding: "10px",
            }}
          >
            <Card
              bodyStyle={{
                padding: "0px",
              }}
              style={{
                backgroundImage: `url(${val.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
                borderRadius: 10,
              }}
            >
              <Col
                style={{
                  height: "138px",
                  borderRadius: 8,
                  padding: "0px",
                }}
                className="listImages"
              >
                <Row
                  justify="space-between"
                  style={{
                    height: "60px",
                    marginTop: "160px",
                    padding: "10px",
                  }}
                >
                  <Col span={12}>
                    <Row justify="start" style={{ marginTop: "10px" }}>
                      <Typography
                        style={{
                          height: "25px",
                          fontSize: 16,
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {val.location}
                      </Typography>
                    </Row>
                    <Row justify="start">
                      <Typography style={{ fontSize: 13, color: "white" }}>
                        {val.properties} Properties
                      </Typography>
                    </Row>
                  </Col>
                  <Col span={12}>
                    <Row justify="end" style={{ marginTop: "10px" }}>
                      <Typography
                        style={{
                          height: "25px",
                          fontSize: 16,
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        AUD {val.average_price}
                      </Typography>
                    </Row>
                    <Row justify="end">
                      <Typography style={{ fontSize: 13, color: "white" }}>
                        Average Price
                      </Typography>
                    </Row>
                  </Col>
                </Row>
                <Row justify="center" style={{ height: "40px" }}>
                  <Avatar
                    shape="square"
                    size={40}
                    src={val.image}
                    style={{
                      borderRadius: 4,
                      margin: "7px",
                      marginTop: "20px",
                    }}
                  />
                  <Avatar
                    shape="square"
                    size={40}
                    src={val.image}
                    style={{
                      borderRadius: 4,
                      margin: "7px",
                      marginTop: "20px",
                    }}
                  />
                  <Avatar
                    shape="square"
                    size={40}
                    src={val.image}
                    style={{
                      borderRadius: 4,
                      margin: "7px",
                      marginTop: "20px",
                    }}
                  />
                  <Avatar
                    shape="square"
                    size={40}
                    src={val.image}
                    style={{
                      borderRadius: 4,
                      margin: "7px",
                      marginTop: "20px",
                    }}
                  />
                  <Avatar
                    shape="square"
                    size={40}
                    src={val.image}
                    style={{
                      borderRadius: 4,
                      margin: "7px",
                      marginTop: "20px",
                    }}
                  />
                </Row>
              </Col>
            </Card>
          </Col>
        ))}
      </Row>
      <Col style={{ backgroundColor: "#FFFFFF", marginTop: "50px" }}>
        <Col style={{ padding: "50px" }}>
          <Row justify="center">
            <Typography
              style={{ fontSize: 30, fontWeight: "bold", color: "#2D2D2D" }}
            >
              RECOMMENDATION PACKAGES
            </Typography>
          </Row>
          <Row justify="center">
            <Typography style={{ fontSize: 25 }}>
              What Our Clients Love
            </Typography>
          </Row>
        </Col>
        <Row
          gutter={30}
          style={{ width: "89vw", minWidth: "305px", margin: "auto" }}
        >
          {roomsData.map((val, i) => (
            <Col
              key={i}
              xs={24}
              md={12}
              xl={6}
              style={{
                height: "320px",
                padding: "10px",
              }}
            >
              <Card
                bodyStyle={{
                  padding: "0px",
                  height: "320px",
                }}
                style={{
                  backgroundImage: `url(${val.photo_url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100%",
                  width: "100%",
                  borderRadius: 10,
                  padding: "0px",
                }}
              >
                <Col
                  style={{
                    height: "89px",
                    borderRadius: 9,
                    padding: "0px",
                  }}
                  className="listImages"
                >
                  <Row
                    justify="start"
                    align="bottom"
                    style={{
                      height: "40px",
                      marginTop: "210px",
                      padding: "15px",
                      fontSize: 12,
                      color: "white",
                      fontWeight: "bold",
                      textAlign: "left",
                    }}
                  >
                    {val.info}
                  </Row>
                  <Row
                    justify="space-between"
                    style={{ height: "5px", padding: "15px" }}
                  >
                    <Col span={8}>
                      <Row justify="start">
                        <Typography style={{ fontSize: 15, color: "white" }}>
                          ${val.price}
                        </Typography>
                      </Row>
                    </Col>
                    <Col span={16}>
                      <Row justify="end">
                        <span>
                          <Rate
                            style={{ fontSize: "11px" }}
                            tooltips={desc}
                            value={val.rating}
                          />
                        </span>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Card>
            </Col>
          ))}
        </Row>
        <Row justify="center" style={{ margin: "50px" }}>
          <Button
            style={{
              backgroundColor: "#06A69E",
              color: "white",
              fontSize: "12px",
              fontWeight: "bold",
              paddingTop: "12px",
              paddingBottom: "30px",
            }}
          >
            MORE RECOMMENDATIONS
          </Button>
        </Row>

        <Col>
          <Card
            style={{
              backgroundImage: `url(${Image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "400px",
              width: "100%",
              margin: "auto",
            }}
          >
            <Col
              className="subscribeImage"
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                position: "absolute",
                justifyContent: "center",
                alignItems: "center",
                margin: "auto",
              }}
            >
              <Row justify="center" style={{ marginTop: "80px" }}>
                <Typography
                  style={{
                    fontSize: 30,
                    color: "white",
                    fontWeight: "bolder",
                  }}
                >
                  Save Time, Save Money
                </Typography>
              </Row>
              <Row justify="center">
                <Typography
                  style={{
                    fontSize: 30,
                    color: "white",
                  }}
                >
                  Sign up and we will send best deals to you !
                </Typography>
              </Row>
              <Row justify="center" style={{ margin: "auto" }}>
                <Col xs={23} sm={20} md={17} lg={14}>
                  <Row>
                    <Col xs={18} sm={20}>
                      <Input
                        style={{
                          height: "40px",
                          width: "100%",
                          padding: "10px",
                          marginTop: "50px",
                        }}
                        placeholder="Enter your Email"
                        size="large"
                      />
                    </Col>
                    <Col xs={6} sm={4}>
                      <Button
                        style={{
                          backgroundColor: "#06A69E",
                          height: "40px",
                          width: "100%",
                          padding: "10px",
                          border: "none",
                          marginTop: "50px",
                          color: "white",
                          fontSize: "11px",
                          fontWeight: "bold",
                        }}
                      >
                        SUBSCRIBE
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Card>
        </Col>
      </Col>
      <Footer />
    </div>
  );
}

export default withRouter(withFirebase(Homepage));
