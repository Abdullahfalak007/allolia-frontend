import { useRegister } from "../../hooks/useRegister";
import Form from "../../components/form/Form";
import FormHeader from "../../components/formHeader/FormHeader";
import { logos, images, icons } from "../../constants/images";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";

const Register = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    error,
    success,
    loading,
    handleSubmit,
  } = useRegister();

  return (
    <div className="min-h-screen flex bg-primary/5 overflow-hidden">
      {/* Left Section: Register Form */}
      <div className="grid grid-rows-[auto,1fr] min-h-screen bg-white px-8 w-full md:w-1/2 min-w-0 transition-all duration-300">
        <div className="p-4">
          <Link to="/" aria-label="Home page">
            <img src={logos.logo_blue} alt="Logo" className="h-8" />
          </Link>{" "}
        </div>
        <div className="flex flex-col justify-center">
          <Form
            header={
              <FormHeader title="Register" subtitle="Create a new account" />
            }
            fields={[
              {
                type: "email",
                id: "email",
                placeholder: "Email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
              },
              {
                type: "password",
                id: "password",
                placeholder: "Password",
                value: password,
                onChange: (e) => setPassword(e.target.value),
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
            buttonText="Register"
            buttonLoadingText="Registering..."
            loading={loading}
            error={error}
            success={success}
          />
          <div className="mt-4 w-full max-w-sm mx-auto">
            <Button className="w-full py-2 bg-white text-primary border border-primary rounded-md hover:bg-primary/10 transition-all flex items-center justify-center space-x-3">
              <img src={icons.google_icon} alt="Google" className="h-5 w-5" />
              <span>Sign in with Google</span>
            </Button>
          </div>
          {/* Login Link */}
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">
              Already have an account?{" "}
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

export default Register;
