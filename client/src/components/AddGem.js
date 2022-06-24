import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { TimePicker, DatePicker, Space } from "antd";
import moment from "moment";
import axios from "axios";
import "../../node_modules/antd/dist/antd.css";

import { AudioOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;

const AddGem = () => {
  useEffect(() => {
    // axios.get(`http://localhost:3000/user/getById/${id}`).then((res) => {
    //   const user = res.data.user;
    // });
    //api
  }, []);

  const [file, setFile] = useState("");

  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const handleSubmit = (values) => {
    console.log(values);
    console.log(file);
    const formData = new FormData();

    formData.append("gem", file);

    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("colour", values.colour);
    formData.append("startTime", startTime);
    formData.append("endTime", endTime);

    formData.append("bid", parseInt(values.bid));

    axios
      .post("http://localhost:3000/gems", formData)

      .then((res) => {
        console.log(res.data);
      });

    window.location = "/home";
  };
  // const onChange = (time, timeString) => {
  //   setStartTime(time._d);
  //   console.log(time._d);
  // };
  // const onChangeEnd = (time, timeString) => {
  //   setEndTime(time._d);
  //   console.log(time._d);
  // };
  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
  };

  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
    setStartTime(value[0]._d);
    setEndTime(value[1]._d);
  };

  const onOk = (value) => {
    console.log("onOk: ", value);
  };
  return (
    <>
      <div>
        <Formik
          initialValues={{
            title: "",
            description: "",

            colour: "",
            bid: 0,
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values }) => (
            <Form>
              <div>
                {" "}
                <label>Title</label>
                <Field as="select" name="title" className="title">
                  <option value="" selected disabled>
                    Select Title
                  </option>
                  <option value="Amethyst">Amethyst</option>

                  <option value="Alexandrite">Alexandrite</option>
                  <option value="Blue Gem">Blue Gem</option>
                  <option value="Purple Gem">Purple Gem</option>
                  <option value="Red Gem">Red Gem</option>
                  <option value="Yellow Gem">Yellow Gem</option>
                  <option value="Yellow Gem">Other</option>
                </Field>
              </div>
              <div>
                {" "}
                <label>Color</label>
                <Field as="select" name="colour" className="colour">
                  <option value="" selected disabled>
                    Select Colour
                  </option>
                  <option value="Black">Black</option>

                  <option value="Green">Green</option>
                  <option value="Blue ">Blue </option>
                  <option value="Purple ">Purple</option>
                  <option value="Red ">Red </option>
                  <option value="Yellow ">Yellow </option>
                  <option value="Yellow ">Other </option>
                </Field>
              </div>
              <div className="mt-3">
                <label>
                  {" "}
                  <label>Description</label>
                </label>
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Description"
                  className="description"
                ></Field>
              </div>
              <div className="mt-3">
                <label>
                  {" "}
                  <label>Bid</label>
                </label>
                <Field name="bid" placeholder="Bid" className="bid"></Field>
              </div>
              <div>
                <label>Time</label>
                <Space direction="vertical" size={12}>
                  <RangePicker
                    showTime={{ format: "HH:mm" }}
                    format="YYYY-MM-DD HH:mm"
                    onChange={onChange}
                    onOk={onOk}
                  />
                </Space>
              </div>

              {/* <div>
                {" "}
                <label>Start Time</label>
                <TimePicker
                  onChange={onChange}
                  defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
                />
              </div> */}
              {/* <div>
                {" "}
                <label>End Time</label>
                <TimePicker
                  onChange={onChangeEnd}
                  defaultOpenValue={moment("00:00:00", "HH:mm:ss")}
                />
              </div> */}
              <div className="fileupload mt-3">
                <lable>Add a Photo</lable>
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
              </div>

              <div>
                {" "}
                <button className="btn btn-info mt-3 " type="submit">
                  Add
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddGem;
