import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { AlboLoading } from "../utils/icons";
import styled from "styled-components";

function Loader() {
  return (
    <Wrapper>
      <img src={AlboLoading} alt="Alba-logo" />
      <AiOutlineLoading3Quarters className="loader__icon" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .loader__icon {
    font-size: 10rem;
    animation: rotate 0.8s linear infinite;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(350deg);
    }
  }
  @media screen and (max-width: 768px) {
    img {
      width: 70%;
    }
  }
`;

export default Loader;
