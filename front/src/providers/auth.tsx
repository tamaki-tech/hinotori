import { api } from "@/api/client";
import { LoginRequest, LoginResponse } from "@/api/schemas";
import storage from "@/utils/storage";
import { createContext } from "react";

interface ContextProps {
  login: (body: LoginRequest) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<ContextProps>({} as ContextProps);

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const handleUserResponse = async (data: LoginResponse) => {
    storage.setAuthInfo(data);
  };

  const login = async (body: LoginRequest) => {
    const response = await api.login({ body: body });
    await handleUserResponse(response);
  };

  const logout = async () => {
    storage.clearAuthInfo();
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
