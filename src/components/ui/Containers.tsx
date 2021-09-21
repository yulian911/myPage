import styled from "styled-components";

interface IStyled {
  background: string | null;
  justifyContent: string | null;
}

interface IStyledContent {
  direction: string | null;
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
  width: 100%;
  width: 100%;
  display: flex;
  flex-direction: ${(props: IStyledContent) => props.direction};
`;
