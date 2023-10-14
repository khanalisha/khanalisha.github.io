import React from "react";
import styled from "styled-components";

export const Divider = () => {
  return (
    <DIVIDER>
      <div></div>
      <div></div>
      <hr />
    </DIVIDER>
  );
};

const DIVIDER = styled.div`
  padding-block: 1rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  div {
    border: 6px solid var(--primary);
    border-radius: 50%;
  }
  hr {
    background-color: var(--primary);
    flex-grow: 1;
    border-radius: 10px;
    border: 3px solid var(--primary);
  }
`;
