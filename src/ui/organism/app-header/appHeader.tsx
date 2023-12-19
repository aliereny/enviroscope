"use client";
import { Layout, Menu, theme } from "antd";
import {
  FileExcelOutlined,
  PushpinOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const AppHeader = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const pathname = usePathname();

  return (
    <Layout.Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <img
        src={"/logo.png"}
        style={{
          width: "auto",
          height: "50%",
          borderRadius: borderRadiusLG,
          marginRight: 16,
        }}
      />
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ flex: 1, alignItems: "center", display: "block" }}
        selectedKeys={[pathname]}
        items={[
          {
            key: "/",
            icon: <PushpinOutlined />,
            label: <Link href={"/"}>View Analysis</Link>,
          },
          {
            key: "/analysis/parse",
            icon: <UserOutlined />,
            label: <Link href={"/analysis/parse"}>Parse Analysis</Link>,
          },
          {
            key: "/api/aqi",
            icon: <FileExcelOutlined />,
            label: <Link href={"/api/aqi"}>Download AQI</Link>,
          },
        ]}
      />
    </Layout.Header>
  );
};
