import { useLogin } from "../hooks/useLogin";
import { FormField } from "@/components/molecules/FormField";
import { Button } from "@/components/atoms/Button";

export const LoginForm = () => {
  const { login, loading, error } = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login("admin@example.com", "123456"); // dummy for example
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
      <FormField label="Email">
        <input type="email" className="input" />
      </FormField>
      <FormField label="Password">
        <input type="password" className="input" />
      </FormField>
      <Button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </Button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};
