import React from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}

const Button = ({ children }: IProps) => {
  return (
    <>
      <Btn>{children}</Btn>
    </>
  );
};

export default Button;

const Btn = styled.button`
  display: inline-block;
  background: crimson;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  padding: 10px 30px;
  margin-top: 10px;
  border-radius: 6px;
  border: 2px solid crimson;
  transition: all 0.3s ease;
  :hover {
    background-color: white;
    color: crimson;
  }
`;
