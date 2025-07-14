import React from "react";
import AuthHeader from "../../components/authHeader/AuthHeader";
import InputField from "../../components/inputField/InputField";

const ForgotPassword = () => {
  // Placeholder for forgot password logic
  return (
    <div className="max-w-lg mx-auto p-6">
      <AuthHeader />
      <form className="space-y-4">
        <InputField
          type="email"
          id="email"
          placeholder="Email"
          value=""
          onChange={() => {}}
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
