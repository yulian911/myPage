import React from "react";
import { NavMobileList, StyledLinkMobile } from "./MobileStyle";

interface IProps {
  activeClass: string;
  spy: boolean;
  to: string;
  children: React.ReactNode;
  onClick(): void;
}

const MobileItem = ({ activeClass, spy, to, children, onClick }: IProps) => {
  return (
    <>
      <NavMobileList>
        <StyledLinkMobile
          activeClass={activeClass}
          spy={spy}
          to={to}
          onClick={onClick}
        >
          {children}
        </StyledLinkMobile>
      </NavMobileList>
    </>
  );
};

export default MobileItem;
