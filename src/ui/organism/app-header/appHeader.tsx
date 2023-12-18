"use client";
import { Layout, Menu, theme } from "antd";
import {
  FileExcelOutlined,
  PushpinOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const AppHeader = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const router = useRouter();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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
        defaultSelectedKeys={[isClient ? location.pathname : "/"]}
        items={[
          {
            key: "/",
            icon: <PushpinOutlined />,
            label: "View Analysis",
            onClick: () => router.push("/"),
          },
          {
            key: "/analysis/parse",
            icon: <UserOutlined />,
            label: "Parse Analysis",
            onClick: () => router.push("/analysis/parse"),
          },
          {
            key: "/api/aqi",
            icon: <FileExcelOutlined />,
            label: "Download AQI",
            onClick: () => router.push("/api/aqi"),
          },
        ]}
      />
    </Layout.Header>
  );
};
