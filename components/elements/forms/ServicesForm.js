"use client";
import { useState } from "react";
import InputField from "../Input";
import sendMail from "@/actions/email";
import { validateInput } from "@/utils/validation";
import { formSubmit } from "@/utils/conversion";

export default function ServiceForm({ content }) {
  const [formState, setFormState] = useState({
    name: { value: "", isValid: true, errorMessage: "" },
    phone: { value: "", isValid: true, errorMessage: "" },
    message: { value: "", isValid: true, errorMessage: "" },
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    validateInput(name, value, setFormState, setFormState, content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = Object.keys(formState).every((key) =>
      validateInput(key, formState[key].value, setFormState, content)
    );

    if (isFormValid) {
      const formData = Object.fromEntries(
        Object.entries(formState).map(([key, field]) => [key, field.value])
      );
      sendMail(formData);
      setIsSubmitted(true);
      formSubmit();
    } else {
      console.log("Form is invalid. Please correct the errors and try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sidebar-form">
      <div className="form-grp">
        <InputField
          id="name"
          name="name"
          type="text"
          placeholder={content.servicesSidebar.formFields.namePlaceholder}
          onChange={handleChange}
          isValid={formState.name.isValid}
          errorMessage={formState.name.errorMessage}
        />
      </div>
      <div className="form-grp">
        <InputField
          id="phone"
          name="phone"
          type="phone"
          placeholder={content.servicesSidebar.formFields.phonePlaceholder}
          onChange={handleChange}
          isValid={formState.phone.isValid}
          errorMessage={formState.phone.errorMessage}
        />
      </div>
      <div className="form-grp">
        <InputField
          id="message"
          name="message"
          isTextArea={true}
          onChange={handleChange}
          isValid={formState.message.isValid}
          errorMessage={formState.message.errorMessage}
          placeholder={content.servicesSidebar.formFields.messagePlaceholder}
        />
      </div>
      <button type="submit" className="btn btn-two">
        {content.servicesSidebar.formFields.buttonText}
      </button>
    </form>
  );
}
