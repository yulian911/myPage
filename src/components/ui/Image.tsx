import React from "react";
import styled from "styled-components";

interface IProps {
  //   children: React.ReactNode;
  src: string;
  alt: string;
  width: string;
  radius: string;
}

const Image = ({ src, alt, width, radius }: IProps) => {
  return <ImageBox src={src} alt={alt} width={width} radius={radius} />;
};

export default Image;

interface IStyle {
  width: string;
  radius: string;
}
export const ImageBox = styled.img`
  width: ${(props: IStyle) => props.width};
  border-radius: ${(props: IStyle) => props.radius};
`;
