import React, { FC } from "react";
import styled from "styled-components";

interface IImage {
  //   children: React.ReactNode;
  image: string;
  alt: string;
  top: any;
  left: any;
  transform: any;
  transformOrigin: any;
}

const ImageModule: FC<IImage> = ({
  image,
  alt,
  top,
  left,
  transformOrigin,
  transform,
}) => {
  return (
    <Image
      src={image}
      alt={alt}
      top={top}
      left={left}
      transformOrigin={transformOrigin}
      transform={transform}
    />
  );
};

export default ImageModule;

interface ISize {
  top: any;
  left: any;
  transform: any;
  transformOrigin: any;
}
export const Image = styled.img`
  width: 30%;
  z-index: 1;
  position: absolute;
  transition: 0.3s ease;
  top: ${(props: ISize) => props.top};
  left: ${(props: ISize) => props.left};
  :hover {
    transform: rotate(${(props: ISize) => props.transform});
    transform-origin: (${(props: ISize) => props.transformOrigin});
  }
`;
