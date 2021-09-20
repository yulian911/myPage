import React from "react";
import Carousel from "../../ui/Carousel";
import { Container, Content } from "../../ui/Containers";
import SectionTitle from "../../ui/SectionTitle";

interface IId {
  id: string;
}

const Gallery = ({ id }: IId) => {
  return (
    <Container id={id} background="white" justifyContent="center">
      <Content direction="column">
        <SectionTitle
          background="white"
          color="black"
          backgroundBefore="#111"
          title="My gallery"
        >
          Gallery
        </SectionTitle>
        <Carousel />
      </Content>
    </Container>
  );
};

export default Gallery;
