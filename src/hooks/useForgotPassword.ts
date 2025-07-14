import { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../redux/slices/authSlice";
import type { AppDispatch } from "../redux/store";

export const useForgotPassword = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!email) {
      setError("Please enter your email");
      return;
    }
    setLoading(true);
    const resultAction = await dispatch(forgotPassword({ email }));
    setLoading(false);
    if (forgotPassword.fulfilled.match(resultAction)) {
      setSuccess("Reset link sent to your email!");
      setEmail("");
    } else {
      setError((resultAction.payload as string) || "An error occurred");
    }
  };

  return {
    email,
    setEmail,
    error,
    success,
    loading,
    handleSubmit,
  };
};
