import React, { useState } from "react";
import styled from "styled-components";
import { images } from "./../../Helpers/CarouselData";
import { ArrowBackIos } from "@material-ui/icons";
import { ArrowForwardIos } from "@material-ui/icons";

const Carousel = () => {
  const [currImg, setCurrImg] = useState<number>(4);

  return (
    <CarouselBox>
      <CarouselInner style={{ backgroundImage: `url(${images[currImg].img})` }}>
        <Left
          onClick={() => {
            currImg > 0 ? setCurrImg(currImg - 1) : setCurrImg(4);
          }}
        >
          <ArrowBackIos style={{ fontSize: "55px" }} />
        </Left>
        <Center></Center>
        <Right
          onClick={() => {
            currImg < 4 ? setCurrImg(currImg + 1) : setCurrImg(0);
          }}
        >
          <ArrowForwardIos style={{ color: "white", fontSize: "55px" }} />
        </Right>
      </CarouselInner>
    </CarouselBox>
  );
};

export default Carousel;

// const CarouselContent = styled.div`
//   width: 100%;
//   height: 700vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

const Left = styled.div`
  flex: 10%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 55px;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;
const Center = styled.div`
  flex: 80%;
  height: 100%;
  /* background-color: rgba(255, 0, 0, 0.6); */
`;
const Right = styled.div`
  flex: 10%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  :hover {
    opacity: 0.8;
  }
`;

const CarouselBox = styled.div`
  width: 100%;
  height: 700px;
  margin-top: 10px;

  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CarouselInner = styled.div`
  height: 100%;
  width: 100%;
  background: no-repeat center;
  background-size: cover;
  display: flex;
`;
