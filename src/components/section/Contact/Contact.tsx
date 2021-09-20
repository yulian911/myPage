import React from "react";
import { BoxContainer } from "../../ui/BoxContainer";
import { Container, Content } from "../../ui/Containers";
import { LeftBox } from "../../ui/LeftBox";
import { RightBox } from "../../ui/RightBox";
import SectionTitle from "../../ui/SectionTitle";

interface IId {
  id: string;
}

const Contact = ({ id }: IId) => {
  return (
    <Container id={id} background="black" justifyContent="center">
      <Content direction="column">
        <SectionTitle
          background="black"
          color="white"
          backgroundBefore="white"
          title="writte me "
        >
          Contact
        </SectionTitle>
        <BoxContainer height="100%">
          <LeftBox></LeftBox>
          <RightBox>
            <form>
              <div>
                <input />
                <input />
              </div>
              <div>
                <input />
              </div>
              <div>
                <textarea />
              </div>
              <button type="button">Send message</button>
            </form>
          </RightBox>
        </BoxContainer>
      </Content>
    </Container>
  );
};

export default Contact;
