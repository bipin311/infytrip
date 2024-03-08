import React from 'react';

import Header from "../components/Header"
import { Row, Col, Input, Checkbox, Typography, Button } from 'antd';


import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../constants/routes";

import listImage from "../assets/img/listImage.png";


function ListProperty() {



    return (
        <div
            style={{
                backgroundImage: `url(${listImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100%",
                backgroundPosition: "center",
            }}
        >
            <Header />
            <Row justify="end">

                <Col sm={0} xs={1} style={{ width: "10px" }} />
                <Col xs={22} sm={22}
                    style={{
                        background: "#FFFFFF",
                        width: "100%",
                        maxWidth: "550px",
                        marginTop: "30px",
                        borderRadius: "5px",
                        padding: "30px",
                        marginBottom: "30px",
                    }} >
                    <Row>
                        <Typography style={{ fontWeight: "bold", fontSize: 30, color: "#2D2D2D" }}>
                            Create an account
                            </Typography>
                    </Row>
                    <Row justify="center" style={{ marginTop: "20px" }}>
                        <Button
                            icon={<FacebookOutlined />}
                            size="large"
                            style={{ margin: "10px" }}
                        // onClick={signInWithFacebook}
                        >
                            Sign in with Facebook
                </Button>
                        <Button
                            icon={<GoogleOutlined />}
                            style={{ margin: "10px" }}
                            size="large"
                        // onClick={signInWithGoogle}
                        >
                            Sign in with Google
                </Button>
                    </Row>
                    <Row justify="center" style={{ marginTop: "10px" }}>
                        <Row style={{ width: "100%", marginTop: "15px" }}>
                            <Typography style={{ fontSize: "15px", fontWeight: "bold" }}>
                                Email
                            </Typography>
                        </Row>
                        <Row style={{ width: "100%", marginTop: "10px" }}>
                            <Input
                                name="email"
                                // value={email}
                                // onChange={onEmailChange}
                                style={{ maxWidth: "500px" }}
                                size="large"
                            />
                        </Row>
                        <Row style={{ width: "100%", marginTop: "15px" }}>
                            <Typography style={{ fontSize: "15px", fontWeight: "bold" }}>
                                Password
                            </Typography>
                        </Row>
                        <Row style={{ width: "100%", marginTop: "10px" }}>
                            <Input.Password
                                name="passwordOne"
                                // value={passwordOne}
                                // onChange={onPasswordOneChange}
                                size="large"
                            />
                        </Row>
                        <Row style={{ width: "100%", marginTop: "15px" }}>
                            <Typography style={{ fontSize: "15px", fontWeight: "bold" }}>
                                Confirm Password
                            </Typography>
                        </Row>
                        <Row style={{ width: "100%", marginTop: "10px" }}>
                            <Input.Password
                                size="large"
                                name="passwordTwo"
                            // value={passwordTwo}
                            // onChange={onPasswordTwoChange}
                            />
                        </Row>

                    </Row>
                    <Row justify="center" style={{ width: "100%", marginTop: "20px" }}>
                        <Checkbox
                        // onChange={onAgreeChange}
                        >
                            I Agree with Terms of Use
                    </Checkbox>
                    </Row>
                    <Row justify="center" style={{ width: "100%", marginTop: "20px" }}>
                        <Button
                            type="primary"
                            // disabled={isInvalid}
                            // onClick={handleSubmit}
                            size="large"
                            style={{
                                marginLeft: "0px",
                                marginTop: "0px",
                                paddingRight: "50px",
                                paddingLeft: "50px",
                                backgroundColor: "#1A588B",
                                paddingTop: "5px",
                                paddingBottom: "10px"
                            }}
                        >
                            Create an Account
                </Button>
                    </Row>
                    <Row justify="center">
                        <div style={{ marginTop: "40px", marginLeft: "0px" }}>
                            Already have an account?{" "}
                            <span
                                style={{
                                    fontWeight: "bold",
                                    cursor: "pointer",
                                    color: "#06A69E"
                                }}
                            >
                                <Link to={ROUTES.LOG_IN}>SIGN IN</Link>
                            </span>
                        </div>
                    </Row>

                </Col>
                <Col sm={2} xs={0} style={{ width: "40px" }} />
                <Col sm={0} xs={1} style={{ width: "10px" }} />
            </Row>



        </div >
    )
}
export default withRouter(ListProperty)
