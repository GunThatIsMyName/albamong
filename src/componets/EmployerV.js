import React from "react";
import styled from "styled-components";
import { Provinceslist } from "../utils/helps";
import PhotoSection from "./PhotoSection";

function EmployerV() {
  return (
    <Wrapper>
      <form className="employee">
        <h3>구인 등록 하기</h3>
        <input type="text" placeholder="회사명을 기입하여 주세요" />
        <input type="text" placeholder="업무내용을 기입하여 주세요" />
        <input type="text" placeholder="급여를 기입하여 주세요" />
        <div className="selection">
          <label htmlFor="employeeLocation">회사 주소</label>
          <select
            className="employee__seclect"
            name="loaction"
            id="employeeLocation"
          >
            {Provinceslist.map((item) => {
              return (
                <option key={item} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <label className="input-file-button" htmlFor="input-file">
          회사 소개 업로드
        </label>
        <input type="file" id="input-file" style={{ display: "none" }} />
      </form>
      <PhotoSection />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: calc(100vh - 4rem);
  max-width: 900px;
  margin: auto;
  display: grid;
  place-items: center;
  .employee {
    display: flex;
    width: 100%;
    flex-direction: column;
    h3 {
      font-size: 3rem;
      margin-bottom: 4rem;
    }
    input {
      font-size: 2rem;
      border: none;
      background: transparent;
      padding: 8px 16px;
      margin: 1rem 0rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      outline-width: 0;
    }
    .selection {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      margin-bottom: 1rem;
      grid-gap: 1rem;
      font-size: 2rem;
      padding: 0 1rem;
      select {
        height: 2rem;
        font-size: 1.5rem;
        width: 70%;
        margin-left: auto;
      }
    }
    .input-file-button {
      width: 50%;
      margin: auto;
      text-align: center;
      font-size: 2rem;
      padding: 6px 25px;
      border: 1px solid #ff6600;
      color: #222;
      border-radius: 4px;
      cursor: pointer;
      transition: 0.3s linear;
      &:hover {
        background-color: #ff6600;
        color: #fff;
      }
    }
  }
  @media screen and (max-width: 991px) {
    .employee {
      width: 90%;
      h3 {
        text-align: center;
        margin: 1rem 0;
        font-size: 1.2rem;
      }
      input {
        font-size: 1.2rem;
        margin: 0;
      }
      .selection {
        margin: 1rem 0;
        font-size: 1rem;
        select {
          height: 1.4rem;
          font-size: 1rem;
        }
      }
      .input-file-button {
        font-size: 1rem;
      }
    }
  }
`;

export default EmployerV;
