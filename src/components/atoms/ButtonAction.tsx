import { Button } from "antd";

type Props = {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
};

const ButtonAction = ({ label, icon, onClick }: Props) => {
  return (
    <Button
      type="primary"
      style={{ backgroundColor: "#262776", height: "40px" }}
      onClick={onClick}
    >
      {label} {icon}
    </Button>
  );
};

export default ButtonAction;
