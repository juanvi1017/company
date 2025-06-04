"use client";

import { useEffect, useState } from 'react';
import { Typography, Space, Row, Col, Flex } from "antd";
import SearchInput from "../atoms/SearchInput";
import CompanyTable from "../organisms/CompanyTable";
import ButtonAction from "../atoms/ButtonAction";
import CompanyModal from '../organisms/CompanyModal';
import { PlusOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

interface Company {
  id: string;
  name: string;
  status: "Activo" | "Inactivo";
}

const CompanyListTemplate = () => {

  const [companies, setCompanies] = useState<Company[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChangeSearch = (value: string) => {
    setSearchTerm(value);
  };

  const fetchCompanies = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    setCompanies(data);
  };
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.trim() !== '') {
        fetchCompanies(`/api/companies?name=${encodeURIComponent(searchTerm)}`);
      } else {
        fetchCompanies(`/api/companies`); // si no hay búsqueda, hago que devuelva los datos normales
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, fetchCompanies]);


  return (
    <Space direction="vertical" size="large"
      style={{
        width: "100%",
        marginTop: 8,
        padding: "50px 35px 0px",
        height: "100%",
        backgroundColor: "#fff"
      }}>
      <Text type="secondary" style={{ fontSize: 14 }}>
        Empresas <span style={{ fontWeight: "bolder" }}>/ Lista de empresas</span>
      </Text>

      <Title level={3} style={{ marginBottom: 0 }}>
        Lista de empresas
      </Title>

      <Row gutter={[16, 16]} justify="space-between" align="middle" wrap={false}>
        <Col flex="auto">
          <SearchInput onSearch={handleChangeSearch} />
        </Col>

        <Col flex="none">
          <Flex align="center" gap="small" wrap="wrap">
            <Text strong style={{ color: "#505050" }}>{companies.length} empresas</Text>
            <ButtonAction
              label="Crear nueva empresa"
              icon={<PlusOutlined />}
              onClick={() => setIsModalOpen(true)}
            />
          </Flex>
        </Col>
      </Row>
      <CompanyTable data={companies} />
      {isModalOpen && (
        <CompanyModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </Space>
  );
};

export default CompanyListTemplate;

