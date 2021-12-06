import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function MainJob({id,company,job,info,image,salary,workAt,author}) {
  return (
    <Wrapper className="arti">
      <h3>구인 공고</h3>
      <Link to={`/job/${id}`} className="job__detail">
        <div className="job__info">
          <div className="job__comp">
            <h3>회사명 : </h3>
            <p>{company} </p>
          </div>
          <div className="job__comp">
            <h3>업무 내용 :</h3>
            <p>{job}</p>
          </div>
        </div>
        <img
          className="job__img"
          src={image}
          alt={job}
        />
      </Link>
      <div className="article__footer">
        <p>근무지 : {workAt}</p>
        <h3 className="arti__aurhtour">작성자 : {author}</h3>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  box-shadow: 1px 1px 5px 2px rgb(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 1rem;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  .job__detail {
    display: flex;
    margin: 1rem 0;
    align-items: center;
    justify-content: space-between;
    .job__comp {
      display: flex;
      margin-bottom: 1rem;
    }
    .job__img{
        width:50%;
        object-fit:cover;
        max-height:130px;
        border-radius:5px;
    }
  }
  .article__footer {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 768px) {
    font-size: 1rem;
    h3 {
      margin-bottom: 0.5rem;
    }
    .job__detail {
      display: block;
      justify-content: flex-start;
      .job__comp {
        margin: 0;
      }
      .job__img {
        width: 100%;
        object-fit: cover;
        max-height: 130px;
      }
    }
  }
`;

export default MainJob;
