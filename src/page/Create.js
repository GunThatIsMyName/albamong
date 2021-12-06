import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import EmployeeV from "../componets/EmployeeV";
import EmployerV from "../componets/EmployerV";

function Create() {
  const { state } = useLocation();
  const employee = state !== null && state === "employee";
  if (employee) return <EmployeeV />;
  return <EmployerV />;
}

export default Create;
