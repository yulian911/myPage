import React, { useEffect, useState } from "react";
// import { Layout, Menu } from "antd";
import { Link } from "react-scroll";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  HeaderMobile,
  LogoMobile,
  NavMobile,
  NavMobileContainer,
  NavMobileList,
} from "./MobileStyle";
import { Header, Logo, Menu, Nav, Navbar } from "./NavigationStyle";

// const { Header } = Layout;

const Navigation = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [click, setClick] = useState(false);
  const [isResize, setIsResize] = useState(true);

  // const handleChange = () => {
  //   setClick(!click);
  // };
  //choose the screen size
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

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
  return (
    <>
      {isResize ? (
        <Header isScroll={isScroll} click isResize>
          <Menu>
            <Logo isScroll={isScroll} click isResize>
              <Link to="#">
                J<span>4</span>SK
                <span>13</span>R<span>.DEV</span>
              </Link>
            </Logo>
            <Navbar isResize={isResize} click isScroll>
              <Nav>
                <StyledLink
                  spy={true}
                  isScroll={isScroll}
                  activeClass="any"
                  to="/home"
                >
                  Home
                </StyledLink>
              </Nav>
              <Nav>
                <StyledLink
                  spy={true}
                  activeClass="any"
                  to="/about"
                  isScroll={isScroll}
                >
                  About
                </StyledLink>
              </Nav>
              <Nav>
                <StyledLink
                  spy={true}
                  activeClass="any"
                  to="/skills"
                  isScroll={isScroll}
                >
                  Skills
                </StyledLink>
              </Nav>
              <Nav>
                <StyledLink
                  spy={true}
                  activeClass="any"
                  to="/gallery"
                  isScroll={isScroll}
                >
                  Gallery
                </StyledLink>
              </Nav>
              <Nav>
                <StyledLink
                  spy={true}
                  activeClass="any"
                  to="/contact"
                  isScroll={isScroll}
                >
                  Contact
                </StyledLink>
              </Nav>
            </Navbar>
          </Menu>
        </Header>
      ) : (
        <HeaderMobile>
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
            <NavMobileList>
              <StyledLinkMobile activeClass="any" spy={true} to="/home">
                Home
              </StyledLinkMobile>
            </NavMobileList>
            <NavMobileList>
              <StyledLinkMobile activeClass="any" spy={true} to="/about">
                About
              </StyledLinkMobile>
            </NavMobileList>
            <NavMobileList>
              <StyledLinkMobile activeClass="any" spy={true} to="/#skills">
                Skills
              </StyledLinkMobile>
            </NavMobileList>
            <NavMobileList>
              <StyledLinkMobile activeClass="any" to="/#gallery">
                Gallery
              </StyledLinkMobile>
            </NavMobileList>
            <NavMobileList>
              <StyledLinkMobile activeClass="any" to="/#contact">
                Contact
              </StyledLinkMobile>
            </NavMobileList>
          </NavMobile>
        </HeaderMobile>
      )}
    </>
  );
};

export default Navigation;

interface IStyle {
  isScroll: boolean | null;
}


export const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  color: ${(props: IStyle) => (props.isScroll ? "black" : "white")};
  font-size: 18px;
  font-weight: 500;
  margin-left: 25px;
  transition: color 0.3s ease;
  overflow: hidden;
  :hover {
    color: ${(props: IStyle) => (props.isScroll ? "white" : "crimson")};
  }
  &.${(props) => props.activeClass} {
    color: ${(props: IStyle) => (props.isScroll ? "white" : "crimson")};
  }
`;
export const StyledLinkMobile = styled(Link)`
  text-decoration: none;
  display: block;
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin-left: 25px;
  transition: color 0.3s ease;
  overflow: hidden;
  :hover {
    color: crimson;
  }

  &.${(props) => props.activeClass} {
    color: red;
  }
`;
