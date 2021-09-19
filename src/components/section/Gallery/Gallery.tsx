import React from "react";
import Carousel from "../../ui/Carousel";
import { Container, Content } from "../../ui/Containers";

interface IId {
  id: string;
}

const Gallery = ({ id }: IId) => {
  return (
    <Container id={id} background="white" justifyContent="center">
      <Content direction="column">
        <Carousel />
      </Content>
    </Container>
  );
};

export default Gallery;
