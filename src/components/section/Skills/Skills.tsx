import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import React from "react";
import { BoxContainer } from "../../ui/BoxContainer";
import { Container, Content } from "../../ui/Containers";
import { LeftBox } from "../../ui/LeftBox";
import { RightBox } from "../../ui/RightBox";
import SectionTitle from "../../ui/SectionTitle";
import LinearWithValueLabel from "./components/LinearWithValueLabel";
import { Animation } from "./components/skillStyle";
import Svg from "./components/Svg";

interface IId {
  id: string;
}

const Skills = ({ id }: IId) => {
  return (
    <Container id={id} background="black" justifyContent="center">
      <Content direction="column">
        <SectionTitle
          background="black"
          color="white"
          backgroundBefore="white"
          title=" I know"
        >
          My skills
        </SectionTitle>
        <Animation>
          <Svg />
          {/* <Typing>
            <Typewriter
              options={{
                strings: ["Developerem", "Designerem", "Freelancerem"],
                autoStart: true,
                loop: true,
              }}
            />
          </Typing> */}
        </Animation>

        <BoxContainer height="50%">
          <LeftBox
            justifyContent="center"
            style={{
              flexDirection: "column",
              padding: "10px 10px",
            }}
          >
            <h2 style={{ color: "white" }}>
              My creative skills {"&"} experiences.
            </h2>
            <p style={{ color: "white" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ratione error est recusandae consequatur, iusto illum
              deleniti quidem impedit, quos quaerat quis minima sequi.
              Cupiditate recusandae laudantium esse, harum animi aspernatur
              quisquam et delectus ipsum quam alias quaerat?
            </p>
          </LeftBox>
          <RightBox style={{ padding: "10px 10px" }}>
            <LinearWithValueLabel procent={70} title="HTML" />
            <LinearWithValueLabel procent={80} title="CSS" />
            <LinearWithValueLabel procent={60} title="JavaScript" />
            <LinearWithValueLabel procent={80} title="React" />
            <LinearWithValueLabel procent={70} title="Sass" />
            <LinearWithValueLabel procent={60} title="TypeScript" />
          </RightBox>
        </BoxContainer>
      </Content>
    </Container>
  );
};

export default Skills;
