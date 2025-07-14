import { useRegister } from "../../hooks/useRegister";
import Form from "../../components/form/Form";
import FormHeader from "../../components/formHeader/FormHeader";

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
    <div className="max-w-lg mx-auto p-6">
      <Form
        header={<FormHeader title="Register" subtitle="Create a new account" />}
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
    </div>
  );
};

export default Register;
