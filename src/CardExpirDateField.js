import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CardExpirDateField = ({
  setFieldValidity,
  prvtNonNumeric,
  fieldName = "cardExpirDate",
}) => {
  const [cardExpirDate, setCardExpirDate] = useState({
    value: "",
    isValid: false,
  });

  useEffect(() => {
    setFieldValidity({ name: fieldName, validity: cardExpirDate.isValid });
  }, [cardExpirDate.isValid, setFieldValidity, fieldName]);

  const validateCardExpirDate = (ev) => {
    let { value, validity } = ev.target;
    const isValid = validity.valid;
    if (value && value.length > 1) {
      value = value.replace(/\//g, ""); // remove all forward slashes from input value
      value = Array.from(value); // place 1 forward slash at index 2 of the text input
      value.splice(2, 0, "/");
      value = value.join("");
    }
    document.getElementById(ev.target.id).value = value;
    setCardExpirDate({ value, isValid });
  };

  return (
    <div className="mt-3">
      <label
        className="block text-gray-900 font-medium my-1"
        htmlFor="cardExpirDate"
      >
        Expiration date
      </label>
      <input
        className="tracking-wide appearance-none outline-none border-2 rounded w-full p-2 text-gray-900 leading-tight border-gray-400 focus:border-gray-600"
        type="text"
        placeholder="MM/YY"
        id="cardExpirDate"
        required
        minLength="5"
        maxLength="5"
        pattern="^(0[1-9]|1[0-2])\/\d{2}$"
        defaultValue={cardExpirDate.value}
        onKeyPress={prvtNonNumeric}
        onChange={validateCardExpirDate}
        onKeyUp={(ev) => {
          // to enable backspacing without issues...
          let { value, validity } = ev.target;
          const isValid = validity.valid;
          if (ev.key === "Backspace" && value.length === 3) {
            value = value.substring(0, 2);
          }
          document.getElementById(ev.target.id).value = value;
          setCardExpirDate({ value, isValid });
        }}
      />
    </div>
  );
};

CardExpirDateField.propTypes = {
  prvtNonNumeric: PropTypes.func.isRequired,
  fieldName: PropTypes.string,
  setFieldValidity: PropTypes.func.isRequired,
};
export default CardExpirDateField;
