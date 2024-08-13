"use client";
import { useState } from "react";
import sendMail from "@/actions/email";
import { formSubmit } from "@/utils/conversion";

import InputField from "../Input";

export default function CallBackForm({ content }) {
  function validatePhoneNumber(number) {
    const phoneRegex = /^\+?\d{6,13}$/;
    const isValid = phoneRegex.test(number);
    return isValid;
  }

  const [name, setName] = useState("");
  const [phone, setPhone] = useState({
    value: "",
    isValid: true,
    errorMessage: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneChange = (e) => {
    const { value } = e.target;
    const isValid = validatePhoneNumber(value);
    setPhone({
      value,
      isValid,
      errorMessage: isValid ? "" : "Invalid phone number",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isPhoneValid = validatePhoneNumber(phone.value);
    if (isPhoneValid && name.trim() !== "") {
      sendMail({ phone: phone.value });
      formSubmit();
      setName("");
      setPhone({ value: "", isValid: true, errorMessage: "" });
      setIsSubmitted(true);
    } else {
      console.log("Form is invalid. Please correct the errors and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grp">
        <InputField
          type="text"
          placeholder={content.newsletterSection.formPlaceholders.name}
          value={name}
          onChange={handleNameChange}
          disabled={isSubmitted}
        />
        {/* <input

        /> */}
      </div>
      <div className="form-grp">
        <InputField
          type="text"
          placeholder={content.newsletterSection.formPlaceholders.phone}
          value={phone.value}
          disabled={isSubmitted}
          onChange={handlePhoneChange}
        />
        {/* <input
          type="text"
          placeholder={content.newsletterSection.formPlaceholders.phone}
          value={phone.value}
          onChange={handlePhoneChange}
          onKeyPress={handlePhoneKeyPress}
        /> */}
      </div>
      <button disabled={isSubmitted} type="submit" className="btn btn-two">
        {isSubmitted ? "Köszönjük" : content.newsletterSection.submitButton}
      </button>
    </form>
  );
}
