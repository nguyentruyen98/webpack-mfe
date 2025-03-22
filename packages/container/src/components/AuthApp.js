import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";
import React, { useRef, useEffect } from "react";

const AuthApp = ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onSignIn,
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathName) history.push(nextPathName);
      },
      initialPaths: [history.location.pathname],
    });
    history.listen(onParentNavigate);
  }, []);
  return <div className="authApp" ref={ref} />;
};

export default AuthApp;
