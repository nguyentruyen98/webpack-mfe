import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory } from "history";

const mount = (el, { onNavigate, initialPaths }) => {
  const history = createMemoryHistory({ initialEntries: initialPaths });
  if (onNavigate) history.listen(onNavigate);
  ReactDOM.render(<App history={history} />, el);
  return {
    onParentNavigate({ pathname: nextPathName }) {
      const { pathname } = history.location;
      if (pathname !== nextPathName) history.push(nextPathName);
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-dev-root");
  if (el) {
    mount(el, {});
  }
}
export { mount };
