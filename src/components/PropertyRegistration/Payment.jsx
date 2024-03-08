import React, { useState, useEffect } from "react";
import { Typography, Row, Col, Radio, Input, Divider } from "antd";

import credit from "../../assets/img/credit.png";
import debit from "../../assets/img/debit.png";
import bank from "../../assets/img/bank.png";
import cash from "../../assets/img/cash.png";
import Axios from "axios";

function Payment(props) {
  const changed = (e) => {
    props.setData(e.target.name, e.target.value);
  };

  const [card, setCard] = useState({
    method: "card",
    number: "",
    name: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    bank_name: "",
    address: "",
    iban_number: "",
    account_type: "",
    bsb: "",
    swift_code: "",
  });

  const [paymentTypes, setPaymentTypes] = useState([]);

  useEffect(() => {
    Axios.get("https://api.stg.infytrip.com.au/membershipplan/")
      .then((res) => {
        let results = res.data.results;

        results.map((val) => (val.selected = false));
        results[0].selected = true;

        setPaymentTypes(results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const setSelected = (id) => {
    let newList = [];

    console.log(id);

    paymentTypes.forEach((element) => {
      let newElement = element;

      if (element.id === id) {
        newElement.selected = true;

        props.setData("membership_plan", id);
      } else {
        newElement.selected = false;
      }

      newList.push(newElement);
    });

    console.log(newList);

    setPaymentTypes(newList);
  };

  const cardValueChange = (e) => {
    console.log("called");

    let targetName = e.target.name;
    let targetValue = e.target.value;

    setCard({ ...card, [targetName]: targetValue });

    let newObj = card;
    newObj = { ...newObj, [targetName]: targetValue };

    newObj = {
      ...newObj,
      expiry: newObj.expiryMonth + "/" + newObj.expiryYear,
    };

    props.setData("payment_methods", [newObj]);
  };

  return (
    <>
      <Typography
        style={{ fontSize: "19px", fontWeight: "bold", color: "#3C3C3C" }}
      >
        Payment methods
      </Typography>
      <Col
        span={24}
        style={{
          backgroundColor: "#FFFFFF",
          padding: "20px",
          marginTop: "10px",
        }}
      >
        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#3C3C3C",
              textAlign: "left",
            }}
          >
            Your Contract - Membership Plan
          </Typography>
        </Row>

        <Row style={{ marginTop: "15px" }}>
          <Typography
            style={{ fontSize: "15px", color: "#3C3C3C", textAlign: "left" }}
          >
            Do you want to join membership plan?
          </Typography>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Radio.Group
            name="join_membership"
            defaultValue={true}
            onChange={changed}
          >
            <Radio
              value={true}
              style={{ color: "#3C3C3C", marginRight: "30px" }}
            >
              Yes
            </Radio>
            <Radio
              value={false}
              style={{ color: "#3C3C3C", marginRight: "30px" }}
            >
              No
            </Radio>
          </Radio.Group>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{ fontSize: "16px", color: "#827E7E", textAlign: "left" }}
          >
            Various Schemes available for our memberships. We provide different
            memberships schemes. You will be appear in search engine and list
            first.
          </Typography>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          {paymentTypes.map((val) =>
            val.selected ? (
              <Col style={{ padding: "5px" }} key={val.id}>
                <Col
                  onClick={() => setSelected(val.id)}
                  style={{
                    cursor: "pointer",
                    width: "230px",
                    height: "230px",
                    backgroundColor: "#06A69E",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                >
                  <Row justify="center" style={{ marginTop: "20px" }}>
                    <Typography
                      style={{
                        fontSize: "50px",
                        color: "#FFFFFF",
                        fontWeight: "bold",
                      }}
                    >
                      ${val.price}
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "17px",
                        color: "#FFFFFF",
                        marginTop: "26px",
                        marginLeft: "20px",
                      }}
                    >
                      / {val.valid_for}
                    </Typography>
                  </Row>
                  <Row justify="center" style={{ marginTop: "5px" }}>
                    <Typography
                      style={{
                        fontSize: "20px",
                        color: "#FFFFFF",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {val.name}
                    </Typography>
                  </Row>
                  <Row justify="center" style={{ marginTop: "5px" }}>
                    <Typography
                      style={{
                        fontSize: "17px",
                        color: "#FFFFFF",
                        textAlign: "center",
                      }}
                    >
                      {val.description}
                    </Typography>
                  </Row>
                </Col>
              </Col>
            ) : (
              <Col style={{ padding: "5px" }} key={val.id}>
                <Col
                  onClick={() => setSelected(val.id)}
                  style={{
                    cursor: "pointer",
                    width: "230px",
                    height: "230px",
                    border: "1.5px solid #D4DCE2",
                    backgroundColor: "#F7FCFF",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                >
                  <Row justify="center" style={{ marginTop: "20px" }}>
                    <Typography
                      style={{
                        fontSize: "50px",
                        color: "#06A69E",
                        fontWeight: "bold",
                      }}
                    >
                      ${val.price}
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "17px",
                        color: "#06A69E",
                        marginTop: "26px",
                        marginLeft: "20px",
                      }}
                    >
                      / {val.valid_for}
                    </Typography>
                  </Row>
                  <Row justify="center" style={{ marginTop: "5px" }}>
                    <Typography
                      style={{
                        fontSize: "20px",
                        color: "#06A69E",
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {val.name}
                    </Typography>
                  </Row>
                  <Row justify="center" style={{ marginTop: "5px" }}>
                    <Typography
                      style={{
                        fontSize: "17px",
                        color: "#06A69E",
                        textAlign: "center",
                      }}
                    >
                      {val.description}
                    </Typography>
                  </Row>
                </Col>
              </Col>
            )
          )}
        </Row>
        <Divider
          style={{
            backgroundColor: "#D4DCE2",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        />
        <Row>
          <Typography
            style={{
              fontSize: "17px",
              fontWeight: "bold",
              color: "#3C3C3C",
              textAlign: "left",
            }}
          >
            Which Payment methods do you accept at your property ?
          </Typography>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col
            style={{
              border: "#06A69E 1.5px solid",
              height: "40px",
              width: "150px",
              borderRadius: "3px",
              marginTop: "10px",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          >
            <Row justify="center" style={{ marginTop: "9px" }}>
              <img
                src={credit}
                style={{
                  width: "27px",
                  height: "20px",
                }}
                alt="credit card"
              />
              <Typography
                style={{
                  color: "#06A69E",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginLeft: "5px",
                }}
              >
                Credit Card
              </Typography>
            </Row>
          </Col>
          <Col
            style={{
              border: "#06A69E 1.5px solid",
              marginTop: "10px",
              height: "40px",
              width: "150px",
              borderRadius: "3px",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          >
            <Row justify="center" style={{ marginTop: "9px" }}>
              <img
                src={debit}
                style={{
                  width: "27px",
                  height: "20px",
                }}
                alt="credit card"
              />
              <Typography
                style={{
                  color: "#06A69E",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginLeft: "5px",
                }}
              >
                Debit Card
              </Typography>
            </Row>
          </Col>
          <Col
            style={{
              border: "#06A69E 1.5px solid",
              height: "40px",
              width: "150px",
              borderRadius: "3px",
              marginTop: "10px",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          >
            <Row justify="center" style={{ marginTop: "9px" }}>
              <img
                src={cash}
                style={{
                  width: "27px",
                  height: "20px",
                }}
                alt="credit card"
              />
              <Typography
                style={{
                  color: "#06A69E",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginLeft: "5px",
                }}
              >
                Cash
              </Typography>
            </Row>
          </Col>
          <Col
            style={{
              border: "#06A69E 1.5px solid",
              height: "40px",
              width: "150px",
              borderRadius: "3px",
              marginTop: "10px",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          >
            <Row justify="center" style={{ marginTop: "9px" }}>
              <img
                src={bank}
                style={{
                  width: "27px",
                  height: "20px",
                }}
                alt="credit card"
              />
              <Typography
                style={{
                  color: "#06A69E",
                  fontSize: "12px",
                  fontWeight: 600,
                  marginLeft: "5px",
                }}
              >
                Bank deposit
              </Typography>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{ fontSize: "17px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            Do you require any deposits?
          </Typography>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Radio.Group
            name="deposit_required"
            defaultValue={true}
            onChange={changed}
          >
            <Radio
              value={true}
              style={{ color: "#3C3C3C", marginRight: "30px" }}
            >
              Yes
            </Radio>
            <Radio
              value={false}
              style={{ color: "#3C3C3C", marginRight: "30px" }}
            >
              No
            </Radio>
          </Radio.Group>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{ fontSize: "17px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            Deposit Amount
          </Typography>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Col span={24} style={{ padding: "5px" }}>
            <Row justify="start">
              <Input
                size="large"
                name="deposit_amount"
                onChange={changed}
                style={{ width: "100%", maxWidth: "200px" }}
              ></Input>
            </Row>
          </Col>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{ fontSize: "17px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            Debit/Master Card Payment
          </Typography>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Col style={{ padding: "5px" }}>
            <Row>
              <Typography
                style={{
                  fontSize: "16px",
                  color: "#827E7E",
                  marginTop: "15px",
                  marginBottom: "10px",
                }}
              >
                Card Name
              </Typography>
            </Row>
            <Row>
              <Input
                name="name"
                size="large"
                style={{ width: "300px" }}
                onChange={cardValueChange}
              />
            </Row>
          </Col>
          <Col style={{ padding: "5px" }}>
            <Row>
              <Typography
                style={{
                  fontSize: "16px",
                  color: "#827E7E",
                  marginTop: "15px",
                  marginBottom: "10px",
                }}
              >
                Card Number
              </Typography>
            </Row>
            <Row>
              <Input
                name="number"
                size="large"
                style={{ width: "300px" }}
                onChange={cardValueChange}
              />
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Col style={{ padding: "5px" }}>
            <Row>
              <Typography
                style={{
                  fontSize: "16px",
                  color: "#827E7E",
                  marginTop: "15px",
                  marginBottom: "10px",
                }}
              >
                Expire Month
              </Typography>
            </Row>
            <Row>
              <Input
                name="expiryMonth"
                onChange={cardValueChange}
                size="large"
                style={{ width: "198px" }}
              />
            </Row>
          </Col>
          <Col style={{ padding: "5px" }}>
            <Row>
              <Typography
                style={{
                  fontSize: "16px",
                  color: "#827E7E",
                  marginTop: "15px",
                  marginBottom: "10px",
                }}
              >
                Expire year
              </Typography>
            </Row>
            <Row>
              <Input
                name="expiryYear"
                size="large"
                style={{ width: "198px" }}
                onChange={cardValueChange}
              />
            </Row>
          </Col>
          <Col style={{ padding: "5px" }}>
            <Row>
              <Typography
                style={{
                  fontSize: "16px",
                  color: "#827E7E",
                  marginTop: "15px",
                  marginBottom: "10px",
                }}
              >
                CVC
              </Typography>
            </Row>
            <Row>
              <Input
                name="cvv"
                size="large"
                style={{ width: "198px" }}
                onChange={cardValueChange}
              />
            </Row>
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default Payment;
