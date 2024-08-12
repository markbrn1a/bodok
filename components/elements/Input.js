export default function InputField({
  id,
  name,
  type = "text",
  placeholder,
  isTextArea = false,
  onChange,
  isValid,
  errorMessage,
}) {
  const handleKeyPress = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const char = String.fromCharCode(e.which);
      // Allow '+' only as the first character
      if (char === "+" && value.length === 0) {
        return;
      }
      // Allow digits
      if (!/[\d]/.test(char)) {
        e.preventDefault();
      }
    }
  };
  return (
    <div className="form-grp">
      {isTextArea ? (
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          className={!isValid ? "error-input " : ""}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          onKeyPress={handleKeyPress}
          className={!isValid ? "error-input " : ""}
          onChange={onChange}
        />
      )}
      {!isValid && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
