import styled from "styled-components";
import { Link } from "react-scroll";

interface IStyle {
  isScroll: boolean | null;
  click: boolean | null;
  isResize: boolean | null;
}

export const Header = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: ${(props: IStyle) => (props.isScroll ? "60px" : "100px")};
  display: flex;
  justify-content: center;
  align-content: center;
  background: ${(props: IStyle) => (props.isScroll ? "crimson" : "black")};
  transition: all 0.3s ease;
`;

export const Menu = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Navbar = styled.div`
  width: ${(props: IStyle) => (props.isResize ? "50%" : "10%")};
  display: flex;
  flex-direction: row;
  /* background-color: white; */
  justify-content: flex-end;
  /* align-items: center; */
`;
export const Nav = styled.div`
  width: 100%;
  transition: all 0.3s ease;
`;
export const Logo = styled.div`
  width: 40%;
  a {
    text-decoration: none;
    color: ${(props: IStyle) => (props.isScroll ? "black" : "white")};
    font-size: 35px;
    font-weight: 600;
    transition: all 0.3s ease;
    span {
      color: ${(props: IStyle) => (props.isScroll ? "white" : "crimson")};
      transition: all 0.3s ease;
    }
  }
`;
interface INewStyle {
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
    color: ${(props: INewStyle) => (props.isScroll ? "white" : "crimson")};
  }
  &.${(props) => props.activeClass} {
    color: ${(props: INewStyle) => (props.isScroll ? "white" : "crimson")};
  }
`;
