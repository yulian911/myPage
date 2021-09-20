import React from "react";
import { Link } from "react-scroll";
import {
  HeaderMobile,
  LogoMobile,
  NavMobile,
  NavMobileContainer,
  NavMobileList,
} from "./components/MobileStyle";
import { FaBars, FaTimes } from "react-icons/fa";
import { useStateContext } from "../../../../context/stateContext";
import MobileItem from "./components/MobileItem";
const Mobile = () => {
  const { isScroll, click, setClick } = useStateContext();
  return (
    <>
      <HeaderMobile isScroll={isScroll} click isResize>
        <NavMobileContainer onClick={() => setClick(!click)}>
          {click ? (
            <FaTimes style={{ color: "white" }} />
          ) : (
            <FaBars style={{ color: "white" }} />
          )}
        </NavMobileContainer>

        <NavMobile isScroll={isScroll} click={click} isResize={null}>
          <NavMobileList>
            <LogoMobile>
              <Link to="#">
                J<span>4</span>SK
                <span>13</span>R<span>.DEV</span>
              </Link>
            </LogoMobile>
          </NavMobileList>
          <MobileItem
            activeClass="any"
            spy={true}
            to="/home"
            onClick={() => setClick(false)}
          >
            Home
          </MobileItem>
          <MobileItem
            activeClass="any"
            spy={true}
            to="/about"
            onClick={() => setClick(false)}
          >
            About
          </MobileItem>
          <MobileItem
            activeClass="any"
            spy={true}
            to="/skills"
            onClick={() => setClick(false)}
          >
            Skills
          </MobileItem>
          <MobileItem
            activeClass="any"
            spy={true}
            to="/gallery"
            onClick={() => setClick(false)}
          >
            Gallery
          </MobileItem>
          <MobileItem
            activeClass="any"
            spy={true}
            to="/contact"
            onClick={() => setClick(false)}
          >
            Contact
          </MobileItem>
        </NavMobile>
      </HeaderMobile>
    </>
  );
};

export default Mobile;
