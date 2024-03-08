import React, { createRef } from "react";
import { Col, Card, Carousel, Button, Row, Typography, Rate } from "antd";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setIdAction } from "../../reducers/searchReducer";
import { withRouter } from "react-router-dom";

function RowComponent(props) {
  const carouselRef = createRef();

  const handleNext = () => carouselRef.current.next();

  const handlePrev = () => carouselRef.current.prev();

  const { name, photo_url, category, ratings, location, price, id } = props.val;

  const dispatch = useDispatch();

  const navigateToDetailed = () => {
    console.log({ id });

    dispatch(setIdAction(id));

    props.history.push("/hotelView");
  };

  return (
    <Col
      xs={24}
      md={12}
      lg={8}
      style={{
        minWidth: "255px",
        paddingLeft: "15px",
        paddingTop: "15px",
        cursor: "pointer",
      }}
      onClick={() => navigateToDetailed()}
    >
      <Card
        bodyStyle={{
          padding: "0px",
        }}
      >
        <Col style={{ position: "absolute" }}>
          <Carousel dots={false} ref={carouselRef}>
            <Col>
              <Card
                bodyStyle={{
                  padding: "0px",
                  height: "250px",
                }}
                style={{
                  backgroundImage: `url(${photo_url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100%",
                  width: "100%",
                  padding: "0px",
                  border: "none",
                }}
              >
                <Row justify="end" style={{ margin: "10px" }}>
                  <Button
                    style={{
                      backgroundColor: "#06A69E",
                      color: "#FFFFFF",
                      fontSize: 13,
                      border: "none",
                    }}
                  >
                    {category}
                  </Button>
                </Row>
              </Card>
            </Col>
            <Col>
              <Card
                bodyStyle={{
                  padding: "0px",
                  height: "250px",
                }}
                style={{
                  backgroundImage: `url(${photo_url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100%",
                  width: "100%",
                  padding: "0px",
                }}
              >
                <Row justify="end" style={{ margin: "10px" }}>
                  <Button
                    style={{
                      backgroundColor: "#06A69E",
                      color: "#FFFFFF",
                      fontSize: 13,
                      border: "none",
                    }}
                  >
                    {category}
                  </Button>
                </Row>
              </Card>
            </Col>
            <Col>
              <Card
                bodyStyle={{
                  padding: "0px",
                  height: "250px",
                }}
                style={{
                  backgroundImage: `url(${photo_url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100%",
                  width: "100%",
                  padding: "0px",
                }}
              >
                <Row justify="end" style={{ margin: "10px" }}>
                  <Button
                    style={{
                      backgroundColor: "#06A69E",
                      color: "#FFFFFF",
                      fontSize: 13,
                      border: "none",
                    }}
                  >
                    {category}
                  </Button>
                </Row>
              </Card>
            </Col>
            <Col>
              <Card
                bodyStyle={{
                  padding: "0px",
                  height: "250px",
                }}
                style={{
                  backgroundImage: `url(${photo_url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "100%",
                  width: "100%",
                  padding: "0px",
                }}
              >
                <Row justify="end" style={{ margin: "10px" }}>
                  <Button
                    style={{
                      backgroundColor: "#06A69E",
                      color: "#FFFFFF",
                      fontSize: 13,
                      border: "none",
                    }}
                  >
                    {category}
                  </Button>
                </Row>
              </Card>
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
          className="hotelListImages"
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
          <Row
            justify="start"
            style={{
              marginTop: "40px",
            }}
          >
            <Typography
              style={{
                fontSize: 16,
                color: "#FFFFFF",
                fontWeight: "bold",
              }}
            >
              {name}
            </Typography>
          </Row>
          <Row justify="start">
            <Rate
              style={{ fontSize: "11px", marginRight: "5px" }}
              value={ratings}
            />
            <Typography
              style={{
                fontSize: 12,
                color: "#FFFFFF",
              }}
            >
              {/* (369 Reviews) */}
            </Typography>
          </Row>
          <Row justify="start">
            <Typography
              style={{
                fontSize: 12,
                color: "#FFFFFF",
              }}
            >
              {location.province}, {location.country}
            </Typography>
          </Row>
        </Col>
        <Col>
          <Row
            justify="space-between"
            style={{
              marginTop: "250px",
              padding: "20px",
            }}
          >
            <Col>
              <Row justify="start">
                <Typography
                  style={{
                    color: "#1A588B",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                >
                  ${price}
                </Typography>
                <Typography
                  style={{
                    color: "#1A588B",
                    fontSize: 13,
                    marginTop: "5px",
                    fontWeight: "bold",
                  }}
                >
                  / Per night
                </Typography>
              </Row>
              <Row style={{ marginTop: "0px" }}>
                <Typography
                  style={{
                    color: "#1A588B",
                    fontSize: 10,
                    marginTop: "5px",
                    fontWeight: "bold",
                  }}
                >
                  Included: Taxes, Service Chargeshhhhh
                </Typography>
              </Row>
            </Col>
            <Col>
              <Button
                style={{
                  backgroundColor: "#1A588B",
                  color: "#FFFFFF",
                  fontSize: 13,
                  fontWeight: "bold",
                  width: "100px",
                  marginTop: "10px",
                }}
              >
                BOOK
              </Button>
            </Col>
          </Row>
        </Col>
      </Card>
    </Col>
  );
}

export default withRouter(RowComponent);
