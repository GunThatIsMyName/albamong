import React, { useState } from "react";
import styled from "styled-components";
import { MdEmojiPeople } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function HomeAlba() {
  const [isAlbaOpen, setAlbaOpen] = useState(false);
  return (
    <Wrapper>
      <div className="alba__regi">
        <MdEmojiPeople className="alba__icon alba-color" />
        <Link className="alba__link" to="/create">구직 등록</Link>
      </div>
      <div className="alba__regi">
        <IoIosPeople className="alba__icon  comp-color" />
        <Link to="/create" className="alba__link">구인 등록</Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  box-shadow: 1px 1px 5px 2px rgb(0, 0, 0, 0.2);
  display: flex;
  position: relative;
  height: fit-content;
  border-radius: 10px;
  padding: 1rem;
  gap: 1rem;
  .alba__regi {
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-size: 1.4rem;
    }
    .alba__icon {
      font-size: 3rem;
    }
    .alba-color {
      color: #f0850c;
    }
    .comp-color {
      color: #2a8a13;
    }
    .alba__link {
      border: 1px solid #222;
      padding: 4px 7px;
      border-radius: 5px;
      background: transparent;
      cursor: pointer;
      &:hover {
        background: #222;
        color: #fff;
      }
    }
  }
  @media screen and (max-width: 1186px) {
    display: block;
  }
  @media screen and (max-width: 991px) {
    background-color: #222;
    color: #fff;
    position: fixed;
    bottom: 6rem;
    right: 2rem;
    /* display: none; */
    .alba__regi {
      .alba__link {
        color: #fff;
        border: 1px solid #fff;
        &:hover {
          background-color: #fff;
          color: #222;
        }
      }
    }
  }
`;

export default HomeAlba;
