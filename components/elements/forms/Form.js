"use client";
import { useState } from "react";
import sendMail from "@/actions/email";
import formContent from "@/data/form";
import InputField from "../Input";
import { validateInput } from "@/utils/validation";
import { formSubmit } from "@/utils/conversion";

export default function Form() {
  const [formState, setFormState] = useState({
    firstName: { value: "", isValid: true, errorMessage: "" },
    lastName: { value: "", isValid: true, errorMessage: "" },
    email: { value: "", isValid: true, errorMessage: "" },
    phone: { value: "", isValid: true, errorMessage: "" },
    subject: { value: "", isValid: true, errorMessage: "" },
    message: { value: "", isValid: true, errorMessage: "" },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateInput(name, value, setFormState, formContent);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = Object.keys(formState).every((key) =>
      validateInput(key, formState[key].value, setFormState, formContent)
    );

    if (isFormValid) {
      const formData = Object.fromEntries(
        Object.entries(formState).map(([key, field]) => [key, field.value])
      );
      const gclid = localStorage.getItem("gclid");
      sendMail(formData, gclid);
      setIsSubmitted(true);
      formSubmit();
    } else {
      console.log("Form is invalid. Please correct the errors and try again.");
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <div className="pt-100">
          <h2>{formContent.thankYouMessage.title}</h2>
          <p>{formContent.thankYouMessage.body}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="row">
            <div className="col-md-6">
              <InputField
                id="firstName"
                name="firstName"
                placeholder={formContent.placeholders.firstName}
                onChange={handleChange}
                isValid={formState.firstName.isValid}
                errorMessage={formState.firstName.errorMessage}
              />
            </div>
            <div className="col-md-6">
              <InputField
                id="lastName"
                name="lastName"
                placeholder={formContent.placeholders.lastName}
                onChange={handleChange}
                isValid={formState.lastName.isValid}
                errorMessage={formState.lastName.errorMessage}
              />
            </div>
            <div className="col-md-6">
              <InputField
                id="email"
                name="email"
                type="email"
                placeholder={formContent.placeholders.email}
                onChange={handleChange}
                isValid={formState.email.isValid}
                errorMessage={formState.email.errorMessage}
              />
            </div>
            <div className="col-md-6">
              <InputField
                id="phone"
                name="phone"
                type="phone"
                placeholder={formContent.placeholders.phone}
                onChange={handleChange}
                isValid={formState.phone.isValid}
                errorMessage={formState.phone.errorMessage}
              />
            </div>
          </div>
          <InputField
            id="subject"
            name="subject"
            placeholder={formContent.placeholders.subject}
            onChange={handleChange}
            isValid={formState.subject.isValid}
            errorMessage={formState.subject.errorMessage}
          />
          <InputField
            id="message"
            name="message"
            placeholder={formContent.placeholders.message}
            isTextArea={true}
            onChange={handleChange}
            isValid={formState.message.isValid}
            errorMessage={formState.message.errorMessage}
          />
          <div style={{ display: "none" }}>
            <InputField id="honeypot" name="honeypot" type="text" />
          </div>
          <button className="btn" type="submit">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
