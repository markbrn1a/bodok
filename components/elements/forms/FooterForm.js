"use client";
import { useState } from "react";
import { validateInput } from "@/utils/validation";
import sendMail from "@/actions/email";
import { formSubmit } from "@/utils/conversion";
import InputField from "../Input";
export default function FooterForm({ content }) {
  function validatePhoneNumber(number) {
    const phoneRegex = /^\+?\d{6,13}$/;
    const isValid = phoneRegex.test(number);
    return isValid;
  }

  const [phone, setPhone] = useState({
    value: "",
    isValid: true,
    errorMessage: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    const isValid = validatePhoneNumber(value);
    setPhone({
      value,
      isValid,
      errorMessage: isValid ? "" : "Invalid phone number",
    });
  };

  const handleKeyPress = (e) => {
    const char = String.fromCharCode(e.which);
    const isValidChar =
      /^[0-9]$/.test(char) || (char === "+" && e.target.value.length === 0);
    if (!isValidChar) {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validatePhoneNumber(phone.value);
    if (validation) {
      const gclid = localStorage.getItem("gclid");
      sendMail({ phone: phone.value, gclid });
      setIsSubmitted(true);
      formSubmit();
      setPhone({});
    } else {
      console.log("Form is invalid. Please correct the errors and try again.");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputField
        id="phone"
        name="phone"
        type="tel"
        placeholder={content.footer.newsletterPlaceholder}
        onChange={handleChange}
        value={phone.value}
        isValid={phone.isValid}
        errorMessage={phone.errorMessage}
        disabled={isSubmitted}
      />
      {/* <input
        type="text"
        placeholder={content.footer.newsletterPlaceholder}
        value={phone.value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      /> */}

      <button disabled={isSubmitted} type="submit" className="btn btn-two">
        {!isSubmitted ? content.footer.newsletterButton : "Köszönjük!"}
      </button>
    </form>
  );
}
