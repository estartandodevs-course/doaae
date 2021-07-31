import styled from "styled-components";

const InputElement = styled.div`
  // Estilização da div que segura o Input e Label
  position: relative;
  width: ${(props) => (props.width ? `${props.width}px` : "309px")};
  height: 3rem;
  font-family: "Poppins";
  font-size: 1.125rem;
  margin-bottom: 25px;

  // Mensagem de error
  .input-error-msg {
    display: block;
    font-size: 0.875rem;
    color: #af4242;

    position: absolute;
    top: 50px;
    right: 0px;
  }

  // Estilização do input e label
  .input-form {
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid;
    border-color: ${(props) => (props.error !== null ? "#af4242" : "#389674")};
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
  }

  .input-form:focus {
    border: 3px solid;
    border-color: ${(props) => (props.error !== null ? "#af4242" : "#389674")};
  }

  .label-form {
    font-family: inherit;
    font-weight: 300;
    color: ${(props) => (props.error !== null ? "#af4242" : "#393939")};
    font-size: inherit;

    position: absolute;
    top: 0.7rem;
    left: 0.8rem;
    padding: 0 0.5rem;
    cursor: text;
    transition: font-size 0.2s ease, top 0.2s ease, left 0.2s ease;
  }

  // Animação do input
  .input-form:focus ~ .label-form,
  .input-form:not(:placeholder-shown).input-form:not(:focus) ~ .label-form {
    font-size: 1rem;
    top: -0.7rem;
    left: 0.6rem;
    font-weight: 500;
    color: ${(props) => (props.error !== null ? "#af4242" : "#389674")};
    background-color: #fff;
  }

  // Posicionamento do ícone
  .input-icon {
    cursor: pointer;
    position: absolute;
    top: 0.8rem;
    right: 0.5rem;
  }
`;

export { InputElement };
