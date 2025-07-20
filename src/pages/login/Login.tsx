import { useLogin } from "../../hooks/useLogin";
import Form from "../../components/form/Form";
import FormHeader from "../../components/formHeader/FormHeader";
import { icons, images, logos } from "../../constants/images";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    success,
    loading,
    handleSubmit,
  } = useLogin();

  return (
    <div className="min-h-screen flex bg-primary/5 overflow-hidden">
      {/* Left Section: Login Form */}
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
                title="Welcome back"
                subtitle="Please enter your details"
              />
            }
            fields={[
              {
                type: "email",
                id: "email",
                placeholder: "Email address",
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
            ]}
            onSubmit={handleSubmit}
            buttonText="Sign in"
            buttonLoadingText="Signing in..."
            loading={loading}
            error={error}
            success={success}
            extra={
              <div className="flex justify-between items-center mt-2">
                <label className="inline-flex items-center text-sm">
                  <input type="checkbox" className="form-checkbox mr-1" />{" "}
                  Remember for 30 days
                </label>
                <a
                  href="forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </a>
              </div>
            }
          />

          {/* Google Sign-in with Google Icon */}
          <div className="mt-4 w-full max-w-sm mx-auto">
            <Button className="w-full py-2 bg-white text-primary border border-primary rounded-md hover:bg-primary/10 transition-all flex items-center justify-center space-x-3">
              <img src={icons.google_icon} alt="Google" className="h-5 w-5" />
              <span>Sign in with Google</span>
            </Button>
          </div>

          {/* Sign-up Link */}
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">
              Don't have an account?{" "}
            </span>
            <a
              href="/register"
              className="text-sm text-primary hover:underline"
            >
              Sign up
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

export default Login;
