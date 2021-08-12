import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Text = styled.span`
  font-size: 18px;
  font-weight: 300;
  line-height: 21px;
`;

export const InputContainer = styled.label`
  width: 140px;
  height: 133px;
  background-color: #abe2db;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;

export const InputImage = styled.img``;

export const InputFile = styled.input`
  display: none;
`;
