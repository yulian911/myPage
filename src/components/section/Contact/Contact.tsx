import React from "react";
import { Container, Content } from "../../ui/Containers";

interface IId {
  id: string;
}

const Contact = ({ id }: IId) => {
  return (
    <Container id={id} background="black" justifyContent="center">
      <Content direction="column"></Content>
    </Container>
  );
};

export default Contact;
