import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const PasswordFields = ({ fieldName = "passwords", setFieldValidity }) => {
  const [password, setPassword] = useState({ value: "", isValid: false });
  const [confPassword, setConfPassword] = useState({
    value: "",
    isValid: false,
  });

  useEffect(() => {
    const areBothValid = password.isValid && confPassword.isValid;
    setFieldValidity({ name: fieldName, validity: areBothValid });
  }, [password.isValid, confPassword.isValid, fieldName, setFieldValidity]);

  const validatePassword = (ev) => {
    const { value, validity } = ev.target;
    const isValid = validity.valid ? true : false;
    setPassword({ value, isValid });
  };

  const validateConfPassword = (ev) => {
    const { value, validity } = ev.target;
    const isValid = validity.valid && value === password.value ? true : false;
    setConfPassword({ value, isValid });
  };

  return (
    <div>
      <div className="mt-3">
        <label
          className="block text-gray-900 font-medium my-1"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="tracking-wide appearance-none outline-none border-2 rounded w-full p-2 text-gray-900 leading-tight border-gray-400 focus:border-gray-600"
          type="password"
          id="password"
          required
          minLength="6"
          pattern="(?=[A-Za-z0-9@#_~`@*()\-\$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#_~`@*()\-\$%^&+!=]).*$"
          value={password.value}
          onChange={validatePassword}
          onBlur={(ev) => setPassword(password)}
        />
        <p className="mt-1 text-xs text-gray-600 italic">
          Minimum of 6 characters. Must have 1 uppercase, 1 number, 1 symbol
        </p>
      </div>
      <div className="mt-3">
        <label
          className="block text-gray-900 font-medium my-1"
          htmlFor="confPassword"
        >
          Confirm password
        </label>
        <input
          className="tracking-wide appearance-none outline-none border-2 rounded w-full p-2 text-gray-900 leading-tight border-gray-400 focus:border-gray-600"
          type="password"
          id="confPassword"
          required
          onPaste={(ev) => ev.preventDefault()}
          value={confPassword.value}
          onChange={validateConfPassword}
          onBlur={(ev) => setConfPassword(confPassword)}
        />
      </div>
    </div>
  );
};
PasswordFields.propTypes = {
  fieldName: PropTypes.string,
  setFieldValidity: PropTypes.func.isRequired,
};
export default PasswordFields;
