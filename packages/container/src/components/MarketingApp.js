// import { mount } from "marketing/Marketing";
import React, { useRef, useEffect } from "react";

const MarketingApp = () => {
  const ref = useRef(null);
  // useEffect(() => {
  //   mount(ref.current);
  // }, []);
  return (
    <div className="test" ref={ref}>
      MarketingApps
    </div>
  );
};

export default MarketingApp;
