import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetPassword } from "../redux/slices/authSlice";
import type { AppDispatch } from "../redux/store";

export const useResetPassword = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!newPassword || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    const resultAction = await dispatch(
      resetPassword({ newPassword, confirmPassword })
    );
    setLoading(false);
    if (resetPassword.fulfilled.match(resultAction)) {
      setSuccess("Password reset successful!");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      setError((resultAction.payload as string) || "An error occurred");
    }
  };

  return {
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    success,
    loading,
    handleSubmit,
  };
};
