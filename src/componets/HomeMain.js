import React from "react";
import styled from "styled-components";

function HomeMain() {
  return (
    <Wrapper>
      <article>
        <h4>구인 공고</h4>
        <div className="main__location">
        <h3>근무지</h3>
        </div>
        <p>
          <h3>업무내용</h3>
          <span>Front end Developer </span>
          <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="" />
        </p>
      </article>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: teal;
  width:100%;
  height:120vh;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
export default HomeMain;
