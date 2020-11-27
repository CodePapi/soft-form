import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const FullNameField = ({
  fieldName = "fullName",
  setFieldValidity,
  styleOnErr = (f) => f,
}) => {
  const [fullName, setFullName] = useState({ value: "", isValid: false });

  useEffect(() => {
    setFieldValidity({ name: fieldName, validity: fullName.isValid });
  }, [fullName.isValid, fieldName, setFieldValidity]);

  const validateFullName = (ev) => {
    // const errors = {};
    const { value, validity, id } = ev.target;
    const isValid =
      validity.valid &&
      value.split(" ")[0].length >= 2 &&
      value.split(" ")[1] &&
      value.split(" ")[1].length >= 2
        ? true
        : false;
    setFullName({ value, isValid });
    styleOnErr(id, isValid);
  };

  return (
    <div>
      <label
        className="block text-gray-900 font-medium my-1"
        htmlFor={fieldName}
      >
        Full name
      </label>
      <input
        className="tracking-wide appearance-none outline-none border-2 rounded w-full p-2 text-gray-900 leading-tight border-gray-400 focus:border-gray-600"
        type="text"
        placeholder="Chukwuma Ciroma"
        minLength="2"
        id={fieldName}
        value={fullName.value}
        required
        onChange={validateFullName}
        onBlur={(ev) => setFullName(fullName)}
      />
    </div>
  );
};

FullNameField.propTypes = {
  styleOnErr: PropTypes.func,
  fieldName: PropTypes.string,
  setFieldValidity: PropTypes.func.isRequired,
};
export default FullNameField;
