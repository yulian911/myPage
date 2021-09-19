import styled from "styled-components";

interface IStyle {
  height: string;
}
export const BoxContainer = styled.div`
  height: ${(props: IStyle) => props.height};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
