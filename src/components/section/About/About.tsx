import React from "react";

import { Container, Content } from "../../ui/Containers";
import Image from "../../ui/Image";

import {
  TitleBox,
  Text,
  TextBoxAbout,
  ButtonBox,
  TitleText,
} from "./aboutStyle";
import Man from "./../../../assets/man.jpg";
import Button from "../../ui/Button";
import SectionTitle from "../../ui/SectionTitle";
import { BoxContainer } from "../../ui/BoxContainer";
import { LeftBox } from "../../ui/LeftBox";
import { RightBox } from "../../ui/RightBox";

interface IId {
  id: string;
}

const About = ({ id }: IId) => {
  return (
    <Container id={id} background="white" justifyContent="center">
      <Content direction="column">
        <SectionTitle
          background="white"
          color="black"
          backgroundBefore="#111"
          title="Who I am"
        >
          About
        </SectionTitle>
        <BoxContainer height="100%">
          <LeftBox>
            <Image src={Man} alt="man" width="80%" radius="15px" />
          </LeftBox>
          <RightBox>
            <TitleBox>
              <TitleText>O mnie</TitleText>
            </TitleBox>
            <TextBoxAbout>
              <Text>
                Inżynier zarządzania projektami graficznymi , pasjonat IT i
                technologii. Członek zespołu informatycznego AIBARC. Od kilku
                miesięcy rozwija się zawodowo jako Frond-End Developer.
                Projektuje strony i blogi internetowe w technologii : HTML , CSS
                , JavaScript , jQuery , React, WordPress ,PHP . Szybko przyswaja
                i uczy się nowych rzeczy podwyższając swoje umiejętności w
                zakresie programowania.
              </Text>
            </TextBoxAbout>
            <ButtonBox>
              <Button>Download CV</Button>
            </ButtonBox>
          </RightBox>
        </BoxContainer>
      </Content>
    </Container>
  );
};

export default About;
