import React, { useEffect } from "react";
// import { Layout, Menu } from "antd";

import {} from "./components/MobileScreen/components/MobileStyle";
import { useStateContext } from "../../context/stateContext";
import Mobile from "./components/MobileScreen/Mobile";
import FullScreen from "./components/FullScreen/FullScreen";

// const { Header } = Layout;

const Navigation = () => {
  const { setIsScroll, isResize, setIsResize } = useStateContext();
  //scroll
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  // chose size
  const handleResize = () => {
    if (window.innerWidth >= 960) {
      setIsResize(true);
    } else {
      setIsResize(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
  });
  return <>{isResize ? <FullScreen /> : <Mobile />}</>;
};

export default Navigation;
