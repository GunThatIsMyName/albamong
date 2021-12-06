import React from "react";
import styled from "styled-components";

function MainCategory() {
  return (
    <Wrapper className="main__article">
      <h3>공고</h3>
      <h3>근무지</h3>
      <h3 className="article__job">업무내용</h3>
      <h3 className="article__author">작성자</h3>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;
  margin: 1rem;
  grid-gap: 1rem;
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  .article__job{
    max-width:400px;
    margin:auto;
  }
  @media screen and (max-width:768px){
    .article__author{
      display:none;
    }
  }
`;

export default MainCategory;
