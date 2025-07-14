import { useLogin } from "../../hooks/useLogin";
import Form from "../../components/form/Form";
import FormHeader from "../../components/formHeader/FormHeader";

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
    <div className="max-w-lg mx-auto p-6">
      <Form
        header={<FormHeader title="Login" subtitle="Sign in to your account" />}
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
        ]}
        onSubmit={handleSubmit}
        buttonText="Login"
        buttonLoadingText="Logging in..."
        loading={loading}
        error={error}
        success={success}
      />
    </div>
  );
};

export default Login;
