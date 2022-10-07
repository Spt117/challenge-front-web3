import React from "react";
import { useSelector } from "react-redux";

import ThemeProvider from "@src/commons/theme";
import { RootState } from "./redux/store";
import Navbar from "./layout/Navbar";
import Content from "./layout/Content";

const Options: React.FC = () => {
  const settings = useSelector((state: RootState) => state.settings);

  return (
    <ThemeProvider settings={settings} fullWidth>
      <Navbar title="History tracker" />
      <Content settings={settings} />
    </ThemeProvider>
  );
};

export default Options;
