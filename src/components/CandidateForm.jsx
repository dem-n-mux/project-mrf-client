import React, { useState } from "react";
import { Button, DatePicker, message, Steps, theme } from "antd";
import { Form, Input } from "antd";

const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Third",
    content: "Last-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];

const CandidateForm = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    marginTop: 16,
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    message.success("Form submitted successfully!");
  };

  return (
    <div className="mt-4">
      <Steps current={current} items={items} />
      <Form name="candidate_form" onFinish={onFinish} layout="vertical">
        <div style={contentStyle}>
          {current === 0 && (
            <>
              <Form.Item
                name="fullname"
                label={<span className="text-black">Full Name</span>}
                style={{ marginBottom: "15px" }}
              >
                <Input />
              </Form.Item>
              <div className="grid grid-cols-2 gap-4">
                <Form.Item
                  name="client"
                  label={<span className="text-black">Client</span>}
                  className="col-span-1"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="designation"
                  label={<span className="text-black">Designation</span>}
                  className="col-span-1"
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="grid grid-cols-2 gap-4 -mt-2">
                <Form.Item
                  name="gender"
                  label={<span className="text-black">Gender</span>}
                  className="col-span-1"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="age"
                  label={<span className="text-black">Age</span>}
                  className="col-span-1"
                >
                  <Input />
                </Form.Item>
              </div>
            </>
          )}
          {current === 1 && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <Form.Item
                  name="phone"
                  label={<span className="text-black">Phone</span>}
                  className="col-span-1"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="email"
                  label={<span className="text-black">Email</span>}
                  className="col-span-1"
                >
                  <Input />
                </Form.Item>
              </div>
              <Form.Item
                name="location"
                label={<span className="text-black">Location</span>}
                style={{ marginBottom: "15px", marginTop: "-6px" }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="address"
                label={<span className="text-black">Address</span>}
                style={{ marginBottom: "15px" }}
              >
                <Input />
              </Form.Item>
              <div className="grid grid-cols-2 gap-4">
                <Form.Item
                  name="city"
                  label={<span className="text-black">City</span>}
                  className="col-span-1"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="state"
                  label={<span className="text-black">State</span>}
                  className="col-span-1"
                >
                  <Input />
                </Form.Item>
              </div>
            </>
          )}
          {current === 2 && (
            <>
              <Form.Item
                name="bankAccount"
                label={<span className="text-black">Bank Account</span>}
                style={{ marginBottom: "15px" }}
              >
                <Input />
              </Form.Item>
              <div className="grid grid-cols-2 gap-4">
                <Form.Item
                  name="ifsc"
                  label={<span className="text-black">IFSC Code</span>}
                  className="col-span-1"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="bankName"
                  label={<span className="text-black">Bank Name</span>}
                  className="col-span-1"
                >
                  <Input />
                </Form.Item>
              </div>
              <Form.Item
                name="panNo"
                label={<span className="text-black">Pan No.</span>}
                style={{ marginBottom: "15px", marginTop: "-6px" }}
              >
                <Input />
              </Form.Item>
            </>
          )}
          {current === 3 && (
            <>
              <Form.Item
                name="fatherName"
                label={<span className="text-black">Father's Name</span>}
                style={{ marginBottom: "15px" }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="fatherDOB"
                label={<span className="text-black">Father's DOB</span>}
                style={{ marginBottom: "15px" }}
              >
                <DatePicker className="w-full"/>
              </Form.Item>
              <Form.Item
                name="motherName"
                label={<span className="text-black">Mother's Name</span>}
                style={{ marginBottom: "15px" }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="motherDOB"
                label={<span className="text-black">Mother's DOB</span>}
                style={{ marginBottom: "15px" }}
              >
                <DatePicker className="w-full"/>
              </Form.Item>
            </>
          )}
        </div>
      </Form>
      <div style={{ marginTop: 24 }}>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default CandidateForm;
