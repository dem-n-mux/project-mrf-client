import React, { useState } from "react";
import { Table, Button, Space, Modal } from "antd";
import { FaTrash, FaEdit } from "react-icons/fa";

const data = [
  {
    key: "1",
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "Active",
    role: "CEO",
  },
  {
    key: "2",
    name: "Bob Martin",
    email: "bob@example.com",
    status: "Inactive",
    role: "HR",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Actions",
    key: "actions",
    render: (_, record) => (
      <Space>
        <Button icon={<FaEdit />} className="text-blue-600 border-blue-600">
          Update
        </Button>
        <Button danger icon={<FaTrash />}>
          Delete
        </Button>
      </Space>
    ),
  },
];

const UserHandling = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-black mb-4">User Management</h2>
        <Button
          onClick={() => setIsModalVisible(true)}
          type="primary"
          className="bg-black hover:bg-gray-800"
        >
          Add User
        </Button>
      </div>
      <Table dataSource={data} columns={columns} pagination={false} />
      <Modal
        title="Add User"
        open={isModalVisible}
        footer={null}
        onCancel={() => setIsModalVisible(false)}
      >
        <h1>Hello People</h1>
      </Modal>
    </div>
  );
};

export default UserHandling;
