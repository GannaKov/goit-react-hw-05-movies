import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 8px;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  border: 1px solid black;
  border-radius:5%;
  margin-bottom:8px;

  :hover {
    color: orangered;
  }
`;