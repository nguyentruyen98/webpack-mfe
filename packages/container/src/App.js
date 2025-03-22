import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppHeader from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Progress from "./components/Progress";

const LazyMarketingApp = lazy(() => import("./components/MarketingApp"));
const LazyAuthApp = lazy(() => import("./components/AuthApp"));

const App = () => {
  const generateClassName = createGenerateClassName({ productionPrefix: "co" });
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <AppHeader isSignIn={isSignIn} onSignOut={() => setIsSignIn(false)} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <LazyAuthApp onSignIn={() => setIsSignIn(true)} />
              </Route>
              <Route path="/" component={LazyMarketingApp} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
