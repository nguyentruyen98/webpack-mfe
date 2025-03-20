import { mount } from "marketing/MarketingApp";
import React, { useRef, useEffect } from "react";

const MarketingApp = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);
  return (
    <div className="test" ref={ref}>
      MarketingApps!!!
    </div>
  );
};

export default MarketingApp;
