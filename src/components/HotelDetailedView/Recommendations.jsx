import React, { createRef } from "react";
import { Typography, Row, Carousel, Col, Card, Rate } from "antd";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";

import Image from "../../assets/img/bgg.jpg";

export default function Recommendations() {
  const carouselRef = createRef();

  const handleNext = () => carouselRef.current.next();

  const handlePrev = () => carouselRef.current.prev();

  return (
    <div>
      <Row>
        <Typography
          style={{
            marginTop: "50px",
            fontSize: 20,
            fontWeight: "bold",
            color: "#545454",
            padding: "10px"
          }}
        >
          RECOMMENDATIONS BASED ON YOUR SEARCH
        </Typography>
      </Row>
      <Row>
        <Col span={24}>
          <Col style={{
            width: "100%",
            position: "absolute"
          }}>
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
              position: "absolute",
              marginTop: "90px",
              height: "160px",
              padding: "15px",
              width: "100%"
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
        </Col>
      </Row>
      <Row style={{ marginBottom: "270px" }} />
    </div >
  );
}
