import { useResetPassword } from "../../hooks/useResetPassword";
import Form from "../../components/form/Form";
import FormHeader from "../../components/formHeader/FormHeader";
import { logos, images } from "../../constants/images";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen flex bg-primary/5 overflow-hidden">
      {/* Left Section: Reset Password Form */}
      <div className="grid grid-rows-[auto,1fr] min-h-screen bg-white px-8 w-full md:w-1/2 min-w-0 transition-all duration-300">
        <div className="p-4">
          <Link to="/" aria-label="Home page">
            <img src={logos.logo_blue} alt="Logo" className="h-8" />
          </Link>
        </div>
        <div className="flex flex-col justify-center">
          <Form
            header={
              <FormHeader
                title="Reset Password"
                subtitle="Enter your new password"
              />
            }
            fields={[
              {
                type: "password",
                id: "newPassword",
                placeholder: "New Password",
                value: newPassword,
                onChange: (e) => setNewPassword(e.target.value),
              },
              {
                type: "password",
                id: "confirmPassword",
                placeholder: "Confirm Password",
                value: confirmPassword,
                onChange: (e) => setConfirmPassword(e.target.value),
              },
            ]}
            onSubmit={handleSubmit}
            buttonText="Reset Password"
            buttonLoadingText="Resetting..."
            loading={loading}
            error={error}
            success={success}
          />
          {/* Login Link */}
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">Back to </span>
            <a href="/login" className="text-sm text-primary hover:underline">
              Sign in
            </a>
          </div>
        </div>
      </div>
      {/* Right Section: Illustration Image */}
      <div className="hidden md:flex w-1/2 min-w-0 p-0">
        <img
          src={images.illustration}
          alt="Illustration"
          className="w-full h-screen object-cover object-left"
          style={{ minWidth: 0 }}
        />
      </div>
    </div>
  );
};

export default ResetPassword;
