import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { useStateContext } from "../../../../context/stateContext";
import { FullScreenItem } from "./components/FullScreenItem";
import { Header, Logo, Menu, Nav, Navbar } from "./components/NavigationStyle";

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

            {/* <Nav>
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
            </Nav> */}
          </Navbar>
        </Menu>
      </Header>
    </>
  );
};

export default FullScreen;
