import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const EmailField = ({ fieldName = "email", setFieldValidity }) => {
  const [email, setEmail] = useState({ value: "", isValid: false });

  useEffect(() => {
    setFieldValidity({ name: fieldName, validity: email.isValid });
  }, [email.isValid, fieldName, setFieldValidity]);

  const validateEmail = (ev) => {
    // const errors = {};
    const { value, validity } = ev.target;
    const isValid = validity.valid ? true : false;
    setEmail({ value, isValid });
  };

  return (
    <div className="mt-3">
      <label className="block text-gray-900 font-medium my-1" htmlFor="email">
        Email
      </label>
      <input
        className="tracking-wide appearance-none outline-none border-2 rounded w-full p-2 text-gray-900 leading-tight border-gray-400 focus:border-gray-600"
        type="email"
        required
        placeholder="chukwuma@mailprovider.domain"
        id="email"
        value={email.value}
        onChange={validateEmail}
        onBlur={(ev) => setEmail(email)}
      />
    </div>
  );
};

EmailField.propTypes = {
  fieldName: PropTypes.string,
  setFieldValidity: PropTypes.func.isRequired,
};
export default EmailField;
