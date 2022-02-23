import React from "react";
import Header from "./components/Header";
import AddCard from "./features/addcard/AddCard";
import { Layout, Row } from "antd";
import "antd/dist/antd.min.css";
import "./App.scss";
import Cards from "./features/cards/Cards";

const { Content } = Layout;

function App() {
  return (
    <Layout className="App">
      <Header />
      <Content>
        <Row gutter={16}>
          <AddCard />
          <Cards />
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
