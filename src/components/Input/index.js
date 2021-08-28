/* eslint-disable */
import { useState } from "react";
import { useField } from "formik";
import EyeSlashed from "../../assets/icons/eye-slashed.svg";
import Eye from "../../assets/icons/eye.svg";
import { InputElement, InputDefault } from "./styles";

const Input = ({ id, htmlFor, label, width, error, ...props }) => {
  const [_, meta] = useField(props);
  return (
    <InputElement width={width} error={error}>
      <InputDefault
        id={id}
        className="input-form"
        htmlFor={htmlFor}
        placeholder=" "
        error={error}
        {...props}
      />
      {meta.error && meta.touched ? (
        <span className="input-error-msg">{meta.error}</span>
      ) : null}
      <label className="label-form" htmlFor={htmlFor}>
        {label}
      </label>
    </InputElement>
  );
};

const InputPassword = ({ id, htmlFor, label, width, error, ...props }) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };
  const [_, meta] = useField(props);

  return (
    <InputElement width={width} error={error}>
      <InputDefault
        className="input-form"
        type={passwordVisibility ? "text" : "password"}
        id={id}
        error={error}
        placeholder=" "
        {...props}
      />
      {meta.error && meta.touched ? (
        <span className="input-error-msg">{meta.error}</span>
      ) : null}
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
    </InputElement>
  );
};

export { Input, InputPassword };
