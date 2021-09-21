import styled from "styled-components";

interface IStyle {
  justifyContent: string;
}

export const LeftBox = styled.div`
  flex-basis: 600px;
  /* background-color: blue; */
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: ${(props: IStyle) => props.justifyContent};
`;
