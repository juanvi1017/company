import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import StatusTag from "../atoms/StatusTag";
import CompanyActions from "../molecules/CompanyActions";

interface Company {
  id: string;
  name: string;
  status: "Activo" | "Inactivo";
}

interface dataProps {
  data: Company[];
}

const columns: ColumnsType<Company> = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Nombre de empresa",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Estado de oficina",
    dataIndex: "status",
    key: "status",
    render: (status) => <StatusTag status={status} />,
  },
  {
    title: "Acciones",
    key: "actions",
    render: () => <CompanyActions />,
  },
];

const CompanyTable = ({data}: dataProps) => (
  <Table
    columns={columns}
    dataSource={data}
    rowKey="id"
    pagination={{ pageSize: 5 }}
    scroll={{ x: true }}
    style={{ width: "100%" }}
  />
);

export default CompanyTable;
