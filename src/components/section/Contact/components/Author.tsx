import React from "react";
import styled from "styled-components";

interface IProps {
  title: string;
  discription: string;
}

const Author = ({ title, discription }: IProps) => {
  return (
    <div style={{ color: "white" }}>
      <p style={{ fontSize: "16px", fontWeight: "bold" }}>{title}</p>
      <p>{discription}</p>
    </div>
  );
};

export default Author;
