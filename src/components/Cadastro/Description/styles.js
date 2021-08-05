import styled from "styled-components";

export const Text = styled.p`
  margin-top: 42px;
  margin-bottom: ${({ small }) => (small ? "38px" : "53px")};
  font-family: "Roboto";
  line-height: 18.75px;
`;
