import React from "react";
import styled from "styled-components";
import HomeAlba from "../componets/HomeAlba";
import HomeMain from "../componets/HomeMain";
import HomeUser from "../componets/HomeUser";

function Home() {
  return (
    <Wrapper>
      <HomeUser />
      <HomeMain />
      <HomeAlba />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 1200px;
  margin: 2rem auto;
  padding:0 2rem;
  grid-gap: 2rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  @media screen and (max-width:768px){
      grid-template-columns:1fr;
  }
`;

export default Home;
