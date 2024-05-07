import React, { useState } from "react";
import { Link } from "react-router-dom";
import Brunel from "../assets/brunel.png";
import X from "../assets/X.png";
import exclamation from "../assets/!.png";

export default function Projects() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Enter a valid email address");
    } else {
      setErrorMessage("");
      window.location.href = "/success";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsDisabled(!emailRegex.test(value));
    }
  };

  return (
    <>
      <nav className="flex justify-between border border-[#EAEAEA] rounded-[65.28px] mx-6 mt-6 px-[20.89px] py-[16.97px]">
        <div className="my-auto ml-[6.78px]-">
          <img src={Brunel} alt="Brunel" />
        </div>
        <div className="flex">
          <Link to="/">
            <img src={X} alt="" />
          </Link>
        </div>
      </nav>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col mx-auto mt-10 text-center">
          <h1 className="font-grace text-tGreen text-4xl">Registration Form</h1>
          <h1 className="font-manrope font-semibold text-tBlack text-[56px] leading-[67.2px]">
            Start your success
            <br />
            Journey here!
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col mx-auto mt-20 space-y-12"
        >
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            placeholder="Enter your name"
            required
            className="bg-[#EFEFEF] py-6 px-9 rounded-[64px] font-manrope text-xl w-[417px] h-[75px]"
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            required
            className="bg-[#EFEFEF] py-6 px-9 rounded-[64px] font-manrope text-xl w-[417px] h-[75px]"
          />
          {errorMessage && (
            <div className="flex items-center">
              <img src={exclamation} alt="Error" className="mr-2" />
              <p className="text-[#FF0808] font-manrope text-base">
                {errorMessage}
              </p>
            </div>
          )}
          <button
            type="submit"
            disabled={isDisabled}
            className={`px-[49.61px] py-[26.11px] w-[417px] h-[75px] font-manrope font-medium text-lg text-center rounded-[107.06px] ${
              isDisabled ? "bg-[#C9C9C9]" : "bg-tBlack text-white"
            }`}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
