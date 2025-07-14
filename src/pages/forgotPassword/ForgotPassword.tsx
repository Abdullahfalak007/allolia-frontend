import AuthHeader from "../../components/authHeader/AuthHeader";
import InputField from "../../components/inputField/InputField";
import { useForgotPassword } from "../../hooks/useForgotPassword";

const ForgotPassword = () => {
  const { email, setEmail, error, success, loading, handleSubmit } =
    useForgotPassword();

  return (
    <div className="max-w-lg mx-auto p-6">
      <AuthHeader />
      {error && <div className="text-red-600 text-sm">{error}</div>}
      {success && <div className="text-green-600 text-sm">{success}</div>}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <InputField
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
