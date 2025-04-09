import React, { useState } from "react";
import { Table, Button, Space, Modal } from "antd";
import { FaTrash } from "react-icons/fa";
import CandidateForm from "@/components/CandidateForm";

const data = [
  {
    key: "1",
    name: "John Doe",
    stage: "CEO",
    initiationDate: "2025-04-01",
    status: "In Progress",
  },
  {
    key: "2",
    name: "Jane Smith",
    stage: "New",
    initiationDate: "2025-03-25",
    status: "Pending",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Stage",
    dataIndex: "stage",
    key: "stage",
  },
  {
    title: "Initiation Date",
    dataIndex: "initiationDate",
    key: "initiationDate",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <Space>
        <Button danger icon={<FaTrash />}>
          Delete
        </Button>
      </Space>
    ),
  },
];

const Candidates = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-black">Candidates</h2>
        <Button
          onClick={() => setIsModalVisible(true)}
          type="primary"
          className="bg-black hover:bg-gray-800"
        >
          Register New Candidate
        </Button>
      </div>
      <Table dataSource={data} columns={columns} pagination={false} />
      <Modal
        title="Add Candidate"
        open={isModalVisible}
        footer={null}
        width={800}
        onCancel={() => setIsModalVisible(false)}
      >
        <CandidateForm />
      </Modal>
    </div>
  );
};

export default Candidates;
