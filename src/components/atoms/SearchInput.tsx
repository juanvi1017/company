import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

interface Props {
  onSearch: (term: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  return (
    <Input
      placeholder="Buscar por nombre"
      prefix={<SearchOutlined style={{ color: "#c2c3c1" }} />}
      style={{ maxWidth: 300 }}
      onChange={(e) => onSearch(e.target.value)}
      allowClear
    />
  );
};

export default SearchInput;