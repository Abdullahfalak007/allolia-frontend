// import { useLogin } from "../../hooks/useLogin";
// import Form from "../../components/form/Form";
// import FormHeader from "../../components/formHeader/FormHeader";
// import { images } from "../../constants/images";
// import Button from "../../components/button/Button";

// const Login = () => {
//   const {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     error,
//     success,
//     loading,
//     handleSubmit,
//   } = useLogin();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-purple-50">
//       <div className="flex max-w-4xl w-full">
//         {/* Left Section: Login Form */}
//         <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
//           <div className="flex justify-between items-center mb-6">
//             {/* Logo */}
//             <img src={images.logo_purple} alt="Logo" className="h-8" />
//           </div>

//           <Form
//             header={
//               <FormHeader
//                 title="Welcome back"
//                 subtitle="Please enter your details"
//               />
//             }
//             fields={[
//               {
//                 type: "email",
//                 id: "email",
//                 placeholder: "Email address",
//                 value: email,
//                 onChange: (e) => setEmail(e.target.value),
//               },
//               {
//                 type: "password",
//                 id: "password",
//                 placeholder: "Password",
//                 value: password,
//                 onChange: (e) => setPassword(e.target.value),
//               },
//             ]}
//             onSubmit={handleSubmit}
//             buttonText="Sign in"
//             buttonLoadingText="Signing in..."
//             loading={loading}
//             error={error}
//             success={success}
//           />

//           {/* Forgot Password & Google Sign-in */}
//           <div className="flex justify-between items-center mt-4">
//             <label className="inline-flex items-center text-sm">
//               <input type="checkbox" className="form-checkbox" /> Remember for
//               30 days
//             </label>
//             <a href="#" className="text-sm text-purple-600 hover:underline">
//               Forgot password?
//             </a>
//           </div>

//           <Button
//             className="w-full py-2 bg-purple-600 text-white rounded-md mt-4 hover:bg-purple-700 transition-all"
//             disabled={loading}
//             type="submit"
//           >
//             {loading ? "Signing in..." : "Sign in"}
//           </Button>

//           {/* Google Sign-in */}
//           <div className="mt-4">
//             <Button className="w-full py-2 bg-white text-purple-600 border border-purple-600 rounded-md hover:bg-purple-50 transition-all">
//               Sign in with Google
//             </Button>
//           </div>

//           {/* Sign-up Link */}
//           <div className="mt-4 text-center">
//             <span className="text-sm text-gray-600">
//               Don't have an account?{" "}
//             </span>
//             <a href="#" className="text-sm text-purple-600 hover:underline">
//               Sign up
//             </a>
//           </div>
//         </div>

//         {/* Right Section: Illustration Image */}
//         <div className="hidden md:block md:w-1/2 p-0">
//           <img
//             src={images.illustration}
//             alt="Illustration"
//             className="w-full h-screen object-cover object-left"
//             style={{ minWidth: 0 }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

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
    <div className="min-h-screen flex items-center justify-center bg-purple-50 overflow-hidden">
      <div className="flex w-full max-w-6xl">
        {/* Left Section: Login Form */}
        <div className="flex-1 bg-white p-8 max-w-md">
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
                  <input type="checkbox" className="form-checkbox" /> Remember
                  for 30 days
                </label>
                <a href="#" className="text-sm text-purple-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            }
          />

          {/* Google Sign-in with Google Icon */}
          <div className="mt-4">
            <Button className="w-full py-2 bg-white text-purple-600 border border-purple-600 rounded-md hover:bg-purple-50 transition-all flex items-center justify-center space-x-3">
              <img src={images.google_icon} alt="Google" className="h-5 w-5" />
              <span>Sign in with Google</span>
            </Button>
          </div>

          {/* Sign-up Link */}
          <div className="mt-4 text-center">
            <span className="text-sm text-gray-600">
              Don't have an account?{" "}
            </span>
            <a href="#" className="text-sm text-purple-600 hover:underline">
              Sign up
            </a>
          </div>
        </div>

        {/* Right Section: Illustration Image */}
        <div className="hidden md:block md:w-1/2 p-0">
          <img
            src={images.illustration}
            alt="Illustration"
            className="w-full h-screen object-cover object-left"
            style={{ minWidth: 0 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
