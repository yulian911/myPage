import React from "react";
import { NavMobileList, StyledLinkMobile } from "./MobileStyle";

interface IProps {
  activeClass: string;
  spy: boolean;
  to: string;
  children: React.ReactNode;
}

const MobileItem = ({ activeClass, spy, to, children }: IProps) => {
  return (
    <>
      <NavMobileList>
        <StyledLinkMobile activeClass={activeClass} spy={spy} to={to}>
          {children}
        </StyledLinkMobile>
      </NavMobileList>
    </>
  );
};

export default MobileItem;
