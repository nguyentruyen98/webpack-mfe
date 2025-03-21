import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppHeader from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import MarketingApp from "./components/MarketingApp";
const App = () => {
  const generateClassName = createGenerateClassName({ productionPrefix: "co" });
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <AppHeader />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
