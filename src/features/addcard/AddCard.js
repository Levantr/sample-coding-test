import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Card, Col, Form, Input, Modal, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import image from "../../images/sample-card-image.jpg";
import { add } from "../cards/cardsSlice";
import "./AddCard.scss";

function AddCard() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      form.resetFields();
      onFormFinish(values);
    });
  };

  const onFormFinish = (values) => {
    values.image = image;

    dispatch(add(values));
    setIsModalVisible(false);
  };

  return (
    <Col
      xs={{ span: 16, offset: 4 }}
      sm={{ span: 8, offset: 0 }}
      lg={{ span: 4 }}
      className="add-card"
    >
      <Card>
        <Row type="flex" justify="space-around" align="middle">
          <Col>
            <span>
              <Button
                type="primary"
                size="large"
                shape="circle"
                onClick={showModal}
              >
                <PlusOutlined />
              </Button>
            </span>
            <span>
              <h3>Add</h3>
            </span>
          </Col>
        </Row>
        <Modal
          title="Add Card"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Add Card"
        >
          <Form form={form} name="Add Card">
            <Form.Item label="Title" name="title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true }]}
            >
              <Input.TextArea />
            </Form.Item>
          </Form>
        </Modal>
      </Card>
    </Col>
  );
}

export default AddCard;
