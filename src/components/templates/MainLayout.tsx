"use client";

import React, { useState } from "react";
import { Layout, Drawer, Button, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import SidebarMenu from "../molecules/SidebarMenu";

const { Content } = Layout;
const { useBreakpoint } = Grid;

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <Layout>
      {/* Sidebar */}
      {!isMobile && (
        <SidebarMenu width={58} isDrawer />
      )}

      {/* Botón DEl menú en mobile */}
      {isMobile && (
        <div style={{ position: 'fixed', top: 16, left: 16, zIndex: 1000 }}>
          <Button
            type="primary"
            icon={<MenuOutlined />}
            onClick={() => setDrawerVisible(true)}
          />
        </div>
      )}

      {/* Para mobile */}
      <Drawer
        placement="left"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        styles={{ body: { padding: 0 } }}
        width={240}
        closable={false}
      >
        <SidebarMenu width={240} isDrawer />
      </Drawer>

      {/* Contenido principal */}
      <Layout
        style={{
          height: isMobile ? "auto" : "100vh",
          marginLeft: isMobile ? 0 : 70,
          background: "#f5f5f5",
        }}
      >
        <Content
          style={{
            padding: 24,
            flex: 1,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default React.memo(MainLayout);
