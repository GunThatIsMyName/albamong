import React from "react";
import styled from "styled-components";
import { FaRegMoneyBillAlt, FaUserTie } from "react-icons/fa";
import { GoLocation } from "react-icons/go";

const list = {
  id: 123456789,
  company: "Apple",
  job: "front-end Developer",
  info: "React JS workflow lorem sarh de monchdy delvem monemdy monlm,m ",
  image:
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
  salary: "3600",
  workAt: "서울 가산 디지털 단지",
  author: "이 준현",
};

function Job() {
  return (
    <Wrapper>
      <h1 className="job__company">회사명 : {list.company}</h1>
      <h3 className="job__work">업무 소개 : {list.job}</h3>
      <div className="job__info">
        <div>
          <FaRegMoneyBillAlt />  <h3>{list.salary}</h3>
        </div>
        <div>
          <GoLocation /> <h3>{list.workAt}</h3>
        </div>
        <div>
          <FaUserTie /> <h3>{list.author}</h3>
        </div>
      </div>

      <h3>업무내용</h3>
      <p>{list.info}</p>
      <div className="job__image">
        <img src={list.image} alt={list.job} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: teal;
  font-size: 1.5rem;
  width: 1200px;
  margin: 2rem auto;
  .job__company {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  .job__work {
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  .job__info {
    display: flex;
    div{
        display:flex;
        flex-direction:column;
        align-items:center;
    }
  }
`;

export default Job;
