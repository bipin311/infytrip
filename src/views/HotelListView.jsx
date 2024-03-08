import React, { createRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  Col,
  Row,
  Typography,
  Input,
  DatePicker,
  Select,
  Button,
  Layout,
  Slider,
  Divider,
  Rate,
  Checkbox,
  Card,
  Carousel,
  Pagination,
} from "antd";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";

import Image from "../assets/img/bgg.jpg";
import { useSelector, useDispatch } from "react-redux";
import RowComponent from "../components/HotelListView/RowComponent";
import Sort from "../components/HotelListView/Sort";
import { setLocationAction, setResultsAction } from "../reducers/searchReducer";
import Axios from "axios";

const { Search } = Input;
const { Content, Sider } = Layout;

function onChange(e) {
  console.log(e.target.value);
}

function HotelListView() {
  const carouselRef = createRef();

  const handleNext = () => carouselRef.current.next();

  const handlePrev = () => carouselRef.current.prev();

  const dispatch = useDispatch();

  const searchByHotelName = (value) => {
    console.log("searched");

    dispatch(setLocationAction(value));

    Axios.get("organisations/?search=,,," + value)
      .then((res) => {
        console.log(res);

        dispatch(setResultsAction(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const location = useSelector((state) => state.search.location);
  const results = useSelector((state) => state.search.results);
  const filterData = useSelector((state) => state.search.filterData);

  console.log({ location });
  console.log({ results });
  console.log({ filterData });

  var count = 0;
  var resultSet = [];

  try {
    count = results.hotelData.length;
    resultSet = results.hotelData;
  } catch (error) {
    console.log(error);
  }

  return (
    <div style={{ backgroundColor: "#E8EFF7" }}>
      <Header />
      <Col
        style={{
          width: "100%",
          minHeight: "130px",
          backgroundColor: "#06A69E",
          paddingTop: "10px",
          paddingBottom: "15px",
        }}
      >
        <Col style={{ width: "90%", margin: "auto" }} span={24}>
          <Row gutter={48} justify="space-around">
            <Col xs={24} sm={24} lg={8}>
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
                  placeholder="Enter City/Hotel"
                  style={{
                    borderRadius: 3,
                    width: "100%",
                  }}
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
            <Col xs={24} lg={3}>
              <Row style={{ marginTop: "38px" }}>
                <Button
                  size="large"
                  style={{ borderRadius: 3, width: "90px", margin: "auto" }}
                >
                  SEARCH
                </Button>
              </Row>
            </Col>
          </Row>
        </Col>
      </Col>
      <Layout>
        <Sider
          width={300}
          style={{
            zIndex: 19,
            position: "absolute",
            backgroundColor: "#FFFFFF",
          }}
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          breakpoint="xl"
          collapsedWidth="0"
        >
          {" "}
          <Row
            style={{
              paddingLeft: "65px",
              paddingRight: "20px",
            }}
          >
            <Search
              size="large"
              placeholder="Search by Hotel Name"
              onSearch={(value) => searchByHotelName(value)}
              style={{
                marginTop: "65px",
                width: "100%",
                border: "solid 1px",
                color: "#B4CDDE",
                marginBottom: "40px",
              }}
            />
          </Row>
          <Row justify="start">
            <Typography
              style={{
                fontWeight: "bolder",
                fontSize: 15,
                color: "#545454",
                paddingLeft: "65px",
                paddingRight: "20px",
              }}
            >
              Price Range
            </Typography>
          </Row>
          <Col
            span={24}
            style={{
              paddingLeft: "65px",
              paddingRight: "20px",
            }}
          >
            <Slider
              range
              defaultValue={[0, 1000]}
              style={{
                marginBottom: "40px",
              }}
            />
          </Col>
          <Col
            span={24}
            style={{
              marginBottom: "40px",
              paddingLeft: "65px",
              paddingRight: "20px",
            }}
          >
            <Row justify="space-between">
              <Col>
                <Typography
                  style={{
                    fontWeight: "bolder",
                    fontSize: 15,
                    color: "#545454",
                  }}
                >
                  Stars
                </Typography>
              </Col>
              <Col>
                <Typography
                  style={{
                    fontSize: 13,
                    color: "#B4CDDE",
                    fontWeight: "bold",
                  }}
                >
                  Clear All
                </Typography>
              </Col>
            </Row>
            <Divider style={{ marginTop: "2px", backgroundColor: "#06A69E" }} />
            <Row justify="space-between" align="bottom">
              <Col>
                <Checkbox
                  value={5}
                  onChange={onChange}
                  style={{ marginRight: "10px" }}
                />
                <Rate count={5} value={5} />
              </Col>
              <Col>
                <Typography
                  style={{
                    fontSize: 15,
                    color: "#06A69E",
                    fontWeight: "bold",
                  }}
                >
                  {filterData.ratingData.fiveStar}
                </Typography>
              </Col>
            </Row>
            <Row justify="space-between" align="bottom">
              <Col>
                <Checkbox
                  value={4}
                  onChange={onChange}
                  style={{ marginRight: "10px" }}
                />
                <Rate count={4} value={4} />
              </Col>
              <Col>
                <Typography
                  style={{
                    fontSize: 15,
                    color: "#06A69E",
                    fontWeight: "bold",
                  }}
                >
                  {filterData.ratingData.fourStar}
                </Typography>
              </Col>
            </Row>
            <Row justify="space-between" align="bottom">
              <Col>
                <Checkbox
                  value={3}
                  onChange={onChange}
                  style={{ marginRight: "10px" }}
                />
                <Rate count={3} value={3} />
              </Col>
              <Col>
                <Typography
                  style={{
                    fontSize: 15,
                    color: "#06A69E",
                    fontWeight: "bold",
                  }}
                >
                  {filterData.ratingData.threeStar}
                </Typography>
              </Col>
            </Row>
            <Row justify="space-between" align="bottom">
              <Col>
                <Checkbox
                  value={2}
                  onChange={onChange}
                  style={{ marginRight: "10px" }}
                />
                <Rate count={2} value={2} />
              </Col>
              <Col>
                <Typography
                  style={{
                    fontSize: 15,
                    color: "#06A69E",
                    fontWeight: "bold",
                  }}
                >
                  {filterData.ratingData.twoStar}
                </Typography>
              </Col>
            </Row>
            <Row justify="space-between" align="bottom">
              <Col>
                <Checkbox
                  value={1}
                  onChange={onChange}
                  style={{ marginRight: "10px" }}
                />
                <Rate count={1} value={1} />
              </Col>
              <Col>
                <Typography
                  style={{
                    fontSize: 15,
                    color: "#06A69E",
                    fontWeight: "bold",
                  }}
                >
                  {filterData.ratingData.oneStar}
                </Typography>
              </Col>
            </Row>
          </Col>
          <Col
            span={24}
            style={{
              marginBottom: "40px",
              paddingLeft: "65px",
              paddingRight: "20px",
            }}
          >
            <Row justify="space-between">
              <Col>
                <Typography
                  style={{
                    fontWeight: "bolder",
                    fontSize: 15,
                    color: "#545454",
                  }}
                >
                  Property Type
                </Typography>
              </Col>
              <Col>
                <Typography
                  style={{
                    fontSize: 13,
                    color: "#B4CDDE",
                    fontWeight: "bold",
                  }}
                >
                  Clear All
                </Typography>
              </Col>
            </Row>
            <Divider style={{ marginTop: "2px", backgroundColor: "#06A69E" }} />
            {filterData.propertyTypeData.map((val, i) => (
              <Row
                justify="space-between"
                align="bottom"
                key={i}
                style={{ marginBottom: "10px" }}
              >
                <Col>
                  <Row>
                    <Checkbox
                      value={5}
                      onChange={onChange}
                      style={{ marginRight: "10px" }}
                    />
                    <Typography
                      style={{
                        fontSize: 15,
                        color: "#06A69E",
                        fontWeight: "bold",
                      }}
                    >
                      {val.category__name}
                    </Typography>
                  </Row>
                </Col>
                <Col>
                  <Typography
                    style={{
                      fontSize: 15,
                      color: "#06A69E",
                      fontWeight: "bold",
                    }}
                  >
                    {val.count}
                  </Typography>
                </Col>
              </Row>
            ))}
            <Row>
              <Typography
                style={{
                  fontSize: 13,
                  color: "#B4CDDE",
                  fontWeight: "bold",
                }}
              >
                See More
              </Typography>
            </Row>
          </Col>
          <Col
            span={24}
            style={{
              marginBottom: "40px",
              paddingLeft: "65px",
              paddingRight: "20px",
            }}
          >
            <Row justify="space-between">
              <Col>
                <Typography
                  style={{
                    fontWeight: "bolder",
                    fontSize: 15,
                    color: "#545454",
                  }}
                >
                  Area
                </Typography>
              </Col>
              <Col>
                <Typography
                  style={{
                    fontSize: 13,
                    color: "#B4CDDE",
                    fontWeight: "bold",
                  }}
                >
                  Clear All
                </Typography>
              </Col>
            </Row>
            <Divider style={{ marginTop: "2px", backgroundColor: "#06A69E" }} />
            {filterData.areaData.map((val, i) => (
              <Row
                justify="space-between"
                align="bottom"
                style={{ marginBottom: "10px" }}
              >
                <Col>
                  <Row>
                    <Checkbox
                      value={5}
                      onChange={onChange}
                      style={{ marginRight: "10px" }}
                    />
                    <Typography
                      style={{
                        fontSize: 15,
                        color: "#06A69E",
                        fontWeight: "bold",
                      }}
                    >
                      {val.location__area}
                    </Typography>
                  </Row>
                </Col>
                <Col>
                  <Typography
                    style={{
                      fontSize: 15,
                      color: "#06A69E",
                      fontWeight: "bold",
                    }}
                  >
                    {val.count}
                  </Typography>
                </Col>
              </Row>
            ))}

            <Row>
              <Typography
                style={{
                  fontSize: 13,
                  color: "#B4CDDE",
                  fontWeight: "bold",
                }}
              >
                See More
              </Typography>
            </Row>
          </Col>
          <Col
            span={24}
            style={{
              marginBottom: "40px",
              paddingLeft: "65px",
              paddingRight: "20px",
            }}
          >
            <Row justify="space-between">
              <Col>
                <Typography
                  style={{
                    fontWeight: "bolder",
                    fontSize: 15,
                    color: "#545454",
                  }}
                >
                  Facilities
                </Typography>
              </Col>
              <Col>
                <Typography
                  style={{
                    fontSize: 13,
                    color: "#B4CDDE",
                    fontWeight: "bold",
                  }}
                >
                  Clear All
                </Typography>
              </Col>
            </Row>
            <Divider style={{ marginTop: "2px", backgroundColor: "#06A69E" }} />
            {/* {filterData.facilitiesData.map((val, i) => (
              <Row
                justify="space-between"
                align="bottom"
                style={{ marginBottom: "10px" }}
              >
                <Col>
                  <Row>
                    <Checkbox
                      value={5}
                      onChange={onChange}
                      style={{ marginRight: "10px" }}
                    />
                    <Typography
                      style={{
                        fontSize: 15,
                        color: "#06A69E",
                        fontWeight: "bold",
                      }}
                    >
                      {}
                    </Typography>
                  </Row>
                </Col>
                <Col>
                  <Typography
                    style={{
                      fontSize: 15,
                      color: "#06A69E",
                      fontWeight: "bold",
                    }}
                  >
                    {}
                  </Typography>
                </Col>
              </Row>
            ))} */}
            <Row>
              <Typography
                style={{
                  fontSize: 13,
                  color: "#B4CDDE",
                  fontWeight: "bold",
                }}
              >
                See More
              </Typography>
            </Row>
          </Col>
        </Sider>
        <Col xl={0} xs={0} sm={1} style={{ minWidth: "50px" }} />
        <Col xl={1} xs={0} style={{ minWidth: 300 }} />
        <Content style={{ minHeight: "1205px" }}>
          <Col
            style={{
              marginTop: "15px",
              marginBottom: "320px",
              marginRight: "15px",
            }}
          >
            <Row>
              <Card
                style={{
                  width: "100%",
                  marginLeft: "15px",
                }}
              >
                <Row justify="space-between">
                  <Col>
                    <Row justify="start">
                      <Typography
                        style={{
                          fontSize: 24,
                          fontWeight: "bold",
                          color: "#545454",
                        }}
                      >
                        Search for {location}
                      </Typography>
                    </Row>
                    <Row justify="start">
                      <Typography
                        style={{
                          fontSize: 13,
                          color: "#06A69E",
                          fontWeight: "bold",
                        }}
                      >
                        {count} reasons to visit: temples, culture & friendly
                        locals
                      </Typography>
                    </Row>
                  </Col>
                  <Col>
                    <Row justify="space-around">
                      <Button
                        style={{
                          color: "#06A69E",
                          fontColor: "#06A69E",
                          marginTop: "10px",
                        }}
                      >
                        VIEW ON MAP
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Row>
            <Row style={{ marginTop: "25px", marginLeft: "15px" }}>
              <Sort />
            </Row>
            <Row style={{ marginTop: "5px" }}>
              {resultSet.map((val, i) => (
                <RowComponent key={i} val={val} />
              ))}
            </Row>
            <Row>
              <Card
                style={{ marginTop: "20px", marginLeft: "15px", width: "100%" }}
              >
                <Pagination style={{ fontSize: "20px" }} defaultCurrent={1} />
              </Card>
            </Row>
            <Row>
              <Typography
                style={{
                  marginTop: "50px",
                  marginLeft: "15px",
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#545454",
                }}
              >
                RECOMMENDATIONS BASED ON YOUR SEARCH
              </Typography>
            </Row>
            <Row style={{ marginLeft: "5px" }}>
              <Col style={{ position: "absolute" }}>
                <Carousel dots={false} ref={carouselRef}>
                  <Col>
                    <Row>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Carousel>
              </Col>

              <Col
                style={{
                  marginTop: "90px",
                  position: "absolute",
                  height: "160px",
                  width: "100%",
                  padding: "15px",
                }}
              >
                <Row justify="space-between">
                  <Col>
                    <Row justify="start">
                      <LeftCircleFilled
                        style={{ fontSize: "25px", color: "#ECEAE9" }}
                        onClick={handlePrev}
                      />
                    </Row>
                  </Col>
                  <Col>
                    <Row justify="end">
                      <RightCircleFilled
                        style={{ fontSize: "25px", color: "#ECEAE9" }}
                        onClick={handleNext}
                      />
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Typography
                style={{
                  marginTop: "290px",
                  marginLeft: "15px",
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#545454",
                }}
              >
                MOST POPULAR DESTINATIONS
              </Typography>
            </Row>
            <Row style={{ marginLeft: "5px" }}>
              <Col style={{ position: "absolute" }}>
                <Carousel dots={false} ref={carouselRef}>
                  <Col>
                    <Row>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                      <Col
                        span={6}
                        style={{
                          height: "250px",
                          padding: "10px",
                        }}
                      >
                        <Card
                          bodyStyle={{
                            padding: "0px",
                            height: "250px",
                          }}
                          style={{
                            backgroundImage: `url(${Image})`,
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
                                marginTop: "140px",
                                padding: "15px",
                                fontSize: 12,
                                color: "white",
                                fontWeight: "bold",
                                textAlign: "left",
                              }}
                            >
                              Historic Carriage House in Denver's Oldest
                              Neighborhood
                            </Row>
                            <Row
                              justify="space-between"
                              style={{ height: "5px", padding: "15px" }}
                            >
                              <Col span={8}>
                                <Row justify="start">
                                  <Typography
                                    style={{ fontSize: 15, color: "white" }}
                                  >
                                    $100.00
                                  </Typography>
                                </Row>
                              </Col>
                              <Col span={16}>
                                <Row justify="end">
                                  <span>
                                    <Rate
                                      style={{ fontSize: "11px" }}
                                      value={5}
                                    />
                                  </span>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Card>
                      </Col>
                    </Row>
                  </Col>
                </Carousel>
              </Col>

              <Col
                style={{
                  marginTop: "90px",
                  position: "absolute",
                  height: "160px",
                  width: "100%",
                  padding: "15px",
                }}
              >
                <Row justify="space-between">
                  <Col>
                    <Row justify="start">
                      <LeftCircleFilled
                        style={{ fontSize: "25px", color: "#ECEAE9" }}
                        onClick={handlePrev}
                      />
                    </Row>
                  </Col>
                  <Col>
                    <Row justify="end">
                      <RightCircleFilled
                        style={{ fontSize: "25px", color: "#ECEAE9" }}
                        onClick={handleNext}
                      />
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Content>
        <Col sm={1} xs={0} style={{ minWidth: "50px" }} />
      </Layout>
      <Footer />
    </div>
  );
}

export default HotelListView;
