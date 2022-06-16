import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { TimePicker } from "antd";
import moment from "moment";
import axios from "axios";
import "../../node_modules/antd/dist/antd.css";
import { useParams } from "react-router-dom";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { Link } from "react-router-dom";
import { Col, Row, Statistic } from "antd";

const { Countdown } = Statistic;
const AddBid = () => {
  const { id } = useParams();

  const [gemData, SetGemData] = useState([]);
  console.log(id);

  useEffect(() => {
    axios.get(`http://localhost:3000/gems`).then((res) => {
      SetGemData(...gemData, res.data.gems);
    });
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
  const onSearch = (value) => console.log(value);
  const userId = 1;

  const handleSubmit = (values) => {
    console.log(values);
  };

  const onFinish = () => {
    console.log("finished!");
  };
  return (
    <>
      <div>
        <section class="search">
          {" "}
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{
                width: 200,
              }}
            />{" "}
          </Space>
        </section>
        <Formik
          initialValues={{
            title: "",
            maxBid: "",
            addBid: 0,
            Description: "",
            SellerName: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values }) => (
            <Form>
              {gemData?.map((gem, index) => {
                const deadline =
                  new Date(gem.endTime).getTime() -
                  (10 * 60 * 60 * 24 * 2 + 1000 * 30);

                if (gem._id == id) {
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
                      <div class="card-footer">
                        <a href="#" class="btn btn-primary">
                          Max Bid :{Math.max(parseInt(gem.bid))}
                        </a>
                      </div>
                      <div>
                        {" "}
                        <label>Add Bid</label>
                        <Field
                          name="addBid"
                          placeholder="Add Bid"
                          className="addBid"
                        ></Field>
                        <div>
                          {" "}
                          <button
                            className="btn btn-info mt-3 "
                            onClick={(e) => {
                              e.preventDefault();
                              // setBid([...bid, parseInt(values.addBid)]);
                              console.log(id);
                              console.log(values.addBid);

                              if (gem.bid > values.addBid) {
                                alert("Your value is low cost");
                              } else {
                                axios
                                  .post("http://localhost:3000/addBid", {
                                    userId: userId,
                                    bid: values.addBid,
                                    gid: id,
                                  })

                                  .then((res) => {
                                    console.log(res.data);
                                  });
                                window.location = `/addBid/${id}`;
                              }

                              //
                            }}
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </Form>
          )}
        </Formik>

        <div>
          {" "}
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

                  if (gem._id != id) {
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
                        <div class="card-footer">
                          <a href="#" class="btn btn-primary">
                            Max Bid :{Math.max(parseInt(gem.bid))}
                          </a>
                        </div>

                        <div class="card-footer">
                          Bid :{" "}
                          <Link to={`/addBid/${gem._id}`}>
                            <button className="btn btn-info">
                              {" "}
                              <span>Bid</span>
                            </button>
                          </Link>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AddBid;
