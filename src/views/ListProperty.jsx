import React from 'react';

import Header from "../components/Header"
import { Row, Col, Typography, Button } from 'antd';

import listImage from "../assets/img/listImage.png";
import { Link, withRouter } from 'react-router-dom';

import * as ROUTES from "../constants/routes";

function ListProperty() {



    return (
        <div
            style={{
                backgroundImage: `url(${listImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh"
            }}
        >
            <Header />
            <Row>
                <Col xs={0} sm={2} style={{ width: "150px" }} />
                <Col xs={1} sm={0} style={{ width: "10px" }} />
                <Col
                    style={{
                        background: `rgba(255, 255, 255, 0.8)`,
                        minHeight: "250px", width: "90%",
                        maxWidth: "500px",
                        top: 100,
                        borderRadius: "10px",
                        padding: "30px"
                    }} >
                    < Row >
                        <Typography style={{ color: "#06A69E", fontSize: 19, fontWeight: "bold", textAlign: "left" }}>
                            LIST YOUR PROPERTY ON INFYTRIP
                        </Typography>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                        <Typography style={{ color: "#3C3C3C", fontSize: 14, textAlign: "left" }}>
                            Global audience, Asia focus, Get the bookings you've been missing by listing for free on infytrip, today!
                        </Typography>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                        <Link to={ROUTES.LIST_PROPERTY_SIGNUP}>
                            <Button
                                style={{
                                    backgroundColor: "#06A69E",
                                    fontSize: 19,
                                    fontWeight: "bold",
                                    color: "#FFFFFF",
                                    paddingTop: "10px",
                                    paddingLeft: "10px",
                                    paddingRight: "10px",
                                    paddingBottom: "40px",
                                    borderRadius: "4px",
                                    width: "100%",
                                    maxWidth: "280px"
                                }}>
                                LIST YOUR PROPERTY
                        </Button>
                        </Link>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                        <Typography style={{ color: "#3C3C3C", fontSize: 14, textAlign: "left" }}>
                            Already started registration?
                        </Typography>

                        <Typography style={{ marginLeft: "5px", color: "#06A69E", fontSize: 14, textAlign: "left", fontWeight: "bold" }}>
                            <Link to={ROUTES.PROPERTY_REGISTRATION}>Continue here</Link>
                        </Typography>
                    </Row>
                </Col>

            </Row>
        </div >
    )
}
export default withRouter(ListProperty)
