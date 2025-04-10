import React, { useState } from "react";
import {
  Button,
  DatePicker,
  message,
  Steps,
  Upload,
  theme,
  Slider,
  Select,
} from "antd";
import { Form, Input } from "antd";
import { FaUpload } from "react-icons/fa";
import { statesArray } from "@/constants/formConstants";

const steps = [
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
  {
    title: "",
  },
];

const CandidateForm = ({ setIsModalVisible, current, setCurrent }) => {
  const { token } = theme.useToken();

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
    setIsModalVisible(false);
    setCurrent(0);
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
                label="Full Name"
                style={{ marginBottom: "15px" }}
              >
                <Input />
              </Form.Item>
              <div className="grid grid-cols-2 gap-4">
                <Form.Item
                  name="dob"
                  label="Date of Birth"
                  className="col-span-1"
                >
                  <DatePicker className="w-full" />
                </Form.Item>
                <Form.Item
                  name="doj"
                  label="Date of Joining"
                  className="col-span-1"
                >
                  <DatePicker className="w-full" />
                </Form.Item>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Form.Item name="client" label="Client" className="col-span-1">
                  <Input />
                </Form.Item>
                <Form.Item
                  name="designation"
                  label="Designation"
                  className="col-span-1"
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="grid grid-cols-2 gap-4 -mt-2">
                <Form.Item name="gender" label="Gender" className="col-span-1">
                  <Input />
                </Form.Item>
                <Form.Item name="age" label="Age" className="col-span-1">
                  <Input />
                </Form.Item>
              </div>
              <Form.Item
                name="employeeCode"
                label="Employee Code"
                style={{ marginBottom: "15px" }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="photo"
                label="Photo"
                layout="horizontal"
                style={{ marginBottom: "15px" }}
                className="flex justify-start items-start"
              >
                <Upload
                  name="photo"
                  beforeUpload={() => false}
                  showUploadList={true}
                >
                  <Button icon={<FaUpload />}>Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="signature"
                label="Signature"
                layout="horizontal"
                style={{ marginBottom: "15px" }}
                className="flex justify-start items-start"
              >
                <Upload
                  name="signature"
                  beforeUpload={() => false}
                  showUploadList={true}
                >
                  <Button icon={<FaUpload />}>Upload</Button>
                </Upload>
              </Form.Item>
            </>
          )}
          {current === 1 && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <Form.Item name="phone" label="Phone" className="col-span-1">
                  <Input />
                </Form.Item>
                <Form.Item name="email" label="Email" className="col-span-1">
                  <Input />
                </Form.Item>
              </div>
              <Form.Item
                name="location"
                label="Location"
                style={{ marginBottom: "15px", marginTop: "-6px" }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="currentAddress"
                label="Current Address"
                style={{ marginBottom: "15px" }}
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                name="permanentAddress"
                label="Permanent Address"
                style={{ marginBottom: "15px" }}
              >
                <Input.TextArea />
              </Form.Item>
              <div className="grid grid-cols-2 gap-4">
                <Form.Item name="city" label="City" className="col-span-1">
                  <Input />
                </Form.Item>
                <Form.Item name="state" label="State" className="col-span-1">
                  <Select options={statesArray} showSearch={true} />
                </Form.Item>
              </div>
              <Form.Item
                name="esiDispensaryLocation"
                label="ESI Dispensary Location"
                style={{ marginBottom: "15px" }}
              >
                <Input />
              </Form.Item>
            </>
          )}
          {current === 2 && (
            <>
              <Form.Item
                name="bankAccount"
                label="Bank Account Number"
                style={{ marginBottom: "15px" }}
              >
                <Input />
              </Form.Item>
              <div className="grid grid-cols-2 gap-4">
                <Form.Item
                  name="uanNumber"
                  label="UAN Number"
                  className="col-span-1"
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="esicNumber"
                  label="ESIC Number"
                  className="col-span-1"
                >
                  <Input />
                </Form.Item>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Form.Item name="ifsc" label="IFSC Code" className="col-span-1">
                  <Input />
                </Form.Item>
                <Form.Item
                  name="bankName"
                  label="Bank Name"
                  className="col-span-1"
                >
                  <Input />
                </Form.Item>
              </div>
              <Form.Item
                name="panNo"
                label="Pan No."
                style={{ marginBottom: "15px", marginTop: "-6px" }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="aadharNo"
                label="Aadhar No."
                style={{ marginBottom: "15px" }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="aadharFront"
                label="Aadhar (Front)"
                layout="horizontal"
                style={{ marginBottom: "15px" }}
                className="flex justify-start items-start"
              >
                <Upload
                  name="aadharFront"
                  beforeUpload={() => false}
                  showUploadList={true}
                >
                  <Button icon={<FaUpload />}>Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="aadharBack"
                label="Aadhar (Back)"
                layout="horizontal"
                style={{ marginBottom: "15px" }}
                className="flex justify-start items-start"
              >
                <Upload
                  name="aadharBack"
                  beforeUpload={() => false}
                  showUploadList={true}
                >
                  <Button icon={<FaUpload />}>Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="pan"
                label="Pan"
                layout="horizontal"
                style={{ marginBottom: "15px" }}
                className="flex justify-start items-start"
              >
                <Upload
                  name="pan"
                  beforeUpload={() => false}
                  showUploadList={true}
                >
                  <Button icon={<FaUpload />}>Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="bankStatement"
                label="Bank Statement"
                layout="horizontal"
                style={{ marginBottom: "15px" }}
                className="flex justify-start items-start"
              >
                <Upload
                  name="bankStatement"
                  beforeUpload={() => false}
                  showUploadList={true}
                >
                  <Button icon={<FaUpload />}>Upload</Button>
                </Upload>
              </Form.Item>
            </>
          )}
          {current === 3 && (
            <>
              <Form.Item
                name="fatherName"
                label="Father's Name"
                style={{ marginBottom: "15px" }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="fatherDOB"
                label="Father's DOB"
                style={{ marginBottom: "15px" }}
              >
                <DatePicker className="w-full" />
              </Form.Item>
              <Form.Item
                name="fatherPhoto"
                label="Father Passport-Size Photo"
                layout="horizontal"
                style={{ marginBottom: "15px" }}
                className="flex justify-start items-start"
              >
                <Upload
                  name="fatherPhoto"
                  beforeUpload={() => false}
                  showUploadList={true}
                >
                  <Button icon={<FaUpload />}>Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="motherName"
                label="Mother's Name"
                style={{ marginBottom: "15px" }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="motherDOB"
                label="Mother's DOB"
                style={{ marginBottom: "15px" }}
              >
                <DatePicker className="w-full" />
              </Form.Item>
              <Form.Item
                name="motherPhoto"
                label="Mother Passport-Size Photo"
                layout="horizontal"
                style={{ marginBottom: "15px" }}
                className="flex justify-start items-start"
              >
                <Upload
                  name="motherPhoto"
                  beforeUpload={() => false}
                  showUploadList={true}
                >
                  <Button icon={<FaUpload />}>Upload</Button>
                </Upload>
              </Form.Item>
            </>
          )}
          {current === 4 && (
            <>
              <Form.Item
                name="tenthCertificate"
                label="10th Certificate"
                layout="horizontal"
                style={{ marginBottom: "15px" }}
                className="flex justify-start items-start"
              >
                <Upload
                  name="tenthCertificate"
                  beforeUpload={() => false}
                  showUploadList={true}
                >
                  <Button icon={<FaUpload />}>Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="twelfthCertificate"
                layout="horizontal"
                label="12th Certificate"
                style={{ marginBottom: "15px" }}
                className="flex justify-start items-start"
              >
                <Upload
                  name="twelfthCertificate"
                  beforeUpload={() => false}
                  showUploadList={true}
                >
                  <Button icon={<FaUpload />}>Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="gradCertificate"
                label="Graduation Certificate"
                layout="horizontal"
                style={{ marginBottom: "15px" }}
                className="flex justify-start items-start"
              >
                <Upload
                  name="gradCertificate"
                  beforeUpload={() => false}
                  showUploadList={true}
                >
                  <Button icon={<FaUpload />}>Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="postGradCertificate"
                label="Post Graduation Certificate"
                layout="horizontal"
                style={{ marginBottom: "15px" }}
                className="flex justify-start items-start"
              >
                <Upload
                  name="postGradCertificate"
                  beforeUpload={() => false}
                  showUploadList={true}
                >
                  <Button icon={<FaUpload />}>Upload</Button>
                </Upload>
              </Form.Item>
            </>
          )}
          {current === 5 && (
            <>
              <Form.Item
                name="lastCompanyDetails"
                label="Last Company Details"
                layout="horizontal"
                style={{ marginBottom: "15px" }}
                className="flex justify-start items-start"
              >
                <Upload
                  name="lastCompanyDetails"
                  beforeUpload={() => false}
                  showUploadList={true}
                >
                  <Button icon={<FaUpload />}>Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="offerLetter"
                label="Offer Letter"
                layout="horizontal"
                style={{ marginBottom: "15px" }}
                className="flex justify-start items-start"
              >
                <Upload
                  name="offerLetter"
                  beforeUpload={() => false}
                  showUploadList={true}
                >
                  <Button icon={<FaUpload />}>Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="appointmentLetter"
                label="Appointment Letter"
                layout="horizontal"
                style={{ marginBottom: "15px" }}
                className="flex justify-start items-start"
              >
                <Upload
                  name="appointmentLetter"
                  beforeUpload={() => false}
                  showUploadList={true}
                >
                  <Button icon={<FaUpload />}>Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="salarySlip"
                label="Salary Slip"
                layout="horizontal"
                style={{ marginBottom: "15px" }}
                className="flex justify-start items-start"
              >
                <Upload
                  name="salarySlip"
                  beforeUpload={() => false}
                  showUploadList={true}
                >
                  <Button icon={<FaUpload />}>Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="releaseLetter"
                label="Release Letter"
                layout="horizontal"
                style={{ marginBottom: "15px" }}
                className="flex justify-start items-start"
              >
                <Upload
                  name="releaseLetter"
                  beforeUpload={() => false}
                  showUploadList={true}
                >
                  <Button icon={<FaUpload />}>Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="resume"
                label="Resume Doc"
                layout="horizontal"
                style={{ marginBottom: "15px" }}
                className="flex justify-start items-start"
              >
                <Upload
                  name="resume"
                  beforeUpload={() => false}
                  showUploadList={true}
                >
                  <Button icon={<FaUpload />}>Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="undertakingForm"
                label="Undertaking Form"
                layout="horizontal"
                style={{ marginBottom: "15px" }}
                className="flex justify-start items-start"
              >
                <Upload
                  name="undertakingForm"
                  beforeUpload={() => false}
                  showUploadList={true}
                >
                  <Button icon={<FaUpload />}>Upload</Button>
                </Upload>
              </Form.Item>
              <Form.Item
                name="yearsOfExperience"
                label="Years of Experience"
                status={{ marginBottom: "15px" }}
              >
                <Slider min={1} max={10} />
              </Form.Item>
            </>
          )}
        </div>
        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default CandidateForm;
