import React from "react";
import styled from "styled-components";

function HomeRecent() {
  return (
    <Wrppaer>
      <h2>최근 알바 공고</h2>
      <li>
        <h5>구직</h5>
        <h3>front end</h3>
        <h4>가산 디지털단지</h4>
      </li>
      <li>
        <h5>구인</h5>
        <h3>React JS</h3>
        <h4>홍대</h4>
      </li>
      <li>
        <h5>구인</h5>
        <h3>JAVASCRIPT</h3>
        <h4>성수</h4>
      </li>
    </Wrppaer>
  );
}
const Wrppaer = styled.div`
  h2 {
    font-size: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  li {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: auto 1fr 1fr;
    padding: 0.3rem 1rem;
    h4 {
      margin-left: auto;
    }
  }
`;

export default HomeRecent;
