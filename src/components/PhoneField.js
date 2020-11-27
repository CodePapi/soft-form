import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const PhoneField = ({
  fieldName = "phone",
  setFieldValidity,
  prvtNonNumeric,
  styleOnErr = (f) => f,
}) => {
  const [phone, setPhone] = useState({ value: "", isValid: false });

  useEffect(() => {
    setFieldValidity({ name: fieldName, validity: phone.isValid });
  }, [phone.isValid, fieldName, setFieldValidity]);

  const validatePhone = (ev) => {
    // const errors = {};
    const { value, validity, id } = ev.target;
    const isValid = validity.valid ? true : false;
    setPhone({ value, isValid });
    styleOnErr(id, isValid);
  };

  return (
    <div className="mt-3">
      <label className="block text-gray-900 font-medium my-1" htmlFor={fieldName}>
        Phone number
      </label>
      <input
        className="tracking-wide appearance-none outline-none border-2 rounded w-full p-2 text-gray-900 leading-tight border-gray-400 focus:border-gray-600"
        type="tel"
        placeholder="080..."
        required
        pattern="^(0)?(80|81|70|90)[0-9]{8}"
        minLength="11"
        maxLength="11"
        id={fieldName}
        value={phone.value}
        onChange={validatePhone}
        onKeyPress={prvtNonNumeric}
        onBlur={(ev) => setPhone(phone)}
      />
    </div>
  );
};

PhoneField.propTypes = {
  styleOnErr: PropTypes.func,
  fieldName: PropTypes.string,
  setFieldValidity: PropTypes.func.isRequired,
  prvtNonNumeric: PropTypes.func.isRequired,
};

export default PhoneField;
