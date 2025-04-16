import { useState } from "react";
import { authService } from "../services/authService";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError("");
    try {
      await authService.login(email, password);
    } catch (err) {
      setError("Failed to login");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};
