import { useResetPassword } from "../../hooks/useResetPassword";
import Form from "../../components/form/Form";
import FormHeader from "../../components/formHeader/FormHeader";

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
    <div className="max-w-lg mx-auto p-6">
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
    </div>
  );
};

export default ResetPassword;
