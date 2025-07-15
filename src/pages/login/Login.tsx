import { useLogin } from "../../hooks/useLogin";
import Form from "../../components/form/Form";
import FormHeader from "../../components/formHeader/FormHeader";
import { images } from "../../constants/images";
import Button from "../../components/button/Button";

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
    <div className="min-h-screen flex bg-purple-50 overflow-hidden">
      {/* Left Section: Login Form */}
      <div className="flex flex-col justify-center bg-white px-8 w-full md:w-1/2 min-w-0 transition-all duration-300">
        <div className="flex items-center mb-6">
          {/* Logo with Text on Right */}
          <img src={images.logo_purple} alt="Logo" className="h-8 mr-2" />
          <span className="text-2xl font-bold text-purple-600">
            TheCubeFactory
          </span>
        </div>

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
                <input type="checkbox" className="form-checkbox" /> Remember for
                30 days
              </label>
              <a href="#" className="text-sm text-purple-600 hover:underline">
                Forgot password?
              </a>
            </div>
          }
        />

        {/* Google Sign-in with Google Icon */}
        <div className="mt-4 w-full max-w-sm mx-auto">
          <Button className="w-full py-2 bg-white text-purple-600 border border-purple-600 rounded-md hover:bg-purple-50 transition-all flex items-center justify-center space-x-3">
            <img src={images.google_icon} alt="Google" className="h-5 w-5" />
            <span>Sign in with Google</span>
          </Button>
        </div>

        {/* Sign-up Link */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">Don't have an account? </span>
          <a href="#" className="text-sm text-purple-600 hover:underline">
            Sign up
          </a>
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
