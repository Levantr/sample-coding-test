import React from "react";
import "./Header.less";

import { Layout } from "antd";
const { Header: AntHeader } = Layout;

function Header() {
  return (
    <AntHeader className="Header">
      <h1 className="Header__title">Levantr is the best!</h1>
    </AntHeader>
  );
}

export default Header;
