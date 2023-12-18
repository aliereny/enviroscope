"use client";

import { Layout, theme } from "antd";
import React from "react";

interface AppContentProps {
  children?: React.ReactNode;
}

export const AppContent: React.FC<AppContentProps> = (props) => {
  const { children } = props;

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout.Content
      style={{
        background: colorBgContainer,
        flex: 1,
        padding: 24,
        borderRadius: borderRadiusLG,
        display: "flex",
      }}
    >
      {children}
    </Layout.Content>
  );
};
