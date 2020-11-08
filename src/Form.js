import { useState, useEffect } from "react";
import Header from "./Header";

const Form = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpirDate, setCardExpirDate] = useState("");
  const [cardPin, setCardPin] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // return () => {
    //   effect
    // };
  }, [
    fullName,
    email,
    phone,
    password,
    confPassword,
    cardNumber,
    cardExpirDate,
    cardPin,
    isFormValid,
  ]);

  return (
    <>
      <Header />
      <div className="w-full sm:max-w-sm md:max-w-md mt-5 mx-auto">
        <h2 className="text-xl font-semibold text-center mb-2">Please fill</h2>
        <form className="bg-white shadow rounded px-8 pt-6 pb-4 mb-2">
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
              value={fullName}
              onChange={(ev) => setFullName(ev.target.value)}
              onBlur={(ev) => setFullName(ev.target.value)}
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
              placeholder="chukwuma@mailprovider.com"
              id="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              onBlur={(ev) => setEmail(ev.target.value)}
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
              id="phone"
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
              onBlur={(ev) => setPhone(ev.target.value)}
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
              minLength="6"
              type="password"
              id="password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              onBlur={(ev) => setPassword(ev.target.value)}
            />
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
              value={confPassword}
              onChange={(ev) => setConfPassword(ev.target.value)}
              onBlur={(ev) => setConfPassword(ev.target.value)}
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
              className="tracking-wide appearance-none outline-none border-2 rounded w-full p-2 text-gray-900 leading-tight border-gray-400 focus:border-gray-600"
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              id="cardNumber"
              value={cardNumber}
              onChange={(ev) => setCardNumber(ev.target.value)}
              onBlur={(ev) => setCardNumber(ev.target.value)}
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
              value={cardExpirDate}
              onChange={(ev) => setCardExpirDate(ev.target.value)}
              onBlur={(ev) => setCardExpirDate(ev.target.value)}
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
              placeholder="XXXX"
              id="cardPin"
              value={cardPin}
              onChange={(ev) => setCardPin(ev.target.value)}
              onBlur={(ev) => setCardPin(ev.target.value)}
            />
          </div>
          <div className="flex items-center justify-center mt-5">
            <button
              onClick={() => console.log(1)}
              disabled={isFormValid}
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
