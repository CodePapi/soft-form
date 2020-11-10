import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const PhoneField = ({
  fieldName = "phone",
  setFieldValidity,
  prvtNonNumeric,
}) => {
  const [phone, setPhone] = useState({ value: "", isValid: false });

  useEffect(() => {
    setFieldValidity({ name: fieldName, validity: phone.isValid });
  }, [phone.isValid, fieldName, setFieldValidity]);

  const validatePhone = (ev) => {
    // const errors = {};
    const { value, validity } = ev.target;
    const isValid = validity.valid ? true : false;
    setPhone({ value, isValid });
  };

  return (
    <div className="mt-3">
      <label className="block text-gray-900 font-medium my-1" htmlFor="phone">
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
        id="phone"
        value={phone.value}
        onChange={validatePhone}
        onKeyPress={prvtNonNumeric}
        onBlur={(ev) => setPhone(phone)}
      />
    </div>
  );
};

PhoneField.propTypes = {
  fieldName: PropTypes.string,
  setFieldValidity: PropTypes.func.isRequired,
  prvtNonNumeric: PropTypes.func.isRequired,
};

export default PhoneField;
