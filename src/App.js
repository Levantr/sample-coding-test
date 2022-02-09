import React from "react";
import Header from "./components/Header";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "./App.scss";
const { Content } = Layout;

function App() {
  return (
    <Layout className="App">
      <Header />
      <Content>Cards go here</Content>
    </Layout>
  );
}

export default App;
