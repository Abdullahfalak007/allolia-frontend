import React from "react";
import AuthHeader from "../../components/authHeader/AuthHeader";
import InputField from "../../components/inputField/InputField";

const ResetPassword = () => {
  // Placeholder for reset password logic
  return (
    <div className="max-w-lg mx-auto p-6">
      <AuthHeader />
      <form className="space-y-4">
        <InputField
          type="password"
          id="newPassword"
          placeholder="New Password"
          value=""
          onChange={() => {}}
        />
        <InputField
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          value=""
          onChange={() => {}}
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
