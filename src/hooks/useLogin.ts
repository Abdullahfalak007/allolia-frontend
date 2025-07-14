import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slices/authSlice";
import type { AppDispatch } from "../redux/store";

export const useLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    setLoading(true);
    const resultAction = await dispatch(loginUser({ email, password }));
    setLoading(false);
    if (loginUser.fulfilled.match(resultAction)) {
      setSuccess("Login successful!");
      setEmail("");
      setPassword("");
    } else {
      setError((resultAction.payload as string) || "An error occurred");
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    success,
    loading,
    handleSubmit,
  };
};
