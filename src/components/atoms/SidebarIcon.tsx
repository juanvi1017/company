import { Tooltip } from "antd";

type SidebarIconProps = {
  icon: React.ReactNode;
  tooltip: string;
  active?: boolean;
};

const SidebarIcon = ({
  icon,
  tooltip,
  active = false,
}: SidebarIconProps ) => {
  return (
    <Tooltip title={tooltip} placement="right">
      <div
        style={{
          padding: 8,
          borderRadius: 8,
          width: "40px",
          height: "36px",
          cursor: "pointer",
          color: active ? "#fff" : "#8c8c8c",
          backgroundColor: active ? "#262776" : "transparent",
          transition: "all 0.3s",
          textAlign: "center",
        }}
      >
        {icon}
      </div>
    </Tooltip>
  );
};

export default SidebarIcon;

