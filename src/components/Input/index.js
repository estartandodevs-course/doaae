/* eslint-disable */
import { useState } from "react";
import { useField } from "formik";
import EyeSlashed from "../../assets/icons/eye-slashed.svg";
import Eye from "../../assets/icons/eye.svg";
import { InputElement, InputDefault } from "./styles";

const Input = ({ id, htmlFor, label, width, ...props }) => {
  const [_, meta] = useField(props);
  return (
    <InputElement width={width}>
      <InputDefault
        id={id}
        className="input-form"
        htmlFor={htmlFor}
        placeholder=" "
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

const InputPassword = ({ id, htmlFor, label, width, ...props }) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePassword = () => {
    setPasswordVisibility(!passwordVisibility);
  };
  const [_, meta] = useField(props);

  return (
    <InputElement width={width}>
      <InputDefault
        className="input-form"
        type={passwordVisibility ? "text" : "password"}
        id={id}
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
