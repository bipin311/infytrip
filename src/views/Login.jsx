import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  Input,
  Form,
  Checkbox,
  message,
  Progress,
} from "antd";
import Title from "antd/lib/typography/Title";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import Image from "../assets/img/login_image.png";
import Header from "../components/Header";

import { Link, withRouter } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import { withFirebase } from "../components/Firebase";
function Login(props) {
  const [windowWidth, setWindowWidth] = useState("");
  const [email, setEmail] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const key = "login_message";

  useEffect(() => {
    props.firebase.getRedirectResult().then((res) => {
      setLoading(false);

      const user = res.user;

      console.log(user);

      if (user !== null) {
        props.history.push("/");
      }
    });

    setWindowWidth(window.innerWidth);

    window.addEventListener("resize", updateWindowSize);
  }, [props.firebase, props.history]);

  console.log(rememberMe);

  const onEmailChange = (event) => {
    event.preventDefault();

    let val = event.target.value;

    setEmail(val);
  };

  const onPasswordChange = (event) => {
    event.preventDefault();

    let val = event.target.value;
    setPassword(val);
  };

  const rememberMeChanged = (event) => {
    setRememberMe(event.target.checked);
  };

  const updateWindowSize = () => {
    setWindowWidth(window.innerWidth);
  };

  const signInWithGoogle = () => {
    props.firebase.doSignInWithGoogle();
  };

  const signInWithFacebook = () => {
    props.firebase.doSignInWithFacebook();
  };

  const onSubmit = (event) => {
    event.preventDefault();

    message.loading({ content: "Loggin In....", key });

    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then((res) => {
        // this.props.history.push(ROUTES.HOME);

        console.log(JSON.stringify(res));

        message.success({ content: "Logged In!", key, duration: 2 });
      })
      .catch((error) => {
        console.log(error);

        message.error({ content: error.message, key, duration: 4 });

        //this.setState({ error });
      });
  };

  return (
    <>
      {loading ? (
        <Progress percent={50} status="active" />
      ) : (
        <>
          <Header />
          {windowWidth < 1024 ? (
            <div
              style={{
                paddingTop: "50px",
                paddingBottom: "50px",
              }}
            >
              <Row justify="center">
                <Col className="gutter-row">
                  <Row justify="center">
                    <Title style={{ fontSize: "25px" }}>
                      Sign in to your account
                    </Title>
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
                          style={{ width: "95vw", maxWidth: "415px" }}
                          size="large"
                          onChange={onEmailChange}
                        />
                      </Form.Item>
                      <Form.Item label="Password">
                        <Input
                          onChange={onPasswordChange}
                          size="large"
                          type="password"
                        />
                      </Form.Item>
                    </Form>
                  </Row>
                  <Row justify="center">
                    <Col style={{ marginTop: "1px" }}>
                      <Checkbox onChange={rememberMeChanged}>
                        Remember me
                      </Checkbox>
                    </Col>
                    <Col offset={5}>
                      <span style={{ fontWeight: "bold" }}>
                        Forgot Password?
                      </span>
                    </Col>
                  </Row>
                  <Row justify="center">
                    <Button
                      type="primary"
                      size="large"
                      onClick={onSubmit}
                      style={{
                        marginLeft: "0px",
                        marginTop: "50px",
                        paddingRight: "50px",
                        paddingLeft: "50px",
                        backgroundColor: "#1A588B",
                        paddingTop: "5px",
                        paddingBottom: "10px",
                      }}
                    >
                      SIGN IN
                    </Button>
                  </Row>
                  <Row justify="center">
                    <div style={{ marginTop: "42px", marginLeft: "0px" }}>
                      Don't have an account?{" "}
                      <span
                        style={{
                          fontWeight: "bold",
                          cursor: "pointer",
                          color: "#06A69E",
                        }}
                      >
                        <Link to={ROUTES.SIGN_UP}>SIGN UP</Link>
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
                paddingBottom: "100px",
              }}
            >
              <Row justify="space-between">
                <Col xs={12} xl={10}>
                  <Row justify="center">
                    <Title>Sign in to your account</Title>
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
                          style={{ width: "415px" }}
                          size="large"
                          onChange={onEmailChange}
                        />
                      </Form.Item>
                      <Form.Item label="Password">
                        <Input
                          size="large"
                          onChange={onPasswordChange}
                          type="password"
                        />
                      </Form.Item>
                    </Form>
                  </Row>
                  <Row justify="center">
                    <Col style={{ marginTop: "1px" }}>
                      <Checkbox onChange={rememberMeChanged}>
                        Remember me
                      </Checkbox>
                    </Col>
                    <Col offset={5}>
                      <span style={{ fontWeight: "bold" }}>
                        Forgot Password?
                      </span>
                    </Col>
                  </Row>
                  <Row justify="center">
                    <Button
                      type="primary"
                      size="large"
                      onClick={onSubmit}
                      style={{
                        marginLeft: "0px",
                        marginTop: "50px",
                        paddingRight: "50px",
                        paddingLeft: "50px",
                        backgroundColor: "#1A588B",
                        paddingTop: "5px",
                        paddingBottom: "10px",
                      }}
                    >
                      SIGN IN
                    </Button>
                  </Row>
                  <Row justify="center">
                    <div style={{ marginTop: "42px", marginLeft: "0px" }}>
                      Don't have an account?
                      <span
                        style={{
                          fontWeight: "bold",
                          cursor: "pointer",
                          color: "#06A69E",
                          marginLeft: "5px",
                        }}
                      >
                        <Link to={ROUTES.SIGN_UP}>SIGN UP</Link>
                      </span>
                    </div>
                  </Row>
                </Col>
                <Col xs={12} xl={10} style={{ maxHeight: "500px" }}>
                  <img
                    src={Image}
                    style={{
                      maxWidth: "80%",
                      height: "auto",
                    }}
                    alt="login_image"
                  />
                </Col>
                <Col xs={0} xl={2}></Col>
              </Row>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default withRouter(withFirebase(Login));
