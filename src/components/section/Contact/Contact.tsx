import React from "react";
import { BoxContainer } from "../../ui/BoxContainer";
import { Container, Content } from "../../ui/Containers";
import { LeftBox } from "../../ui/LeftBox";
import { RightBox } from "../../ui/RightBox";
import SectionTitle from "../../ui/SectionTitle";
import styled from "styled-components";
import Input from "../../../Helpers/Input/Input";
import Button from "../../ui/Button";
import { BsPersonFill } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SiMailDotRu } from "react-icons/si";
import { FaCopyright } from "react-icons/fa";
import Author from "./components/Author";
import { Link } from "react-scroll";
import AppWrapper from '../../../HOC/AppWrapper'



const Contact = () => {
  return (
    <Container  background="black" justifyContent="center">
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
          <LeftBox
            justifyContent="flex-start"
            style={{
              marginTop: "30px",
              flexDirection: "column",
              padding: "10px 10px",
            }}
          >
            <h2 style={{ color: "white" }}>Get in Touch</h2>
            <p style={{ color: "white", textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, ratione error est recusandae consequatur, iusto illum
              deleniti quidem impedit, quos quaerat quis minima sequi.
              Cupiditate recusandae laudantium esse, harum animi aspernatur
              quisquam et delectus ipsum quam alias quaerat?
            </p>
            <AuthorContainer>
              <AuthorContent>
                <BsPersonFill style={{ color: "crimson", fontSize: "40px" }} />
                <Author title="Name" discription="YM" />
              </AuthorContent>
              <AuthorContent>
                <HiOutlineLocationMarker
                  style={{ color: "crimson", fontSize: "40px" }}
                />
                <Author title="Address" discription="Bydgoszcz" />
              </AuthorContent>
              <AuthorContent>
                <SiMailDotRu style={{ color: "crimson", fontSize: "40px" }} />
                <Author title="Email" discription="abc@wp.pl" />
              </AuthorContent>
            </AuthorContainer>
          </LeftBox>
          <RightBox>
            <form>
              <InputBox>
                <Input width="50%" placeholder="Imię" />
                <Input width="50%" placeholder="email" />
              </InputBox>
              <InputBox>
                <Input width="100%" placeholder="Temat" />
              </InputBox>
              <InputBox>
                <TextArea />
              </InputBox>

              <Button>Send message</Button>
            </form>
          </RightBox>
        </BoxContainer>
        <Footer>
          <p>Created By</p>
          <Link style={{ color: "crimson" }} to="/home">
            J4SK13R
          </Link>
          <FaCopyright style={{ color: "white" }} />
          <p> 2021 All rights reserved.</p>
        </Footer>
      </Content>
    </Container>
  );
};

export default AppWrapper(Contact ,'/contact','black');

export const Footer = styled.div`
  width: 100%;
  height: 50px;
  /* background: blue; */
  display: flex;
  flex-direction: row;
  border-top: 2px solid white;
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  p {
    color: white;
  }
`;
export const AuthorContainer = styled.div`
  width: 100%;
  height: 50px;
  /* background: blue; */
  display: flex;
  flex-direction: column;
`;
export const AuthorContent = styled.div`
  margin-top: 20px;
  width: 30%;
  /* background: red; */
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  gap: 20px;
  font-size: 16px;
  align-items: center;
`;
export const InputBox = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  /* background-color: yellow; */
`;
export const TextArea = styled.textarea`
  height: 150px;
  width: 100%;
  border: 1px solid lightgrey;
  border-radius: 6px;
  outline: none;
  padding: 0 15px;
  font-size: 17px;
  font-family: "Poppins", sans-serif;
  transition: all 0.3s ease;
`;
