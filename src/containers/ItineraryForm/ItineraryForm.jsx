import { useRef } from "react";
import { Button, Drawer, Form, Input, Typography } from "antd";
import "./ItineraryForm.less";
const { Title } = Typography;

function ItineraryForm({ form, submit, closeForm, visible }) {
  const inputRef = useRef();
  const shouldFocus = () => {
    if (visible) inputRef.current.focus();
  };
  return (
    <Drawer
      onClose={closeForm}
      visible={visible}
      afterVisibleChange={shouldFocus}
      className="ItineraryForm"
    >
      <Title level={2} className="ItineraryForm__title">
        Add Item
      </Title>
      <Form
        form={form}
        name="itinerary"
        layout="vertical"
        onFinish={submit}
        autoComplete="off"
        initialValues={{ remember: false }}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: "Please input your title." }]}
        >
          <Input ref={inputRef} />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Description is required." }]}
        >
          <Input.TextArea rows={5} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}

export default ItineraryForm;
