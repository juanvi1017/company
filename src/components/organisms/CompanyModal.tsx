'use client';

import React, { useState } from 'react';
import { Modal, Typography, Form, Input, Upload } from 'antd';
import type { UploadProps } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Dragger } = Upload;

type ModalProps = {
  isModalOpen: boolean;
  setIsModalOpen: (e: boolean) => void;
};

const uploadProps: UploadProps = {
  name: 'file',
  multiple: false,
  showUploadList: false,
  accept: '.jpg,.jpeg,.png',
  beforeUpload: () => false,
};

const CompanyModal = ({ isModalOpen, setIsModalOpen }: ModalProps) => {
  const [form] = Form.useForm();
  const [isFormValid, setIsFormValid] = useState(false);

  const handleOk = () => {
    form.validateFields().then((values) => {
      console.log('Datos enviados:', values);
      setIsModalOpen(false);
      form.resetFields();
      setIsFormValid(false);
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
    setIsFormValid(false);
  };

  const validateForm = () => {
    const hasErrors = form.getFieldsError().some(({ errors }) => errors.length > 0);
    const allTouched = form.isFieldsTouched(true);
    setIsFormValid(!hasErrors && allTouched);
  };

  return (
    <Modal
      title="Crear empresa"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okButtonProps={{ disabled: !isFormValid }}
      width="600px"
    >
      <div style={{ maxWidth: 480, margin: '0 auto', padding: '2rem' }}>
        <Title level={3} style={{ textAlign: 'center' }}>
          Nueva sucursal
        </Title>

        <Form
          form={form}
          layout="vertical"
          requiredMark="optional"
          onValuesChange={validateForm}
        >
          <Form.Item
            label={<Text strong><span style={{ color: "red" }}>*</span> Nombre</Text>}
            name="nombre"
            rules={[{ required: true, message: 'Por favor ingresa el nombre' }]}
          >
            <Input placeholder="Escribir nombre" />
          </Form.Item>

          <Form.Item
            label={<Text strong><span style={{ color: "red" }}>*</span> Adjuntar logo completo</Text>}
            name="logoCompleto"
            valuePropName="fileList"
            getValueFromEvent={(e) => Array.isArray(e) ? e : e?.fileList}
            rules={[{ required: true, message: 'Por favor sube el logo completo' }]}
          >
            <Dragger {...uploadProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined style={{ color: '#1677ff', fontSize: 40 }} />
              </p>
              <p className="ant-upload-text">Haz clic o arrastra para subir tu archivo</p>
              <p className="ant-upload-hint">JPG, PNG</p>
            </Dragger>
          </Form.Item>

          <Form.Item
            label={<Text strong><span style={{ color: "red" }}>*</span> Adjuntar isotipo</Text>}
            name="isotipo"
            valuePropName="fileList"
            getValueFromEvent={(e) => Array.isArray(e) ? e : e?.fileList}
            rules={[{ required: true, message: 'Por favor sube el isotipo' }]}
          >
            <Dragger {...uploadProps}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined style={{ color: '#1677ff', fontSize: 40 }} />
              </p>
              <p className="ant-upload-text">Haz clic o arrastra para subir tu archivo</p>
              <p className="ant-upload-hint">JPG, PNG</p>
            </Dragger>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default React.memo(CompanyModal);
