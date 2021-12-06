import React from "react";
import styled from "styled-components";

function PhotoSection() {
  return (
    <Wrapper>
      <div></div>
      <button>등록 하기</button>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  button {
    background-color: #ff6600;
    outline-width: 0;
    border: none;
    font-size: 2rem;
    padding: 8px 16px;
    border-radius: 10px;
    cursor: pointer;
  }
  @media screen and (max-width: 991px) {
    button {
      width: 60vw;
      margin: auto;
      font-size: 1rem;
      transition: 0.3s linear;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export default PhotoSection;
