import styled from "styled-components";

export const Container = styled.main`
  padding: 30px 35px;
`;

export const Text = styled.p`
  margin-top: 42px;
  margin-bottom: ${({ small }) => (small ? "38px" : "53px")};
  font-family: "Roboto";
  line-height: 18.75px;
`;

export const Profiles = styled.div`
  display: flex;
  gap: 23px;
`;

export const Form = styled.form`
  padding-top: 26px;
`;

export const Title = styled.h1`
  font-family: "Roboto";
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 13px;
`;
