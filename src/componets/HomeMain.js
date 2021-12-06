import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { list } from "../utils/helps";
import MainCategory from "./MainCategory";
import MainJob from "./MainJob";

function HomeMain() {
  return (
    <Wrapper>
      {list.map(item=>{
        return <MainJob key={item.id} {...item} />
      })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  height: 120vh;

`;
export default HomeMain;
