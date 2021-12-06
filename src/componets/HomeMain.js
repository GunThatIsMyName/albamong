import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MainCategory from "./MainCategory";
import MainJob from "./MainJob";

function HomeMain() {
  return (
    <Wrapper>
      <MainJob />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  height: 120vh;

`;
export default HomeMain;
