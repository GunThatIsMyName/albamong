import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";
import { AiTwotoneSetting } from "react-icons/ai";
import UserInfo from "./UserInfo";
import UserResume from "./UserResume";
import HomeRecent from "./HomeRecent";

function HomeUser() {
  const { user, handleUser } = useAppContext();

  return (
    <div>
      <Wrapper>
        <UserInfo user={user} handleUser={handleUser} />
        <UserResume />
      </Wrapper>
      <Wrapper>
        <HomeRecent />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.article`
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 1rem;
  max-width: 250px;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export default HomeUser;
