import React from "react";
type Props = { status: "Activo" | "Inactivo" };

const StatusTag = ({ status }: Props) => {
  const color = status === "Activo" ? "#1bbc05" : "red";
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div style={{
        width: "6px",
        height: "6px",
        backgroundColor: color,
        borderRadius: "50%",
        marginRight: '8px'
      }}>
      </div>
      {status}
    </div>
  );
};

export default React.memo(StatusTag);