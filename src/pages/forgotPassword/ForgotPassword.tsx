import { useForgotPassword } from "../../hooks/useForgotPassword";
import Form from "../../components/form/Form";
import FormHeader from "../../components/formHeader/FormHeader";
import { logos, images } from "../../constants/images";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const { email, setEmail, error, success, loading, handleSubmit } =
    useForgotPassword();

  return (
    <div className="min-h-screen flex bg-primary/5 overflow-hidden">
      {/* Left Section: Forgot Password Form */}
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
                title="Forgot Password"
                subtitle="Enter your email to receive a reset link"
              />
            }
            fields={[
              {
                type: "email",
                id: "email",
                placeholder: "Email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
              },
            ]}
            onSubmit={handleSubmit}
            buttonText="Send Reset Link"
            buttonLoadingText="Sending..."
            loading={loading}
            error={error}
            success={success}
          />
          {/* Login Link */}
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">
              Remembered your password?{" "}
            </span>
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

export default ForgotPassword;
