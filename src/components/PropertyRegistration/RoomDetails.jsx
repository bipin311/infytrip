import React, { useState, useEffect } from "react";
import {
  Typography,
  Col,
  Row,
  Input,
  Select,
  Divider,
  Upload,
  Button,
  Collapse,
  List,
  Tooltip,
} from "antd";

import {
  CloudUploadOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
  CloseOutlined,
  NumberOutlined,
  DollarOutlined,
  LayoutOutlined,
} from "@ant-design/icons";
import Axios from "axios";

const { Dragger } = Upload;
const { Option } = Select;
const { Panel } = Collapse;

function RoomDetails(props) {
  const { setRooms } = props;

  const [roomCategories, setRoomCategories] = useState([]);
  const [commonSpaces, setCommonSpaces] = useState([]);
  const [commonSpacesList, setCommonSpacesList] = useState([
    { id: 0, type_of_commonspace: "Single bed", no_of_common_space: 2 },
  ]);
  const [bedrooms, setBedRooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [accomodates, setAccomodates] = useState(1);
  const [roomNumber, setRoomNumber] = useState("");
  const [price, setPrice] = useState("");
  const [roomSize, setRoomSize] = useState("");
  const [roomType, setRoomType] = useState("Single");
  const [roomDetails, setRoomDetails] = useState({});
  const [roomCount, setRoomCount] = useState([]);
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => setFile(reader.result);

      let data = new FormData();
      data.append("image", file, file.name);

      Axios.post("/api/uploadimage/", data)
        .then((res) => setImageUrl(res.data.image))
        .catch((err) => console.log(err));
    }, 0);
  };

  useEffect(() => {
    let obj = {
      common_spaces: commonSpacesList,
      category: roomType,
      room_no: roomNumber,
      price: price,
      size: roomSize,
      accomodates: accomodates,
      bathrooms: bathrooms,
      bedrooms: bedrooms,
      room_images: [{ image: imageUrl }],
    };

    setRoomDetails(obj);
  }, [
    commonSpacesList,
    roomType,
    roomNumber,
    price,
    roomSize,
    accomodates,
    bathrooms,
    bedrooms,
    imageUrl,
  ]);

  useEffect(() => {
    let obj = roomDetails;

    if (roomCount.length === 0) {
      let roomData = [];
      roomData.push(obj);

      setRooms(roomData);
    } else {
      let arr = roomCount;
      arr[roomCount.length - 1] = obj;

      setRooms(arr);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomDetails, roomCount]);

  const addNewRoom = () => {
    let newRooms = [];

    roomCount.map((val, i) => newRooms.push({ ...val, id: i }));

    newRooms.push({ ...roomDetails, id: roomCount });

    console.log(newRooms);

    setRoomCount(newRooms);
  };

  const deleteFromRoomCount = (id) => {
    let newRoomCount = [];

    roomCount.map((val) => (val.id === id ? null : newRoomCount.push(val)));

    setRoomCount(newRoomCount);
  };

  const commonSpaceChange = (e, id) => {
    console.log(e);
    console.log(id);

    let newList = [];

    commonSpacesList.forEach((element) => {
      let newElement = element;

      if (newElement.id === id) {
        newElement.type_of_commonspace = e;
      }

      newList.push(newElement);
    });

    setCommonSpacesList(newList);
  };

  const removeCommonSpace = (id) => {
    let newList = [];

    commonSpacesList.map((val) => (val.id === id ? null : newList.push(val)));

    setCommonSpacesList(newList);
  };

  const addCommonSpaceCount = (id) => {
    let newList = [];

    commonSpacesList.forEach((element) => {
      let newElement = element;

      if (newElement.id === id) {
        newElement.no_of_common_space += 1;
      }

      newList.push(newElement);
    });

    setCommonSpacesList(newList);
  };

  const delCommonSpaceCount = (id) => {
    let newList = [];

    commonSpacesList.forEach((element) => {
      let newElement = element;

      if (newElement.id === id) {
        if (newElement.no_of_common_space > 0)
          newElement.no_of_common_space -= 1;
      }

      newList.push(newElement);
    });

    setCommonSpacesList(newList);
  };

  const addCommonSpace = () => {
    let newList = [];

    commonSpacesList.map((val) => newList.push(val));

    newList.push({
      id: commonSpacesList.length,
      no_of_common_space: 0,
      type_of_commonspace: "Single bed",
    });

    setCommonSpacesList(newList);
  };

  useEffect(() => {
    Axios.get("/roomcategories/")
      .then((res) => setRoomCategories(res.data.categories))
      .catch((err) => console.log(err));

    Axios.get("/commonspacestypes/")
      .then((res) => {
        let newResults = [];

        res.data.commonspacetype.forEach((element, i) => {
          let newElement = { id: i + 1, name: element };

          newResults.push(newElement);
        });

        setCommonSpaces(newResults);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Typography
        style={{ fontSize: "19px", fontWeight: "bold", color: "#3C3C3C" }}
      >
        Room/Details
      </Typography>

      <Col
        span={24}
        style={{
          backgroundColor: "#FFFFFF",
          marginTop: "10px",
          padding: "10px",
        }}
      >
        <Collapse>
          <Panel header="Select Room" key={1}>
            <List bordered>
              {roomCount.map((val, i) => (
                <List.Item key={i}>
                  <Row justify="space-between" style={{ width: "100%" }}>
                    <Col xs={7}>
                      <NumberOutlined style={{ fontSize: 20 }} />
                      <Typography.Text
                        style={{ marginLeft: "5px", fontSize: 20 }}
                      >
                        <Tooltip title="Room Number">{val.room_no}</Tooltip>
                      </Typography.Text>
                    </Col>
                    <Col xs={7}>
                      <DollarOutlined style={{ fontSize: 20 }} />
                      <Typography.Text
                        style={{ marginLeft: "5px", fontSize: 20 }}
                      >
                        <Tooltip title="Room Price">{val.price}</Tooltip>
                      </Typography.Text>
                    </Col>
                    <Col xs={7}>
                      <LayoutOutlined style={{ fontSize: 20 }} />
                      <Typography.Text
                        style={{ marginLeft: "5px", fontSize: 20 }}
                      >
                        <Tooltip title="Room Size">{val.size}</Tooltip>
                      </Typography.Text>
                    </Col>
                    <Col xs={3}>
                      <Tooltip title="Remove this room from list">
                        <Button
                          danger
                          onClick={() => deleteFromRoomCount(val.id)}
                        >
                          Delete
                        </Button>
                      </Tooltip>
                    </Col>
                  </Row>
                </List.Item>
              ))}
            </List>
          </Panel>
        </Collapse>
      </Col>

      <Col
        span={24}
        style={{
          backgroundColor: "#FFFFFF",
          padding: "20px",
          marginTop: "25px",
        }}
      >
        <Row style={{ marginTop: "25px" }}>
          <Typography
            style={{ fontSize: "18px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            Add Rooms
          </Typography>
        </Row>
        <Row style={{ maxWidth: "1000px" }}>
          <Col xs={24} md={10} style={{ padding: "10px" }}>
            <Row>
              <Typography
                style={{
                  fontSize: "16px",
                  color: "#827E7E",
                  marginTop: "5px",
                  marginBottom: "10px",
                }}
              >
                Select Room Type
              </Typography>
            </Row>
            <Row>
              <Select
                name="roomType"
                size="large"
                style={{ width: "100%", maxWidth: "400px" }}
                value={roomType}
                onChange={(e) => setRoomType(e)}
              >
                {roomCategories.map((val, i) => (
                  <Option key={i} value={val}>
                    {val}
                  </Option>
                ))}
              </Select>
            </Row>
          </Col>
          <Col xs={24} sm={12} md={6} style={{ padding: "10px" }}>
            <Row>
              <Dragger
                style={{
                  height: "150px",
                  width: "100%",
                  maxWidth: "200px",
                }}
                multiple={false}
                customRequest={dummyRequest}
                showUploadList={false}
              >
                <p className="ant-upload-drag-icon">
                  <CloudUploadOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
              </Dragger>
            </Row>
          </Col>

          <Col xs={24} sm={12} md={6} style={{ padding: "10px" }}>
            <Row>
              <Col
                style={{
                  height: "150px",
                  width: "100%",
                  maxWidth: "200px",
                  border: "#D9D9D9 1px solid",
                }}
              >
                {file === null ? (
                  <Typography
                    style={{
                      fontSize: "12px",
                      color: "#827E7E",
                      marginTop: "60px",
                      marginLeft: "10px",
                      marginRight: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    Preview Image
                  </Typography>
                ) : (
                  <img src={file} alt="preview" height={150} />
                )}
              </Col>
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
                Room Number
              </Typography>
            </Row>
            <Row>
              <Input
                name="roomNumber"
                size="large"
                style={{ width: "198px" }}
                value={roomNumber}
                onChange={(e) => setRoomNumber(e.currentTarget.value)}
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
                Price
              </Typography>
            </Row>
            <Row>
              <Input
                name="price"
                size="large"
                style={{ width: "198px" }}
                value={price}
                onChange={(e) => setPrice(e.currentTarget.value)}
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
                Room Size
              </Typography>
            </Row>
            <Row>
              <Input
                name="roomSize"
                size="large"
                value={roomSize}
                style={{ width: "198px" }}
                onChange={(e) => setRoomSize(e.currentTarget.value)}
              />
            </Row>
          </Col>
        </Row>

        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{ fontSize: "18px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            Accommodates
          </Typography>
        </Row>
        <Row>
          <Typography
            style={{
              fontSize: "16px",
              color: "#827E7E",
              marginTop: "5px",
              textAlign: "left",
            }}
          >
            The maximum number of people who can sleep comfortably given the
            total bed space and sofas.
          </Typography>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Col
            style={{
              border: "#D9D9D9 1px solid",
              height: "40px",
              marginTop: "5px",
              width: "230px",
            }}
          >
            <Row justify="space-between" style={{ marginTop: "10px" }}>
              <Col style={{ paddingRight: "20px", paddingLeft: "20px" }}>
                <PlusCircleOutlined
                  style={{ fontSize: 20, cursor: "pointer" }}
                  onClick={() => setAccomodates(accomodates + 1)}
                />
              </Col>
              <Col style={{ paddingRight: "20px", paddingLeft: "20px" }}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    marginTop: "-4px",
                  }}
                >
                  {accomodates}
                </Typography>
              </Col>
              <Col
                style={{
                  paddingRight: "20px",
                  paddingLeft: "20px",
                  cursor: "pointer",
                }}
              >
                <MinusCircleOutlined
                  style={{ fontSize: 20 }}
                  onClick={() =>
                    accomodates > 0 ? setAccomodates(accomodates - 1) : null
                  }
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{ fontSize: "18px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            Bathrooms
          </Typography>
        </Row>
        <Row>
          <Typography
            style={{
              fontSize: "16px",
              color: "#827E7E",
              marginTop: "5px",
              textAlign: "left",
            }}
          >
            Count only bathrooms on your property, not shared or common
            bathrooms in your building or complex.
          </Typography>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Col
            style={{
              border: "#D9D9D9 1px solid",
              height: "40px",
              marginTop: "5px",
              width: "230px",
            }}
          >
            <Row justify="space-between" style={{ marginTop: "10px" }}>
              <Col style={{ paddingRight: "20px", paddingLeft: "20px" }}>
                <PlusCircleOutlined
                  style={{ fontSize: 20, cursor: "pointer" }}
                  onClick={() => setBathrooms(bathrooms + 1)}
                />
              </Col>
              <Col style={{ paddingRight: "20px", paddingLeft: "20px" }}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    marginTop: "-4px",
                  }}
                >
                  {bathrooms}
                </Typography>
              </Col>
              <Col style={{ paddingRight: "20px", paddingLeft: "20px" }}>
                <MinusCircleOutlined
                  style={{ fontSize: 20 }}
                  onClick={() =>
                    bathrooms > 0 ? setBathrooms(bathrooms - 1) : null
                  }
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{ fontSize: "18px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            Bedrooms
          </Typography>
        </Row>
        <Row>
          <Typography
            style={{
              fontSize: "16px",
              color: "#827E7E",
              marginTop: "5px",
              textAlign: "left",
            }}
          >
            If your property is a loft or studio, the number of bedrooms is
            zero.
          </Typography>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Col
            style={{
              border: "#D9D9D9 1px solid",
              height: "40px",
              marginTop: "5px",
              width: "230px",
            }}
          >
            <Row justify="space-between" style={{ marginTop: "10px" }}>
              <Col style={{ paddingRight: "20px", paddingLeft: "20px" }}>
                <PlusCircleOutlined
                  style={{ fontSize: 20, cursor: "pointer" }}
                  onClick={() => setBedRooms(bedrooms + 1)}
                />
              </Col>
              <Col style={{ paddingRight: "20px", paddingLeft: "20px" }}>
                <Typography
                  style={{
                    fontWeight: "bold",
                    fontSize: 16,
                    marginTop: "-4px",
                  }}
                >
                  {bedrooms}
                </Typography>
              </Col>
              <Col style={{ paddingRight: "20px", paddingLeft: "20px" }}>
                <MinusCircleOutlined
                  style={{ fontSize: 20 }}
                  onClick={() =>
                    bedrooms > 0 ? setBedRooms(bedrooms - 1) : null
                  }
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Divider
          style={{
            backgroundColor: "#D4DCE2",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        />
        <Row style={{ marginTop: "20px" }}>
          <Typography
            style={{ fontSize: "18px", fontWeight: "bold", color: "#3C3C3C" }}
          >
            Common space
          </Typography>
        </Row>
        <Row>
          <Typography
            style={{
              fontSize: "16px",
              color: "#827E7E",
              marginTop: "5px",
              textAlign: "left",
            }}
          >
            Are there any sleeping surfaces available in common spaces?
          </Typography>
        </Row>

        {commonSpacesList.map((val, i) => (
          <Row style={{ marginTop: "5px" }} key={i}>
            <Col>
              <Col
                style={{
                  border: "#D9D9D9 1px solid",
                  height: "40px",
                  marginTop: "10px",
                  width: "230px",
                  marginRight: "10px",
                }}
              >
                <Row justify="space-between" style={{ marginTop: "10px" }}>
                  <Col style={{ paddingRight: "20px", paddingLeft: "20px" }}>
                    <PlusCircleOutlined
                      style={{ fontSize: 20, cursor: "pointer" }}
                      onClick={() => addCommonSpaceCount(val.id)}
                    />
                  </Col>
                  <Col style={{ paddingRight: "20px", paddingLeft: "20px" }}>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        fontSize: 16,
                        marginTop: "-4px",
                      }}
                    >
                      {val.no_of_common_space}
                    </Typography>
                  </Col>
                  <Col style={{ paddingRight: "20px", paddingLeft: "20px" }}>
                    <MinusCircleOutlined
                      style={{ fontSize: 20, cursor: "pointer" }}
                      onClick={() => delCommonSpaceCount(val.id)}
                    />
                  </Col>
                </Row>
              </Col>
            </Col>
            <Col xs={24} sm={12}>
              <Row>
                <Col style={{ marginTop: "10px" }}>
                  <Row>
                    <Select
                      size="large"
                      style={{
                        width: "100%",
                        minWidth: "230px",
                        marginRight: "10px",
                      }}
                      value={val.type_of_commonspace}
                      onChange={(e) => commonSpaceChange(e, val.id)}
                    >
                      {commonSpaces.map((val, i) => (
                        <Option key={i} value={val.name}>
                          {val.name}
                        </Option>
                      ))}
                    </Select>
                  </Row>
                </Col>
                <Col>
                  <CloseOutlined
                    style={{
                      marginTop: "25px",
                      color: "#FF0000",
                      cursor: "pointer",
                    }}
                    onClick={() => removeCommonSpace(val.id)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        ))}

        <Row onClick={addCommonSpace}>
          <Typography
            style={{
              fontSize: "14px",
              color: "#827E7E",
              marginTop: "15px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            ADD ANOTHER BED TYPE
          </Typography>
        </Row>
      </Col>
      <Button
        size="large"
        style={{
          border: "solid 1px #06A69E",
          borderRadius: "2px",
          color: "#06A69E",
          backgroundColor: "#FFFFFF",
          fontWeight: "bold",
          marginTop: "20px",
          paddingBottom: "13px",
        }}
        onClick={addNewRoom}
      >
        ADD ANOTHER ROOM DETAILS
      </Button>
    </>
  );
}

export default RoomDetails;
