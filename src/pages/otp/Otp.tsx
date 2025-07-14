import React from "react";
import AuthHeader from "../../components/authHeader/AuthHeader";
import InputField from "../../components/inputField/InputField";

const Otp = () => {
  // Placeholder for OTP logic
  return (
    <div className="max-w-lg mx-auto p-6">
      <AuthHeader />
      <form className="space-y-4">
        <InputField
          type="text"
          id="otp"
          placeholder="Enter OTP"
          value=""
          onChange={() => {}}
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default Otp;
