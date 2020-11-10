import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CardNumberField = ({
  fieldName = "cardNumber",
  prvtNonNumeric,
  setFieldValidity,
}) => {
  const [cardNumber, setCardNumber] = useState({ value: "", isValid: true });

  useEffect(() => {
    setFieldValidity({ name: fieldName, validity: cardNumber.isValid });
  }, [cardNumber.isValid, fieldName, setFieldValidity]);

  const validateCardNumber = (ev) => {
    let { value, validity } = ev.target;
    const isValid = validity.valid ? true : false;
    if (value && value.length) {
      value = value.replace(/\s/g, ""); // remove all spaces
      value = value
        .split("")
        .map((char, i, charsArr) => {
          if ((i + 1) % 4 === 0) {
            return `${char} `; // append a space to every 4th character
          }
          return char;
        })
        .join("");
      if (value.length >= 16) {
        value = value.trim();
      }
    }
    document.getElementById(ev.target.id).value = value;
    setCardNumber({ value, isValid });
  };

  return (
    <div className="mt-3">
      <label
        className="block text-gray-900 font-medium my-1"
        htmlFor="cardNumber"
      >
        Credit/Debit card number
      </label>
      <input
        className="tracking-wider appearance-none outline-none border-2 rounded w-full p-2 text-gray-900 leading-tight border-gray-400 focus:border-gray-600"
        type="text"
        placeholder="XXXX XXXX XXXX XXXX"
        maxLength="19"
        minLength="19"
        pattern="(\d{4} \d{4} \d{4} \d{4})"
        id="cardNumber"
        required
        defaultValue={cardNumber.value}
        onKeyPress={prvtNonNumeric}
        onChange={validateCardNumber}
        onPaste={(ev) => ev.preventDefault()}
        onKeyUp={(ev) => {
          // to enable backspacing without issues...
          let { value, validity } = ev.target;
          const isValid = validity.valid;
          if (ev.key === "Backspace") {
            value = value.substring(0, value.length);
          }
          if (ev.key === "Backspace" && value.length % 5 === 0) {
            value = value.substring(0, value.length - 1);
          }
          document.getElementById(ev.target.id).value = value;
          setCardNumber({ value, isValid });
        }}
      />
    </div>
  );
};

CardNumberField.propTypes = {
  fieldName: PropTypes.string,
  prvtNonNumeric: PropTypes.func.isRequired,
  setFieldValidity: PropTypes.func.isRequired,
};
export default CardNumberField;
