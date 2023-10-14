import React, { Children } from "react";
import styled from "styled-components";

export const Container = ({ children }) => {
  return <CONTAINER>{children}</CONTAINER>;
};
const CONTAINER = styled.div`
  width: min(80rem, 100%);
  padding-inline: 1rem;
  margin-inline: auto;
`;
