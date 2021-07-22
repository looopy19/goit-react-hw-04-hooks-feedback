import styled from "@emotion/styled";

export const Btn = styled.button`
  width: 140px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  transition: all 250ms ease-in-out;
  
 
  
  &:hover,
  &:focus-visible {
    background-color: ghostwhite;
  }
`;