import { api } from "@/lib/api";

export const authService = {
  login: async (email: string, password: string) => {
    const res = await api.post("/auth/login", { email, password });
    return res.data;
  },
  logout: async () => {
    await api.post("/auth/logout");
  }
};
