import { useForgotPassword } from "../../hooks/useForgotPassword";
import Form from "../../components/form/Form";
import FormHeader from "../../components/formHeader/FormHeader";

const ForgotPassword = () => {
  const { email, setEmail, error, success, loading, handleSubmit } =
    useForgotPassword();

  return (
    <div className="max-w-lg mx-auto p-6">
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
    </div>
  );
};

export default ForgotPassword;
