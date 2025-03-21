import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppHeader from "./components/Header";

import MarketingApp from "./components/MarketingApp";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppHeader />
        <MarketingApp />
      </BrowserRouter>
    </div>
  );
};

export default App;
