"use client";
import React from "react";
import { Dropdown, Button, MenuProps } from "antd";
import {
  EllipsisOutlined,
  EditOutlined,
  DeleteOutlined,
  StopOutlined,
} from "@ant-design/icons";

// Menu Itens
const menuItems: MenuProps["items"] = [
  {
    key: "edit",
    label: "Editar empresa",
    icon: <EditOutlined />,
  },
  {
    key: "disable",
    label: "Desactivar empresa",
    icon: <StopOutlined />,
  },
  {
    key: "delete",
    label: "Eliminar empresa",
    icon: <DeleteOutlined />,
    danger: true,
  },
];

const CompanyActions = () => (
  <div style={{ display: "flex", alignItems: "center", color: "#757575 " }}>
    <div
      style={{
        border: "1px solid #e7e7e7",
        padding: "4px 8px",
        borderRadius: "6px 0px 0px 6px"
      }}>
      Acciones
    </div>
    <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
      <Button
        icon={<EllipsisOutlined />}
        style={{
          borderRadius: "0px 6px 6px 0px",
          borderTop: "1px solid #e7e7e7",
          borderRight: "1px solid #e7e7e7",
          borderBottom: "1px solid #e7e7e7"
        }} />
    </Dropdown>
  </div>
);

export default React.memo(CompanyActions);

