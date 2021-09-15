import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Container, Content } from "../module/Containers";
import Typewriter from "typewriter-effect";
import Logo from "./../../assets/logo1.png";
import ItemOne from "./../../assets/plik1.png";
import ItemTwo from "./../../assets/plik2.png";
import ItemThree from "./../../assets/plik3.png";
import ItemFour from "./../../assets/plik4.png";
import ImageModule from "../module/ImageModule";
import { Link } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";

interface IId {
  id: string;
}

const Home = ({ id }: IId) => {
  const [isResize, setIsResize] = useState(true);
  const handleResize = () => {
    if (window.innerWidth >= 960) {
      setIsResize(true);
    } else {
      setIsResize(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <Container id={id} background="black" justifyContent="center">
      <Content>
        <Welcome isResize={isResize}>
          <TextBox>
            <Text style={{ fontSize: "40px", color: "white" }}>Jestem</Text>
            <Text
              style={{ fontSize: "40px", color: "crimson", fontWeight: "bold" }}
            >
              Julian
            </Text>
          </TextBox>
          <TextBox>
            <Text style={{ fontSize: "40px", color: "white" }}>Jestem </Text>
          </TextBox>
          <TextBox>
            <Text
              style={{ fontSize: "40px", color: "crimson", fontWeight: "bold" }}
            >
              <Typewriter
                options={{
                  strings: ["Developerem", "Designerem", "Freelancerem"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Text>
          </TextBox>
        </Welcome>
        {isResize && (
          <Card>
            <ImageModule
              image={Logo}
              alt="logo"
              top="40%"
              left="40%"
              transform="36deg"
              transformOrigin="110px 80px"
            />
            <ImageModule
              image={ItemOne}
              alt="logo"
              top="20%"
              left="25%"
              transform="36deg"
              transformOrigin="110px 80px"
            />
            <ImageModule
              image={ItemTwo}
              alt="logo"
              top="20%"
              left="57%"
              transform="36deg"
              transformOrigin="110px 80px"
            />
            <ImageModule
              image={ItemThree}
              alt="logo"
              top="50%"
              left="67%"
              transform="36deg"
              transformOrigin="110px 80px"
            />
            <ImageModule
              image={ItemFour}
              alt="logo"
              top="68%"
              left="40%"
              transform="36deg"
              transformOrigin="110px 80px"
            />
          </Card>
        )}
      </Content>
      <ChewronDownBox to="/about">
        <FaChevronDownItem />
        <p style={{ textAlign: "center", color: "inherit" }}>Zobacz więcej</p>
      </ChewronDownBox>
    </Container>
  );
};

export default Home;

interface IStyle {
  isResize: boolean | null;
}
export const Welcome = styled.div`
  width: ${(props: IStyle) => (props.isResize ? "50%" : "100%")};
  height: 100%;
  /* background-color: yellow; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Card = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: blue; */
  /* transform-style: preserve-3d; */
  position: relative;
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
`;
export const Text = styled.p`
  margin: 0 10px;
  line-height: 50px; ;
`;
export const ChewronDownBox = styled(Link)`
  width: 200px;
  height: 200px;
  display: flex;
  color: white;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  justify-content: center;
  align-items: center;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 48%);
  :hover {
    color: crimson;
  }
`;

const shaceAnimation = keyframes`
0%{transform: translateY(0);}
    40%{transform: translateY(0);}
    41%{transform: translateY(20px);}
    42%{transform: translateY(-20px);}
    43%{transform: translateY(20px);}
    44%{transform: translateY(-20px);}
    45%{transform: translateY(20px);}
    46%{transform: translateY(-20px);}
    47%{transform: translateY(20px);}
    48%{transform: translateY(-20px);}
    49%{transform: translateY(20px);}
    50%{transform: translateY(0);}
    90%{transform: translateY(0);}
    91%{transform: translateY(20px);}
    92%{transform: translateY(-20px);}
    93%{transform: translateY(20px);}
    94%{transform: translateY(-20px);}
    95%{transform: translateY(20px);}
    96%{transform: translateY(-20px);}
    97%{transform: translateY(20px);}
    98%{transform: translateY(-20px);}
    99%{transform: translateY(20px);}
    100%{transform: translateY();}
`;
export const FaChevronDownItem = styled(FaChevronDown)`
  font-size: 100px;
  color: inherit;
  text-align: center;
  animation-name: ${shaceAnimation};
  animation-duration: 10s;
  animation-iteration-count: infinite;
`;
