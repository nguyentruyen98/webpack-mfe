import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";
import React, { useRef, useEffect } from "react";

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathName) history.push(nextPathName);
      },
      initialPaths: [history.location.pathname],
    });
    history.listen(onParentNavigate);
  }, []);
  return <div className="test" ref={ref} />;
};

export default MarketingApp;
