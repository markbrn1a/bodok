import { useState } from "react";
import { validateInput } from "@/utils/validation";
import sendMail from "@/actions/email";
import { formSubmit } from "@/utils/conversion";

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
      sendMail({ phone: phone.value });
      setIsSubmitted(true);
      formSubmit();
      setPhone({ value: "", isValid: true, errorMessage: "" });
    } else {
      console.log("Form is invalid. Please correct the errors and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={content.footer.newsletterPlaceholder}
        value={phone.value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />

      <button type="submit" className="btn btn-two">
        {content.footer.newsletterButton}
      </button>
    </form>
  );
}
