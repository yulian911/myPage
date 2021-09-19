import { Link } from "react-scroll";
import styled from "styled-components";

export interface IStyle {
  isScroll: boolean | null;
  click: boolean | null;
  isResize: boolean | null;
}

export const NavMobile = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  top: 0;
  left: ${(props: IStyle) => (props.click ? "0" : "-100%")};
  background-color: black;
  width: 100%;
  height: 100vh;
  transition: all 0.3s ease;
`;
export const NavMobileList = styled.li`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  /* background-color: yellow; */
`;

export const HeaderMobile = styled.div`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 60px;
  display: flex;
  /* justify-content: flex-end; */
  transition: all 0.3s ease;
`;
export const NavMobileContainer = styled.div`
  /* background-color: red; */
  width: 100%;
  display: flex;
  z-index: 999;
  justify-content: flex-end;
  align-items: center;
  margin-right: 25px;
  transition: all 0.3s ease;
`;

export const LogoMobile = styled.div`
  a {
    text-decoration: none;
    color: white;
    font-size: 35px;
    font-weight: 600;
    transition: all 0.3s ease;
    span {
      color: crimson;
      transition: all 0.3s ease;
    }
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