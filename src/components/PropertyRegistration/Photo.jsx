import React, { useState, useEffect } from "react";
import { Typography, Col, Row, Upload, Select } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import Axios from "axios";

const { Dragger } = Upload;

function Photo(props) {
  const [files, setFiles] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    props.setData("images", imageUrls);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrls]);

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");

      const reader = new FileReader();
      reader.readAsDataURL(file);

      let data = new FormData();
      data.append("image", file, file.name);

      Axios.post("/api/uploadimage/", data)
        .then((res) => {
          let newImages = [];

          imageUrls.map((val) => newImages.push(val));

          newImages.push({ image: res.data.image });

          setImageUrls(newImages);
        })
        .catch((err) => console.log(err));

      reader.onload = () =>
        setFiles([
          ...files,
          {
            uid: file.uid,
            preview: reader.result,
          },
        ]);
    }, 0);
  };

  const handleChange = (info) => {
    let newFiles = [];

    info.fileList.forEach((element) => {
      files.map((val) => (val.uid === element.uid ? newFiles.push(val) : null));
    });

    setFiles(newFiles);
  };

  return (
    <>
      <Typography
        style={{ fontSize: "19px", fontWeight: "bold", color: "#3C3C3C" }}
      >
        Show them what they’re missing.
      </Typography>
      <Col
        span={24}
        style={{
          backgroundColor: "#FFFFFF",
          padding: "20px",
          marginTop: "10px",
        }}
      >
        <Row>
          <Typography
            style={{ fontSize: "16px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            Add Photos
          </Typography>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Typography
            style={{
              fontSize: "16px",
              color: "#827E7E",
              marginTop: "15px",
              textAlign: "left",
            }}
          >
            Pictures matter to travelers. Upload as many high-quality images as
            you have. You can add more later. Want some tips on how to upload
            quality photos that generate more bookings?Check this out.
          </Typography>
        </Row>
        <Row style={{ marginTop: "10px" }}>
          <Typography
            style={{
              fontSize: "13px",
              color: "#827E7E",
              marginTop: "15px",
              textAlign: "left",
            }}
          >
            * Tips: Min. 800x600 px — Best 2048x1536 px
          </Typography>
        </Row>
        <Row style={{ marginTop: "20px", textAlign: "start" }}>
          <Col xs={24} lg={12} style={{ padding: "10px", height: "100%" }}>
            <Dragger
              customRequest={dummyRequest}
              multiple={true}
              onChange={handleChange}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from
                uploading company data or other band files
              </p>
            </Dragger>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          {files.map((val) => (
            <Col style={{ padding: "10px" }} key={val.uid}>
              <Row style={{ width: "100%" }}>
                <img
                  src={val.preview}
                  style={{
                    width: "280px",
                    height: "180px",
                    objectFit: "cover",
                  }}
                  alt="upload"
                />
              </Row>

              <Row style={{ marginTop: "5px" }}>
                <Select
                  size="large"
                  style={{ width: "100%" }}
                  placeholder="Select Caption"
                ></Select>
              </Row>
            </Col>
          ))}
        </Row>
      </Col>
    </>
  );
}

export default Photo;
