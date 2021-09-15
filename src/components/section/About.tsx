import React from "react";
import styled from "styled-components";
import { Container, Content } from "../module/Containers";

interface IId {
  id: string;
}

const About = ({ id }: IId) => {
  return (
    <Container id={id} background="white" justifyContent="center">
      <Content>
        <Title>
          <h2>About</h2>
        </Title>
      </Content>
    </Container>
  );
};

export default About;

export const Title = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 150px;
  /* background: yellow; */
  h2 {
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    /* margin-bottom: 60px; */
    /* padding-bottom: 20px; */
    font-family: "Ubuntu", sans-serif;
    transform: translateX(-50%, -50%);
  }
  h2::after {
    content: "Who am I";
    position: absolute;
    bottom: -8px;
    left: 50%;
    width: 100px;
    font-size: 20px;
    color: crimson;
    padding: 0 5px;
    background: white;
    transform: translateX(-50%);
  }
  h2::before {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 180px;
    height: 3px;
    background: #111;
    transform: translateX(-50%);
  }
`;
