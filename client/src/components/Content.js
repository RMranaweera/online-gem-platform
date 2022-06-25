import React, { useState, useEffect } from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { Link } from "react-router-dom";
import AddGem from "./AddGem";
import { Drawer } from "antd";
import axios from "axios";
import { Col, Row, Statistic } from "antd";
import NavBar from "./Navbar/Nav";
<<<<<<< HEAD
=======

>>>>>>> 83446743e42b82faee11d7561ed6c32e3655b0c7

const { Countdown } = Statistic;
function Content() {
  const [gemData, SetGemData] = useState([]);
  const [bid, setBid] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3000/gems`).then((res) => {
      SetGemData(...gemData, res.data.gems);
    });
    //api
  }, []);
  console.log(gemData);
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(0);
  const [visibleDoc, setVisibleDoc] = useState(false);
  const [file, setFile] = useState("");
  const onSearch = (value) => console.log(value);
  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
  };
  const onFinish = () => {
    console.log("finished!");
  };
  return (
    <div>
<<<<<<< HEAD
      <NavBar />
=======
      <NavBar/>
>>>>>>> 83446743e42b82faee11d7561ed6c32e3655b0c7
      <section class="search">
        {" "}
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{
              width: 600,
            }}
          />{" "}
        </Space>
      </section>
      <div>
        <button
          className="btn btn-info"
          onClick={(e) => {
            e.preventDefault();
            setVisible(true);
          }}
        >
          {" "}
          <span>Add Gem</span>
        </button>
      </div>
      <Drawer
        title="Add Gem"
        placement="right"
        closable={false}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      >
        <AddGem />
      </Drawer>

      <Drawer
        title="Add Document"
        placement="right"
        closable={false}
        visible={visibleDoc}
        onClose={() => {
          setVisibleDoc(false);
        }}
      >
        <lable>Add Document</lable>
        <div className="fileupload mt-3">
          <img
            src="/image/upload-file.png"
            alt=""
            width="130px"
            height="100px"
          />
          <div className="mt-3">
            {" "}
            <input
              type="file"
              placeholder="Upload Document"
              filename="file"
              onChange={onChangeFile}
            />
          </div>
          <div>
            <button
              className="btn btn-info "
              onClick={(e) => {
                e.preventDefault();
                const formData = new FormData();

                formData.append("document", file);

                formData.append("id", id);

                axios
                  .post("http://localhost:3000/documents", formData)

                  .then((res) => {
                    console.log(res.data);
                  });
                window.location = "/home";
              }}
            >
              {" "}
              <span>save</span>
            </button>
          </div>
        </div>
      </Drawer>

      <section class="bg-light mt-5" id="quickgem">
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 col-md-12 mb-4">
              <h3 class="text-center mt-4 text-secondary">
                Hurry Up ! Bid Soon ....!
              </h3>
            </div>

            {gemData?.map((gem, index) => {
              const deadline =
                new Date(gem.endTime).getTime() -
                (10 * 60 * 60 * 24 * 2 + 1000 * 30);

              return (
                <div class="col-md-4 mt-3">
                  <div class="testimonial mb-5">
                    <div class="avatar mx-auto">
                      <img
                        src={gem.imagePath}
                        class="rounded-circle z-depth-1 img-fluid"
                        width="400px"
                        height="300px"
                      />
                    </div>
                    <h4 class="font-weight-bold dark-grey-text mt-4">
                      {gem.title}
                    </h4>
                    <h6 class="font-weight-bold blue-text my-3">
                      {gem.colour}
                    </h6>
                    <p class="font-weight-normal dark-grey-text">
                      {gem.description}
                    </p>
                  </div>
                  <div class="card-footer">
                    {new Date(gem.startTime).getTime() > Date.now() ? (
                      <div>
                        <lable>Start bit : {gem.startTime}</lable>
                      </div>
                    ) : (
                      <div>
                        {new Date(gem.endTime).getTime() < Date.now() ? (
                          <div>
                            <lable>
                              <h2>Gem Sold</h2>
                            </lable>
                          </div>
                        ) : (
                          <div>
                            {" "}
                            <Row gutter={16}>
                              <Col span={12}>
                                <Countdown
                                  title="Countdown"
                                  value={deadline}
                                  onFinish={onFinish}
                                />
                              </Col>
                            </Row>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div class="card-footer">
                    <a href="#" class="btn btn-primary">
                      Max Bid :{Math.max(parseInt(gem.bid))}
                    </a>
                  </div>

                  <div class="card-footer">
                    Bid Soon :{" "}
                    <Link to={`/addBid/${gem._id}`}>
                      <button className="btn btn-info">
                        {" "}
                        <span>Hurry Up Bid Soon</span>
                      </button>
                    </Link>
                    <div className="mt-3">
                      <button
                        className="btn btn-info "
                        onClick={(e) => {
                          e.preventDefault();
                          setVisibleDoc(true);
                          setId(gem._id);
                        }}
                      >
                        {" "}
                        <span>Add Doc</span>
                      </button>
                    </div>
                    <div className="mt-3">
                      <div className="docname">
                        {" "}
                        <a href={gem.documentPath}>
                          <button className="btn btn-primary">View</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
