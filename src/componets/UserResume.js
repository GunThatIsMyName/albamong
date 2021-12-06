import React from "react";
import styled from "styled-components";

function UserResume() {
  return (
    <Wrapper className="user__resume">
      <h3>이력서 관리</h3>
      <div className="user__form">
        <label htmlFor="experience">경력 : </label>
        <input
          id="experience"
          type="text"
          placeholder="경력사항을 기입해주세요"
        />
      </div>
      <div className="user__form">
        <label htmlFor="experience">직종 : </label>
        <input type="text" placeholder="희망직종 기입해주세요" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  h3 {
    font-size: 1.3rem;
    font-weight: bold;
    margin: 1rem 0;
  }
  .user__form{
      display:grid;
      grid-template-columns:auto 1fr;
      align-items:center;
      margin-bottom: 1rem;
      label{
              margin-right:1rem;
          }
      input {
        width: 80%;
        padding: 8px 16px;
        border-radius: 10px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        background: transparent;
        font-size: 1rem;
        outline-width: 0;
  }
  }
  @media screen and (max-width:768px){
      h3{
          margin:0;
          font-size:1.2rem;
      }
      .user__form{
          label{
              margin-right:0;
          }
          input{
              padding:4px 8px;
              font-size:0.9rem;
          }
      }
  }
`;

export default UserResume;
