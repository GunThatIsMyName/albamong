import React from "react";
import { AiTwotoneSetting } from "react-icons/ai";
import styled from "styled-components";

function UserInfo({ user, handleUser }) {
  return (
    <Wrapper className="user__info">
      <div className="user__name">
        <h1>{user.name} 님 </h1>
        <AiTwotoneSetting onClick={handleUser} />
      </div>
      <div className="user__img">
        <img src={user.image} alt="userimage" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom:1rem;
  border-bottom:2px solid rgba(0, 0, 0, 0.1);
  .user__name {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    h1 {
      margin-right: 1rem;
    }
    svg {
      &:hover {
        cursor: pointer;
        transition: 0.3s linear;
        transform: scale(1.1);
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
  .user__img {
    text-align: right;
    img {
      width: 3rem;
      border: 3px solid #fff;
      border-radius: 50%;
    }
  }
  @media screen and (max-width:768px){
    padding-bottom:0;
      .user__name{
          font-size:1rem;
      }
      .user__img{
          img{
              width:2rem;
              height:2rem;
          }
      }
  }
`;

export default UserInfo;
