import React from "react";
import Carousel from "../../ui/Carousel";
import { Container, Content } from "../../ui/Containers";
import SectionTitle from "../../ui/SectionTitle";
import AppWrapper from '../../../HOC/AppWrapper'


const Gallery = () => {
  return (
    <Container background="white" justifyContent="center">
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

export default AppWrapper(Gallery ,'/gallery' ,'white');
