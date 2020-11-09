import { useState, useEffect } from "react";
import Header from "./Header";

const Form = () => {
  const [fullName, setFullName] = useState({ value: "", isValid: false });
  const [email, setEmail] = useState({ value: "", isValid: false });
  const [phone, setPhone] = useState({ value: "", isValid: false });
  const [password, setPassword] = useState({ value: "", isValid: false });
  const [confPassword, setConfPassword] = useState({
    value: "",
    isValid: false,
  });
  const [cardNumber, setCardNumber] = useState({ value: "", isValid: true });
  const [cardExpirDate, setCardExpirDate] = useState({
    value: "",
    isValid: false,
  });
  const [cardPin, setCardPin] = useState({ value: "", isValid: false });
  let [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    let formValidity = [
      fullName.isValid,
      email.isValid,
      phone.isValid,
      password.isValid,
      confPassword.isValid,
      cardExpirDate.isValid,
      cardPin.isValid,
    ].every((res) => res === true);
    setIsFormValid(formValidity);
  }, [
    fullName.isValid,
    email.isValid,
    phone.isValid,
    password.isValid,
    confPassword.isValid,
    cardExpirDate.isValid,
    cardPin.isValid,
  ]);

  const validateFullName = (ev) => {
    // const errors = {};
    const { value, validity } = ev.target;
    const isValid =
      validity.valid &&
      value.split(" ")[0].length >= 2 &&
      value.split(" ")[1] &&
      value.split(" ")[1].length >= 2
        ? true
        : false;
    setFullName({ value, isValid });
  };

  const validateEmail = (ev) => {
    // const errors = {};
    const { value, validity } = ev.target;
    const isValid = validity.valid ? true : false;
    setEmail({ value, isValid });
  };

  const validatePhone = (ev) => {
    // const errors = {};
    const { value, validity } = ev.target;
    const isValid = validity.valid ? true : false;
    setPhone({ value, isValid });
  };

  const validatePassword = (ev) => {
    const { value, validity } = ev.target;
    const isValid = validity.valid ? true : false;
    setPassword({ value, isValid });
    // console.log(ev.target.validationMessage)
  };

  const validateConfPassword = (ev) => {
    const { value, validity } = ev.target;
    const isValid = validity.valid && value === password.value ? true : false;
    setConfPassword({ value, isValid });
    // console.log(validity, isValid)
  };

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

  const validateCardPin = (ev) => {
    // const errors = {};
    const { value, validity } = ev.target;
    console.log(value);
    const isValid = validity.valid ? true : false;
    setCardPin({ value, isValid });
  };

  const prevNonNumeric = (ev) => {
    // prevent non-numeric characters
    if (
      !(
        ev.charCode === 0 ||
        /\d/.test(parseInt(String.fromCharCode(ev.charCode), 10))
      )
    ) {
      ev.preventDefault();
    }
  };

  return (
    <>
      <Header />
      <div className="w-full sm:max-w-sm md:max-w-md mt-5 mx-auto">
        <h2 className="text-xl font-semibold text-center mb-2">Please fill</h2>
        <form
        onSubmit={ev=> console.log(1)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-4 mb-2"
          name="softForm"
        >
          <div>
            <label
              className="block text-gray-900 font-medium my-1"
              htmlFor="name"
            >
              Full name
            </label>
            <input
              className="tracking-wide appearance-none outline-none border-2 rounded w-full p-2 text-gray-900 leading-tight border-gray-400 focus:border-gray-600"
              type="text"
              placeholder="Chukwuma Ciroma"
              minLength="2"
              id="fullName"
              value={fullName.value}
              required
              onChange={validateFullName}
              onBlur={(ev) => setFullName(fullName)}
            />
          </div>
          <div className="mt-3">
            <label
              className="block text-gray-900 font-medium my-1"
              htmlFor="email"
            >
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
          <div className="mt-3">
            <label
              className="block text-gray-900 font-medium my-1"
              htmlFor="phone"
            >
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
              onKeyPress={prevNonNumeric}
              onBlur={(ev) => setPhone(phone)}
            />
          </div>
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
              onPaste={(ev)=> ev.preventDefault()}
              value={confPassword.value}
              onChange={validateConfPassword}
              onBlur={(ev) => setConfPassword(confPassword)}
            />
          </div>
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
              maxLength="19"
              minLength="19"
              pattern="(\d{4} \d{4} \d{4} \d{4})"
              id="cardNumber"
              required
              defaultValue={cardNumber.value}
              onKeyPress={prevNonNumeric}
              onChange={validateCardNumber}
              onPaste={(ev)=> ev.preventDefault()}
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
              onKeyPress={prevNonNumeric}
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
          <div className="mt-3">
            <label
              className="block text-gray-900 font-medium my-1"
              htmlFor="cardPin"
            >
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
              onKeyPress={prevNonNumeric}
              onChange={validateCardPin}
            />
            {/*onBlur={(ev) => setCardPin(cardPin)}*/}
          </div>
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
    </>
  );
};

export default Form;
