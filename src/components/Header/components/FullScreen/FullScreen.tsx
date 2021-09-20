import React from "react";
import { Link } from "react-scroll";
import { useStateContext } from "../../../../context/stateContext";
import { FullScreenItem } from "./components/FullScreenItem";
import { Header, Logo, Menu, Navbar } from "./components/NavigationStyle";

const FullScreen = () => {
  const { isScroll, isResize } = useStateContext();
  return (
    <>
      <Header isScroll={isScroll} click isResize>
        <Menu>
          <Logo isScroll={isScroll} click isResize>
            <Link to="#">
              J<span>4</span>SK
              <span>13</span>R<span>.DEV</span>
            </Link>
          </Logo>
          <Navbar isResize={isResize} click isScroll>
            <FullScreenItem spy={true} activeClass="any" to="/home">
              Home
            </FullScreenItem>
            <FullScreenItem spy={true} activeClass="any" to="/about">
              About
            </FullScreenItem>
            <FullScreenItem spy={true} activeClass="any" to="/skills">
              Skills
            </FullScreenItem>
            <FullScreenItem spy={true} activeClass="any" to="/gallery">
              Gallery
            </FullScreenItem>
            <FullScreenItem spy={true} activeClass="any" to="/contact">
              Contact
            </FullScreenItem>
          </Navbar>
        </Menu>
      </Header>
    </>
  );
};

export default FullScreen;
