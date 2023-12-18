import "../../public/antd.min.css";
import "./globals.scss";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Layout } from "antd";
import React from "react";
import { AppContent } from "@/ui/organism/app-content/appContent";
import { AppHeader } from "@/ui/organism/app-header/appHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EnviroScope",
  description:
    "Explore EnviroScope, an environmental monitoring application. Featuring real-time air quality data, sophisticated data visualizations, and seamless Google Maps integration, it's the go-to platform for comprehensive air pollution insights. Access interactive maps, detailed analytics, and user-friendly interfaces to stay informed about environmental conditions in cities worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout style={{ minHeight: "100vh" }}>
          <AppHeader />
          <AppContent>{children}</AppContent>
        </Layout>
      </body>
    </html>
  );
}
