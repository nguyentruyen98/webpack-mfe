import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createBrowserHistory, createMemoryHistory } from "history";

const mount = (el, { onNavigate, onSignIn, defaultHistory, initialPaths }) => {
  const history =
    defaultHistory || createMemoryHistory({ initialEntries: initialPaths });
  if (onNavigate) history.listen(onNavigate);
  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);
  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;
      if (pathname !== nextPathName) history.push(nextPathName);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_auth-dev-root");
  if (el) {
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}
export { mount };
