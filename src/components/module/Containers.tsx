import styled from "styled-components";

interface IStyled {
  background: string;
  justifyContent: string;
}
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: ${(props: IStyled) => props.background};
  justify-content: ${(props: IStyled) => props.justifyContent};
  padding-top: 100px;
`;

export const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
`;
