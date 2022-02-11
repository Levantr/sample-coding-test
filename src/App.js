import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Layout, Skeleton } from "antd";
import { v4 as uuidv4 } from "uuid";
import { PlusOutlined } from "@ant-design/icons/lib/icons";
import Header from "./components/Header";
import Card from "./components/Card";
import SortBar from "./components/SortBar";
import ItineraryForm from "./containers/ItineraryForm";
import sampleImage from "./images/sample-card-image.jpg";
import "antd/dist/antd.min.css";
import "./App.less";
import {
  addItem,
  selectItinerary,
  sortByCreated,
  sortByTitle,
  fetchItinerary,
} from "./reducers/itineraryReducer";
const { Content } = Layout;

function App() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const { sortBy, items, status } = useSelector(selectItinerary);

  useEffect(() => {
    dispatch(fetchItinerary());
  }, [dispatch]);

  const openForm = () => {
    setVisible(true);
  };

  const closeForm = () => {
    form.resetFields();
    setVisible(false);
  };

  const submitForm = (values) => {
    const id = uuidv4();
    const title = values.title.trim();
    const description = values.description.trim();
    const created = new Date().toString();
    if (title && description) {
      dispatch(addItem({ id, created, title, description }));
    }
    closeForm();
  };

  const handleOrderChange = ({ target }) => {
    if (target.value === "title") return dispatch(sortByTitle());
    if (target.value === "time") return dispatch(sortByCreated());
  };

  return (
    <Layout className="App">
      <Header />
      <SortBar title="Itinerary" sortBy={sortBy} onChange={handleOrderChange} />
      <Content className="Content">
        {status === "loading" && (
          <Card>
            <Skeleton active paragraph={{ rows: 3 }} />
          </Card>
        )}
        {status !== "loading" && (
          <Card onClick={openForm}>
            <PlusOutlined className="Card__button__icon" />
            <div className="Card__button__label">Add</div>
          </Card>
        )}
        {items &&
          items.map(({ id, title, description }) => (
            <Fragment key={id}>
              <Card
                title={title}
                description={description}
                cover={sampleImage}
                className="Card"
              />
            </Fragment>
          ))}
      </Content>
      <ItineraryForm
        form={form}
        submit={submitForm}
        closeForm={closeForm}
        visible={visible}
      />
    </Layout>
  );
}

export default App;
