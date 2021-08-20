import { useState } from "react";
import { InputElement } from "./styles";
import EyeSlashed from "../../assets/icons/eye-slashed.svg";
import Eye from "../../assets/icons/eye.svg";

// Input genérico
const Input = ({
  inputType,
  id,
  htmlFor,
  label,
  errorMessage,
  width,
  value,
}) => {
  return (
    <InputElement error={errorMessage} width={width}>
      <input
        className="input-form"
        type={inputType}
        id={id}
        placeholder=" "
        value={value}
      />
      <label className="label-form" htmlFor={htmlFor}>
        {label}
      </label>
      {errorMessage !== null ? (
        <span className="input-error-msg">{errorMessage}</span>
      ) : null}
    </InputElement>
  );
};

// Input de senha
const InputPassword = ({ id, htmlFor, label, errorMessage, width }) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  // Define o estado se é visível ou não
  const togglePassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  return (
    <InputElement error={errorMessage} width={width}>
      <input
        className="input-form"
        type={passwordVisibility ? "text" : "password"}
        id={id}
        placeholder=" "
      />
      <label className="label-form" htmlFor={htmlFor}>
        {label}
      </label>
      <img
        onKeyDown={togglePassword}
        onClick={togglePassword}
        role="presentation"
        className="input-icon"
        src={passwordVisibility ? Eye : EyeSlashed}
        alt="Eyer slash icon"
      />
      {errorMessage !== null ? (
        <span className="input-error-msg">{errorMessage}</span>
      ) : null}
    </InputElement>
  );
};

export { Input, InputPassword };
