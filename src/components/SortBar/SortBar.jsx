import { PageHeader, Radio } from "antd";
import {
  ClockCircleOutlined,
  SortAscendingOutlined,
} from "@ant-design/icons/lib/icons";

function SortBar({ title, sortBy, onChange }) {
  return (
    <PageHeader
      title={title}
      className="PageHeader"
      extra={[
        <span key="sort-lable">Sort By: </span>,
        <Radio.Group key="sort-ctrls" value={sortBy} onChange={onChange}>
          <Radio.Button value="title">
            <SortAscendingOutlined />
          </Radio.Button>
          <Radio.Button value="time">
            <ClockCircleOutlined />
          </Radio.Button>
        </Radio.Group>,
      ]}
    />
  );
}

export default SortBar;
