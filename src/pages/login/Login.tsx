// src/pages/LoginPage/LoginPage.
import LoginForm from "../../components/loginForm/LoginForm";
import AuthHeader from "../../components/authHeader/AuthHeader";

const Login = () => (
  <div className="max-w-lg mx-auto p-6">
    <AuthHeader />
    <LoginForm />
  </div>
);

export default Login;
