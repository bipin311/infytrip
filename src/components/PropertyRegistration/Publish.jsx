import React from "react";
import { Typography, Row, Col, Checkbox } from "antd";
import TextArea from "antd/lib/input/TextArea";

function Publish(props) {
  const changeData = (e) => {
    let targetName = e.target.name;
    let targetValue = "";

    if (targetName === "is_accepted" || targetName === "is_refundable") {
      targetValue = e.target.checked;
    } else {
      targetValue = e.target.value;
    }

    props.setData(targetName, targetValue);
  };

  return (
    <>
      <Typography
        style={{
          fontSize: "19px",
          fontWeight: "bold",
          color: "#3C3C3C",
          textAlign: "left",
        }}
      >
        Publish Your Property
      </Typography>
      <Col
        span={24}
        style={{
          backgroundColor: "#FFFFFF",
          padding: "20px",
          marginTop: "15px",
        }}
      >
        <Row>
          <Typography
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#3C3C3C",
              textAlign: "left",
            }}
          >
            Sign your contract and lets get Booking
          </Typography>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#3C3C3C",
              textAlign: "left",
            }}
          >
            Know your local laws, regulations and taxes.
          </Typography>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <TextArea
            rows={4}
            size="large"
            name="local_law"
            onChange={changeData}
          />
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#3C3C3C",
              textAlign: "left",
            }}
          >
            Accept the terms and conditions, and you are good to go.
          </Typography>
        </Row>
        <Row
          style={{
            padding: "15px",
            border: "#D9D9D9 1px solid",
            width: "100%",
            marginTop: "15px",
            textAlign: "left",
          }}
        >
          <Checkbox name="is_accepted" onChange={changeData}>
            I accept a good's Terms and conditions and certify that I will
            follow all applicable laws and regulations
          </Checkbox>
        </Row>

        <Row style={{ marginTop: "15px" }}>
          <Typography
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#3C3C3C",
              textAlign: "left",
            }}
          >
            Default Cancellation Policy
          </Typography>
        </Row>
        <Row justify="start" style={{ marginTop: "15px" }}>
          <Typography
            style={{ fontSize: "15px", color: "#3C3C3C", textAlign: "left" }}
          >
            Let us know which policy you use most often. This will be your
            default while you’re getting your property setup. You’ll be able to
            add new policies or modify the policies for specific rooms or units
            later on.
          </Typography>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Checkbox name="is_refundable" onChange={changeData}>
            Booking are non-refundable
          </Checkbox>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#3C3C3C",
              textAlign: "left",
            }}
          >
            Taxes and Fees
          </Typography>
        </Row>
        <Row justify="start" style={{ marginTop: "15px" }}>
          <Typography
            style={{ fontSize: "15px", color: "#3C3C3C", textAlign: "left" }}
          >
            10% Goods and Services Tax (GST) included in the room rate
          </Typography>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Typography
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#3C3C3C",
              textAlign: "left",
            }}
          >
            Your Contract
          </Typography>
        </Row>
        <Row justify="start" style={{ marginTop: "15px" }}>
          <Typography
            style={{ fontSize: "15px", color: "#3C3C3C", textAlign: "left" }}
          >
            15 % Compensation Percentage You can only pay us the compensation
            percentage of your confirmed bookings. We don’t charge any annual
            fees.
          </Typography>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Typography
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#3C3C3C",
              textAlign: "left",
            }}
          >
            Agreement Type
          </Typography>
        </Row>
        <Row justify="start" style={{ marginTop: "15px" }}>
          <Typography
            style={{ fontSize: "15px", color: "#3C3C3C", textAlign: "left" }}
          >
            The payment information will be determined by infyTrip based on the
            preference of the guest and the types of transactions. You are
            responsible for collections of payment from guests for property
            booking.
          </Typography>
        </Row>
        <Row style={{ marginTop: "15px" }}>
          <Typography
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#3C3C3C",
              textAlign: "left",
            }}
          >
            Termination
          </Typography>
        </Row>
        <Row justify="start" style={{ marginTop: "15px" }}>
          <Typography
            style={{ fontSize: "15px", color: "#3C3C3C", textAlign: "left" }}
          >
            Either you or infyTrip may terminate this Agreement for any reason
            by providing at least 14 days prior written notice to other. You can
            infyTrip may also terminate this agreement as a general terms and
            conditions.
          </Typography>
        </Row>
      </Col>
    </>
  );
}

export default Publish;
