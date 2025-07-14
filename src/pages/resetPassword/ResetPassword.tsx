import React from "react";
import AuthHeader from "../../components/authHeader/AuthHeader";
import InputField from "../../components/inputField/InputField";
import { useResetPassword } from "../../hooks/useResetPassword";

const ResetPassword = () => {
  const {
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    success,
    loading,
    handleSubmit,
  } = useResetPassword();

  return (
    <div className="max-w-lg mx-auto p-6">
      <AuthHeader />
      {error && <div className="text-red-600 text-sm">{error}</div>}
      {success && <div className="text-green-600 text-sm">{success}</div>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <InputField
          type="password"
          id="newPassword"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <InputField
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md"
          disabled={loading}
        >
          {loading ? "Resetting..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
