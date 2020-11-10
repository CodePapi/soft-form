import React, { useState, useEffect, useCallback } from "react";
import { useHistory } from "react-router-dom";
import FullNameField from "./FullNameField";
import EmailField from "./EmailField";
import PhoneField from "./PhoneField";
import PasswordFields from "./PasswordFields";
import CardNumberField from "./CardNumberField";
import CardExpirDateField from "./CardExpirDateField";
import CardPinField from "./CardPinField";
import Header from "./Header";

const Form = () => {
  const history = useHistory();
  const [isFormValid, setIsFormValid] = useState(false);
  /*
  Create array of field validities to set the button's disabled status
  Don't include a field you don't want to monitor here
  The name of the field must be the same as that on the [fieldName]
  attribute of the FormControlField
  */
  const [validityFields, setValidityFields] = useState([
    { name: "fullName", validity: false },
    { name: "email", validity: false },
    { name: "phone", validity: false },
    { name: "passwords", validity: false },
    { name: "cardNumber", validity: false },
    { name: "cardExpirDate", validity: false },
    { name: "cardPin", validity: false },
  ]);

  useEffect(() => {
    const formValidity = validityFields.every((field) => field.validity);
    setIsFormValid(formValidity);
  }, [validityFields]);

  const handleSetValidity = useCallback((field) => {
    setValidity(field);
  }, []);

  const prvtNonNumeric = (ev) => {
    // written in parent component so I DRY
    if (
      !(
        ev.charCode === 0 ||
        /\d/.test(parseInt(String.fromCharCode(ev.charCode), 10))
      )
    ) {
      ev.preventDefault();
    }
  };

  const setValidity = ({ name, validity }) => {
    const newValidityFields = [...validityFields].map((field) => {
      if (field.name === name) {
        field.validity = validity;
      }
      return field;
    });
    setValidityFields(newValidityFields);
  };

  const navigateTo = (route) => {
    history.push(route);
  };

  return (
    <React.Fragment>
      <Header />
      <div className="w-full sm:max-w-sm md:max-w-md mt-5 mx-auto">
        <h2 className="text-xl font-semibold text-center mb-2">Please fill</h2>
        <form
          noValidate
          onSubmit={(ev) => navigateTo("/dashboard")}
          className="bg-white shadow-md rounded px-8 pt-6 pb-4 mb-2"
        >
          <FullNameField
            fieldName="fullName"
            setFieldValidity={handleSetValidity}
          />
          <EmailField fieldName="email" setFieldValidity={handleSetValidity} />
          <PhoneField
            fieldName="phone"
            setFieldValidity={handleSetValidity}
            prvtNonNumeric={prvtNonNumeric}
          />
          <PasswordFields
            fieldName="passwords"
            setFieldValidity={handleSetValidity}
          />
          <CardNumberField
            fieldName="cardNumber"
            setFieldValidity={handleSetValidity}
            prvtNonNumeric={prvtNonNumeric}
          />
          <CardExpirDateField
            fieldName="cardExpirDate"
            setFieldValidity={handleSetValidity}
            prvtNonNumeric={prvtNonNumeric}
          />
          <CardPinField
            fieldName="cardPin"
            setFieldValidity={handleSetValidity}
            prvtNonNumeric={prvtNonNumeric}
          />
          <div className="flex items-center justify-center mt-5">
            <button
              disabled={!isFormValid}
              className={`${
                isFormValid
                  ? "opacity-100 bg-blue-500 hover:bg-blue-700"
                  : "cursor-not-allowed opacity-50 bg-gray-600"
              }  text-white font-bold py-2 px-4 rounded`}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Form;
