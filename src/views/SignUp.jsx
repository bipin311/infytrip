import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { Row, Col, Button, Form, Input, Checkbox, message } from "antd";
import Title from "antd/lib/typography/Title";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import Image from "../assets/img/signup_logo.png";
import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../constants/routes";

import { withFirebase } from "../components/Firebase";

function SignUp(props) {
  const [windowWidth, setWindowWidth] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState(null);

  const key = "signup_message";

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", updateWindowSize);
  }, []);

  const updateWindowSize = () => {
    setWindowWidth(window.innerWidth);
  };

  const onAgreeChange = event => {
    setAgree(event.target.checked);
  };

  const onEmailChange = event => {
    let val = event.target.value;
    setEmail(val);
  };
  const onPasswordOneChange = event => {
    let val = event.target.value;
    setPasswordOne(val);
  };

  const onPasswordTwoChange = event => {
    let val = event.target.value;
    setPasswordTwo(val);
  };

  const isInvalid =
    passwordOne !== passwordTwo || passwordOne === "" || email === "" || !agree;

  const handleSubmit = event => {
    event.preventDefault();

    console.log("props");
    console.log(props);

    var emailAddress = email;
    var password = passwordOne;

    message.loading({ content: "Creating Account....", key });

    props.firebase
      .doCreateUserWithEmailAndPassword(emailAddress, password)
      .then(authUser => {
        console.log(JSON.stringify(authUser));

        message.success({ content: "User created!", key, duration: 2 });

        setEmail("");
        setPasswordOne("");
        setPasswordTwo("");
        setError(null);
      })
      .catch(error => {
        message.error({ content: error.message, key, duration: 4 });

        setError(error);
      });
  };

  const signInWithGoogle = () => {
    props.firebase.doSignInWithGoogle();
  };

  const signInWithFacebook = () => {
    props.firebase.doSignInWithFacebook();
  };

  return (
    <div>
      <Header />
      {windowWidth < 1024 ? (
        <div
          style={{
            paddingTop: "50px",
            paddingBottom: "50px"
          }}
        >
          <Row justify="center">
            <Col>
              <Row justify="center">
                <Title style={{ fontSize: "25px" }}>Create an account</Title>
              </Row>
              <Row justify="center">
                <Button
                  icon={<FacebookOutlined />}
                  size="large"
                  style={{ margin: "10px" }}
                  onClick={signInWithFacebook}
                >
                  Sign in with Facebook
                </Button>
                <Button
                  icon={<GoogleOutlined />}
                  style={{ margin: "10px" }}
                  size="large"
                  onClick={signInWithGoogle}
                >
                  Sign in with Google
                </Button>
              </Row>
              <Row justify="center" style={{ marginTop: "50px" }}>
                <Form layout="vertical">
                  <Form.Item label="Email">
                    <Input
                      name="email"
                      value={email}
                      id="email"
                      onChange={onEmailChange}
                      style={{ width: "95vw", maxWidth: "415px" }}
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item label="Password">
                    <Input.Password
                      size="large"
                      id="passwordOne"
                      name="passwordOne"
                      value={passwordOne}
                      onChange={onPasswordOneChange}
                    />
                  </Form.Item>
                  <Form.Item label="Confirm Password">
                    <Input.Password
                      size="large"
                      name="passwordTwo"
                      id="passwordTwo"
                      value={passwordTwo}
                      onChange={onPasswordTwoChange}
                    />
                  </Form.Item>
                  {error && <p>{error.message}</p>}
                  <Form.Item>
                    <Checkbox onChange={onAgreeChange}>
                      I Agree with Terms of Use
                    </Checkbox>
                  </Form.Item>
                </Form>
              </Row>
              <Row justify="center">
                <Button
                  type="primary"
                  size="large"
                  disabled={isInvalid}
                  onClick={handleSubmit}
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
                  SIGN UP
                </Button>
              </Row>
              <Row justify="center">
                <div
                  style={{
                    marginTop: "40px",
                    marginLeft: "0px",
                    width: "100vw"
                  }}
                >
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
          </Row>
        </div>
      ) : (
        <div
          style={{
            paddingLeft: "40px",
            paddingRight: "40px",
            paddingTop: "100px",
            paddingBottom: "100px"
          }}
        >
          <Row justify="space-between">
            <Col xs={0} xl={2}></Col>
            <Col
              xs={12}
              xl={10}
              justify="end"
              className="gutter-row"
              style={{ maxHeight: "600px" }}
            >
              <img
                src={Image}
                style={{
                  maxWidth: "80%",
                  height: "auto"
                }}
                alt="login_image"
              />
            </Col>
            <Col xs={12} xl={10} className="gutter-row">
              <Row justify="center">
                <Title>Create an account</Title>
              </Row>
              <Row justify="center">
                <Button
                  icon={<FacebookOutlined />}
                  size="large"
                  style={{ margin: "5px" }}
                  onClick={signInWithFacebook}
                >
                  Sign in with Facebook
                </Button>
                <Button
                  icon={<GoogleOutlined />}
                  style={{ margin: "5px" }}
                  size="large"
                  onClick={signInWithGoogle}
                >
                  Sign in with Google
                </Button>
              </Row>
              <Row justify="center" style={{ marginTop: "50px" }}>
                <Form layout="vertical">
                  <Form.Item label="Email">
                    <Input
                      name="email"
                      value={email}
                      onChange={onEmailChange}
                      style={{ width: "415px" }}
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item label="Password">
                    <Input.Password
                      name="passwordOne"
                      value={passwordOne}
                      onChange={onPasswordOneChange}
                      size="large"
                    />
                  </Form.Item>
                  <Form.Item label="Confirm Password">
                    <Input.Password
                      size="large"
                      name="passwordTwo"
                      value={passwordTwo}
                      onChange={onPasswordTwoChange}
                    />
                  </Form.Item>
                  {error && <p>{error.message}</p>}
                  <Form.Item>
                    <Checkbox onChange={onAgreeChange}>
                      I Agree with Terms of Use
                    </Checkbox>
                  </Form.Item>
                </Form>
              </Row>
              <Row justify="center">
                <Button
                  type="primary"
                  disabled={isInvalid}
                  onClick={handleSubmit}
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
                  SIGN UP
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
            <Col xs={0} xl={2}></Col>
          </Row>
        </div>
      )}
    </div>
  );
}

export default withRouter(withFirebase(SignUp));
