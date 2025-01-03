"use server";
import nodemailer from "nodemailer";
import sanitizeHtml from "sanitize-html";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_SERVER,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_PORT == 465, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function sanitizeInput(input) {
  return sanitizeHtml(input, {
    allowedTags: [],
    allowedAttributes: {},
  });
}
function validateInput(formData) {
  let errors = {};

  for (const [key, value] of Object.entries(formData)) {
    if (!value || !value.trim()) {
      errors[key] = `${
        key.charAt(0).toUpperCase() + key.slice(1)
      } is required.`;
    } else if (key === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        errors.email = "Invalid email format.";
      }
    } else if (key === "phone") {
      const phoneRegex = /^\+?\d{6,13}$/;
      if (!phoneRegex.test(value)) {
        errors.phone = "Phone number must be between 6 and 13 digits.";
      }
    }
  }

  if (Object.keys(errors).length > 0) {
    throw errors;
  }

  return true;
}

async function sendMail(formData) {
  // Verify reCAPTCHA token
  // const isTokenValid = await verifyToken(token);
  // if (!isTokenValid) {
  //   throw new Error("Invalid reCAPTCHA token.");
  // }

  // Sanitize user input
  const sanitizedData = {};
  for (const [key, value] of Object.entries(formData)) {
    sanitizedData[key] = sanitizeInput(value);
  }

  // Send email
  const info = await transporter.sendMail({
    from: sanitizedData.name || "noreply@bodok-tetofedo-mester.hu", // sender address
    to: "info@bodok-tetofedo-mester.hu",
    subject: "Árajánlatkérés", // Subject line
    text: Object.entries(sanitizedData)
      .map(([key, value]) => `${key}: ${value}`)
      .join(", "), // plain text body
  });
  console.log("Email sent: %s", info);
}

export default sendMail;
