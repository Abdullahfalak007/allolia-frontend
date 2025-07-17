import React from "react";
import InputField from "../inputField/InputField";
import { ErrorMessage } from "../errorMessage/ErrorMessage";
import Button from "../button/Button";
import { FormProps } from "../../constants/types";

const Form: React.FC<FormProps> = ({
  fields,
  onSubmit,
  buttonText,
  loading = false,
  error,
  success,
  children,
  buttonLoadingText,
  header,
  extra,
}) => {
  return (
    <div className="space-y-6 w-full max-w-sm mx-auto">
      {header}
      {error && <ErrorMessage message={error} />}
      {success && <div className="text-green-600 text-sm">{success}</div>}
      {children}
      <form onSubmit={onSubmit} className="space-y-4">
        {fields.map((field) => (
          <InputField key={field.id} {...field} />
        ))}
        {extra && extra} {/* <-- Render extra content above the button */}
        <Button
          type="submit"
          className="w-full py-2 bg-primary text-white rounded-md hover:bg-secondary transition-all"
          disabled={loading}
        >
          {loading && buttonLoadingText ? buttonLoadingText : buttonText}
        </Button>
      </form>
    </div>
  );
};

export default Form;
