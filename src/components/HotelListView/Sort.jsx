import React from 'react'
import { Col, Row, Typography } from 'antd';


import { CaretDownOutlined } from "@ant-design/icons";

function Sort() {
    return (
        <>
            <Row
                style={{
                    backgroundColor: "#FFFFFF",
                    padding: "20px",
                    width: "100%"
                }}
            >
                <Col xs={24} sm={4} style={{
                    backgroundColor: "#F0F2F5",
                    border: "#06A69E solid 1px",
                    width: "100%",
                    padding: "20px"
                }}>
                    <Typography
                        style={{
                            fontSize: 16,
                            color: "#06A69E",
                            fontWeight: "bold",
                            textAlign: "left"

                        }}
                    >
                        SORT
                    </Typography>
                </Col>
                <Col xs={24} sm={20}>
                    <Row>
                        <Col xs={24} sm={12} lg={6} style={{
                            width: "100%",
                            border: "#06A69E solid 1px",
                            padding: "20px"
                        }}>
                            <Typography
                                style={{
                                    fontSize: 16,
                                    color: "#06A69E",
                                    fontWeight: "bold",
                                    textAlign: "left"

                                }}
                            >
                                BEST MATCH
                    </Typography>

                        </Col>
                        <Col xs={24} sm={12} lg={6} style={{
                            width: "100%",
                            border: "#06A69E solid 1px",
                            padding: "20px"
                        }}>
                            <Typography
                                style={{
                                    fontSize: 16,
                                    color: "#06A69E",
                                    fontWeight: "bold",
                                    textAlign: "left"

                                }}
                            >
                                CHEAPEST PRICE
                        </Typography>
                        </Col>
                        <Col xs={24} sm={12} lg={6} style={{
                            width: "100%",
                            border: "#06A69E solid 1px",
                            padding: "20px"
                        }}>
                            <Row justify="space-between">
                                <Typography
                                    style={{
                                        fontSize: 16,
                                        color: "#06A69E",
                                        fontWeight: "bold",
                                        textAlign: "left"

                                    }}
                                >
                                    NEAREST TO
                                </Typography>
                                <CaretDownOutlined style={{ marginTop: "7px" }} />
                            </Row>
                        </Col>
                        <Col xs={24} sm={12} lg={6} style={{
                            width: "100%",
                            border: "#06A69E solid 1px",
                            padding: "20px"
                        }}>
                            <Row justify="space-between">
                                <Typography
                                    style={{
                                        fontSize: 16,
                                        color: "#06A69E",
                                        fontWeight: "bold",
                                        textAlign: "left"
                                    }}
                                >
                                    BEST VIEWS
                                </Typography>
                                <CaretDownOutlined style={{ marginTop: "7px" }} />
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default Sort
