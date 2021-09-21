import React from "react";
import styled from "styled-components";

interface IProps {
  background: string;
  backgroundBefore: string;
  children: React.ReactNode;
  color: string;
  title: string;
}
const SectionTitle = ({
  background,
  children,
  color,
  backgroundBefore,
  title,
}: IProps) => {
  return (
    <Title
      background={background}
      color={color}
      backgroundBefore={backgroundBefore}
      title={title}
    >
      <h2>{children}</h2>
    </Title>
  );
};

export default SectionTitle;

interface IStyle {
  background: string;
  color: string;
  backgroundBefore: string;
  title: string;
}
const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 70px;
  /* background: yellow; */
  h2 {
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    color: ${(props: IStyle) => props.color};
    margin-bottom: 20px;
    /* padding-bottom: 20px; */
    font-family: "Ubuntu", sans-serif;
    transform: translateX(-50%, -50%);
  }
  h2::after {
    content: "${(props: IStyle) => props.title}";
    position: absolute;
    bottom: -8px;
    left: 50%;
    width: 100px;
    font-size: 20px;
    color: crimson;
    padding: 0 5px;
    background: ${(props: IStyle) => props.background};
    transform: translateX(-50%);
  }
  h2::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 180px;
    height: 3px;
    background: ${(props: IStyle) => props.backgroundBefore};
    transform: translateX(-50%);
  }
`;
