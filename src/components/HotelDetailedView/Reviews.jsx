import React from "react";
import {
  Row,
  Col,
  Progress,
  Typography,
  Divider,
  Tooltip,
  Comment,
  Card,
} from "antd";

export default function Reviews() {
  return (
    <div>
      <Row justify="space-between">
        <Col xs={24} sm={12} lg={8} style={{ textAlign: "start" }}>
          <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
            LOCATION
          </Typography>
          <div style={{ width: "100%" }}>
            <Progress
              percent={50}
              status="active"
              format={() => 5}
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
            />
          </div>
        </Col>
        <Col xs={24} sm={12} lg={8} style={{ textAlign: "start" }}>
          <div style={{ width: "100%" }}>
            <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
              PERSONNEL
            </Typography>
            <Progress
              percent={70}
              status="active"
              format={() => 7}
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
            />
          </div>
        </Col>
        <Col xs={24} sm={12} lg={8} style={{ textAlign: "start" }}>
          <div style={{ width: "100%" }}>
            <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
              CLEANLINESS
            </Typography>
            <Progress
              percent={90}
              status="active"
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
              format={() => 9}
            />
          </div>
        </Col>
        <Col xs={24} sm={12} lg={8} style={{ textAlign: "start" }}>
          <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
            COMFORT
          </Typography>
          <div style={{ width: "100%" }}>
            <Progress
              percent={50}
              status="active"
              format={() => 5}
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
            />
          </div>
        </Col>
        <Col xs={24} sm={12} lg={8} style={{ textAlign: "start" }}>
          <div style={{ width: "100%" }}>
            <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
              GOOD OFFER
            </Typography>
            <Progress
              percent={70}
              status="active"
              format={() => 7}
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
            />
          </div>
        </Col>
        <Col xs={24} sm={12} lg={8} style={{ textAlign: "start" }}>
          <div style={{ width: "100%" }}>
            <Typography style={{ fontSize: 16, fontWeight: "bold" }}>
              SERVICE
            </Typography>
            <Progress
              percent={90}
              status="active"
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
              format={() => 9}
            />
          </div>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Card style={{ width: "100%" }}>
          <Comment
            author={"Han Solo"}
            content={
              <p style={{ textAlign: "start" }}>
                Overall pleasant stay. Very comfortable room with nice view.
              </p>
            }
            datetime={
              <Tooltip title={"2020-10-10 5:45 PM"}>
                <span>1 week ago</span>
              </Tooltip>
            }
          />
        </Card>
      </Row>
    </div>
  );
}
