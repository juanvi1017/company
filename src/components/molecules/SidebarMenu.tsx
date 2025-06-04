"use client";

import {
  SettingOutlined,
  EyeOutlined
} from "@ant-design/icons";
import { Layout } from "antd";
import Image from "next/image";
import SidebarIcon from "../atoms/SidebarIcon";

const { Sider } = Layout;

type Props = {
  width: number;
  isDrawer: boolean
};

const SidebarMenu = ({ width, isDrawer }: Props) => {
  return (
    <Sider
      width={width}
      style={{
        height: '100vh',
        backgroundColor: '#fff',
        borderRight: '1px solid #f0f0f0',
        borderRadius: isDrawer ? "15px" : 0,
        position: 'fixed',
        paddingLeft: "9px",
        paddingRight: "9px",
        left: isDrawer ? undefined : 0,
        top: isDrawer ? undefined : 0,
        bottom: isDrawer ? undefined : 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Logo */}
      <div style={{ height: 64, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image src="/images/logo.png" alt="Logo" width={35} height={39} />
      </div>

      {/* Top Icons */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 24 }}>
        <SidebarIcon icon={<Image src="/icons/activity.png" alt="Activity" width={25} height={25} />} tooltip="Actividades" />
        <SidebarIcon icon={<EyeOutlined style={{ fontSize: "25px" }} />} tooltip="Vista" />
        <SidebarIcon icon={<Image src="/icons/rocket.png" alt="Activity" width={25} height={25} />} tooltip="Empresas" active />
      </div>

      {/* Configuración Icon */}
      <div style={{ position: 'fixed', bottom: 100, borderTop: "1px solid #c2c3c1" }}>
        <SidebarIcon icon={<SettingOutlined style={{ fontSize: "25px" }} />} tooltip="Configuraciones" />
      </div>
    </Sider>
  );
};

export default SidebarMenu;
