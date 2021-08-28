import styled from "styled-components";
import { Field } from "formik";

const InputElement = styled.div`
  position: relative;
  width: ${({ width }) => width || "100%"};
  height: 3rem;
  font-family: "Poppins";
  font-size: 1.125rem;
  margin-bottom: 33px;

  .label-form {
    font-family: inherit;
    font-weight: 300;
    color: ${({ error }) => (error ? "#af4242" : "#393939")};
    font-size: inherit;
    position: absolute;
    top: 0.7rem;
    left: 0.8rem;
    padding: 0 0.5rem;
    cursor: text;
    transition: font-size 0.2s ease, top 0.2s ease, left 0.2s ease;
  }

  .input-form:focus ~ .label-form,
  .input-form:not(:placeholder-shown).input-form:not(:focus) ~ .label-form {
    font-size: 1rem;
    top: -0.7rem;
    left: 0.6rem;
    font-weight: 500;
    color: ${({ error }) => (error ? "#af4242" : "#389674")};
    background-color: #fff;
  }

  .input-error-msg {
    display: block;
    font-size: 0.875rem;
    color: #af4242;

    position: absolute;
    top: 50px;
    right: 0px;
  }

  .input-icon {
    cursor: pointer;
    position: absolute;
    top: 0.8rem;
    right: 0.5rem;
  }
`;

const InputDefault = styled(Field)`
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid;
  border-color: ${({ error }) => (error ? "#af4242" : "#389674")};
  border-radius: 0.625rem;
  width: 100%;
  height: 100%;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;
  padding-left: 11px;
  padding-right: 16px;
  box-sizing: border-box;
  outline: none;
  background: none;
  transition: border 0.2s ease;

  .input-form:focus {
    border: 3px solid;
    border-color: ${({ error }) => (error ? "#af4242" : "#389674")};
  }
`;
export { InputElement, InputDefault };
