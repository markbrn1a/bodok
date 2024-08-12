"use client";
import { useState } from "react";
import sendMail from "@/actions/email";
import { formSubmit } from "@/utils/conversion";
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

  const handlePhoneKeyPress = (e) => {
    const char = String.fromCharCode(e.which);
    const isValidChar =
      /^[0-9]$/.test(char) || (char === "+" && e.target.value.length === 0);
    if (!isValidChar) {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isPhoneValid = validatePhoneNumber(phone.value);
    if (isPhoneValid && name.trim() !== "") {
      setIsSubmitted(true);
      sendMail({ phone: phone.value });
      formSubmit();
      setName("");
      setPhone({ value: "", isValid: true, errorMessage: "" });
    } else {
      console.log("Form is invalid. Please correct the errors and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grp">
        <input
          type="text"
          placeholder={content.newsletterSection.formPlaceholders.name}
          value={name}
          onChange={handleNameChange}
        />
      </div>
      <div className="form-grp">
        <input
          type="text"
          placeholder={content.newsletterSection.formPlaceholders.phone}
          value={phone.value}
          onChange={handlePhoneChange}
          onKeyPress={handlePhoneKeyPress}
        />
        {!phone.isValid && (
          <span className="error-message">{phone.errorMessage}</span>
        )}
      </div>
      <button type="submit" className="btn btn-two">
        {content.newsletterSection.submitButton}
      </button>
    </form>
  );
}
