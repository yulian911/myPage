import React from "react";
import styled from "styled-components";

interface IProps {
  width: string;
  placeholder: string;
}

const Input = ({ width, placeholder }: IProps) => {
  return <InputBox width={width} placeholder={placeholder} />;
};

export default Input;

interface IStyle {
  width: string;
}

export const InputBox = styled.input`
  height: 40px;
  width: ${(props: IStyle) => props.width};
  border: 1px solid lightgrey;
  border-radius: 6px;
  outline: none;
  padding: 0 15px;
  font-size: 17px;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s ease;
`;
