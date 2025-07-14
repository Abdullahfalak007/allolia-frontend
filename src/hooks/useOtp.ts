import { useState } from "react";
import { useDispatch } from "react-redux";
import { verifyOtp } from "../redux/slices/authSlice";
import type { AppDispatch } from "../redux/store";

export const useOtp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!otp) {
      setError("Please enter the OTP");
      return;
    }
    setLoading(true);
    const resultAction = await dispatch(verifyOtp({ otp }));
    setLoading(false);
    if (verifyOtp.fulfilled.match(resultAction)) {
      setSuccess("OTP verified successfully!");
      setOtp("");
    } else {
      setError((resultAction.payload as string) || "An error occurred");
    }
  };

  return {
    otp,
    setOtp,
    error,
    success,
    loading,
    handleSubmit,
  };
};
