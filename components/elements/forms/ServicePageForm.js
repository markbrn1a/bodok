"use client";
import { useState } from "react";
import { formSubmit } from "@/utils/conversion";
import { validateInput } from "@/utils/validation";
import sendMail from "@/actions/email";

export default function ServicePageForm({ text }) {
  const [formState, setFormState] = useState({
    firstName: { value: "", isValid: true, errorMessage: "" },
    lastName: { value: "", isValid: true, errorMessage: "" },
    phoneNumber: { value: "", isValid: true, errorMessage: "" },
    emailAddress: { value: "", isValid: true, errorMessage: "" },
    address: { value: "", isValid: true, errorMessage: "" },
    message: { value: "", isValid: true, errorMessage: "" },
    honeypot: { value: "", isValid: true, errorMessage: "" }, // Honeypot field
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      // Allow a plus sign as the first character, digits, and whitespace
      const phonePattern = /^\+?[0-9\s]*$/;
      if (!phonePattern.test(value)) {
        setFormState((prevState) => ({
          ...prevState,
          [name]: {
            ...prevState[name],
            isValid: false,
            errorMessage: "Invalid phone number format.",
          },
        }));
        return;
      }
    }

    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value: value,
        isValid: true,
        errorMessage: "",
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isFormValid = Object.keys(formState).every((key) =>
      validateInput(key, formState[key].value, setFormState, text)
    );

    if (isFormValid) {
      if (formState.honeypot.value === "") {
        const formData = Object.fromEntries(
          Object.entries(formState).map(([key, field]) => [key, field.value])
        );
        sendMail(formData);
      }
      setIsSubmitted(true);
      setSubmissionFeedback("Munkatársaink hamarosan felkeresik Önt.");
      formSubmit();
    } else {
      setSubmissionFeedback(
        "Form is invalid. Please correct the errors and try again."
      );
    }
  };

  const handleReset = () => {
    setFormState({
      firstName: { value: "", isValid: true, errorMessage: "" },
      lastName: { value: "", isValid: true, errorMessage: "" },
      phoneNumber: { value: "", isValid: true, errorMessage: "" },
      emailAddress: { value: "", isValid: true, errorMessage: "" },
      address: { value: "", isValid: true, errorMessage: "" },
      message: { value: "", isValid: true, errorMessage: "" },
      honeypot: { value: "", isValid: true, errorMessage: "" }, // Reset honeypot field
    });
    setIsSubmitted(false);
    setSubmissionFeedback("");
  };

  return (
    <div>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-grp">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder={text.formLabels.firstName}
                  value={formState.firstName.value}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="firstName">
                  <i className="fas fa-user" />
                </label>
                {!formState.firstName.isValid && (
                  <span className="error-message">
                    {formState.firstName.errorMessage}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-grp">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder={text.formLabels.lastName}
                  value={formState.lastName.value}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="lastName">
                  <i className="fas fa-user" />
                </label>
                {!formState.lastName.isValid && (
                  <span className="error-message">
                    {formState.lastName.errorMessage}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-grp">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder={text.formLabels.phoneNumber}
                  value={formState.phoneNumber.value}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="phoneNumber">
                  <i className="fas fa-phone-alt" />
                </label>
                {!formState.phoneNumber.isValid && (
                  <span className="error-message">
                    {formState.phoneNumber.errorMessage}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-grp">
                <input
                  id="emailAddress"
                  name="emailAddress"
                  type="email"
                  placeholder={text.formLabels.emailAddress}
                  value={formState.emailAddress.value}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="emailAddress">
                  <i className="fas fa-envelope" />
                </label>
                {!formState.emailAddress.isValid && (
                  <span className="error-message">
                    {formState.emailAddress.errorMessage}
                  </span>
                )}
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-grp">
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder={text.formLabels.address}
                  value={formState.address.value}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="address">
                  <i className="fas fa-map-marker-alt" />
                </label>
                {!formState.address.isValid && (
                  <span className="error-message">
                    {formState.address.errorMessage}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="form-grp">
            <textarea
              name="message"
              placeholder="Message"
              value={formState.message.value}
              onChange={handleChange}
              required
            />
            {!formState.message.isValid && (
              <span className="error-message">
                {formState.message.errorMessage}
              </span>
            )}
          </div>
          {/* Honeypot field */}
          <div style={{ display: "none" }}>
            <input
              id="honeypot"
              name="honeypot"
              type="text"
              value={formState.honeypot.value}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn">
            {text.appointmentButtonText}
          </button>
        </form>
      ) : (
        <div>
          <div className="submission-feedback">{submissionFeedback}</div>
          <button onClick={handleReset} className="btn">
            Köszönjük az üzenetét
          </button>
        </div>
      )}
    </div>
  );
}
