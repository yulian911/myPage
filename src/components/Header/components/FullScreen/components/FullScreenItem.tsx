import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { useStateContext } from "../../../../../context/stateContext";
import { Nav } from "./NavigationStyle";

interface IProps {
  activeClass: string;
  spy: boolean;
  to: string;
  children: React.ReactNode;
}

export const FullScreenItem = ({ spy, activeClass, to, children }: IProps) => {
  const { isScroll } = useStateContext();

  return (
    <>
      <Nav>
        <StyledLink
          spy={spy}
          isScroll={isScroll}
          activeClass={activeClass}
          to={to}
        >
          {children}
        </StyledLink>
      </Nav>
    </>
  );
};

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
