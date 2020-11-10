import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CardPinField = ({
  prvtNonNumeric,
  fieldName = "cardPin",
  setFieldValidity,
}) => {
  const [cardPin, setCardPin] = useState({ value: "", isValid: false });

  useEffect(() => {
    setFieldValidity({ name: fieldName, validity: cardPin.isValid });
  }, [cardPin.isValid, fieldName, setFieldValidity]);

  const validateCardPin = (ev) => {
    // const errors = {};
    const { value, validity } = ev.target;
    const isValid = validity.valid ? true : false;
    setCardPin({ value, isValid });
  };

  return (
    <div className="mt-3">
      <label className="block text-gray-900 font-medium my-1" htmlFor="cardPin">
        Card PIN
      </label>
      <input
        className="tracking-wide appearance-none outline-none border-2 rounded w-full p-2 text-gray-900 leading-tight border-gray-400 focus:border-gray-600"
        type="password"
        id="cardPin"
        required
        pattern="^\d+$"
        minLength="4"
        maxLength="4"
        value={cardPin.value}
        onKeyPress={prvtNonNumeric}
        onChange={validateCardPin}
      />
    </div>
  );
};

CardPinField.propTypes = {
  fieldName: PropTypes.string,
  prvtNonNumeric: PropTypes.func.isRequired,
  setFieldValidity: PropTypes.func.isRequired,
};
export default CardPinField;
