import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media (max-width: 720px) {
    flex-direction: column-reverse;
    gap: 30px;
  }
`;

export const Text = styled.span`
  font-size: 18px;
  font-weight: 300;
  line-height: 21px;
`;

export const InputContainer = styled.label`
  width: 173px;
  height: 243px;
  background-color: #abe2db;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.4s ease;

  @media (max-width: 720px) {
    flex-direction: column-reverse;
    width: 140px;
    height: 133px;
    border-radius: 50%;
  }
`;

export const InputImage = styled.img``;

export const InputFile = styled.input`
  display: none;
`;
