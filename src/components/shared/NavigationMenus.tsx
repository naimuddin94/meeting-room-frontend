import {
  FundOutlined,
  HomeOutlined,
  PhoneOutlined,
  SnippetsOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Home",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "Meeting Rooms",
    key: "/meeting-rooms",
    icon: <FundOutlined />,
  },
  {
    label: "About Us",
    key: "/about-us",
    icon: <SnippetsOutlined />,
  },
  {
    label: "Contact Us",
    key: "/contact-us",
    icon: <PhoneOutlined />,
  },
];

const NavigationMenus: React.FC = () => {
  const [current, setCurrent] = useState("/");
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    navigate(e.key);
  };

  return (
    <Menu
      style={{ width: "100%", display: "flex", justifyContent: "center" }}
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default NavigationMenus;
