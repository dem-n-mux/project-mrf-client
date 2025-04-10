import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import {
  FaTachometerAlt,
  FaUserFriends,
  FaUserCog,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const SidebarLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const pathToKey = {
    "/": "1",
    "/candidates": "2",
    "/users": "3",
  };

  const handleMenuClick = ({ key }) => {
    if (key === "4") {
      localStorage.removeItem("isLoggedIn");
      navigate("/login");
    } else {
      const keyToPath = {
        1: "/",
        2: "/candidates",
        3: "/users",
      };
      navigate(keyToPath[key]);
    }
  };

  const selectedKey = pathToKey[location.pathname] || "";

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapse}
        className="bg-black"
      >
        <div className="h-16 flex items-center justify-center text-white text-lg font-bold">
          {!collapsed ? "Candidate MRF" : "CM"}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          className="bg-black"
          onClick={handleMenuClick}
        >
          <Menu.Item key="1" icon={<FaTachometerAlt />} className="text-white">
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<FaUserFriends />} className="text-white">
            Candidates
          </Menu.Item>
          <Menu.Item key="3" icon={<FaUserCog />} className="text-white">
            User Handling
          </Menu.Item>
          <Menu.Item key="4" icon={<FaSignOutAlt />} className="text-white">
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="bg-white shadow-md px-4 flex justify-end items-center">
          <div className="p-2 bg-white rounded-full shadow-md">
            <FaUser size={20} />
          </div>
        </Header>
        <Content className="m-4 p-6 bg-white rounded-xl shadow-inner">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default SidebarLayout;
