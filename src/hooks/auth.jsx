/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children /*todas as rotas da aplicação*/ }) {
  const [data, setData] = useState({});
  async function singIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password }); //mandando email e senha para o backend
      const { user, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`; //inserindo um token de autorização em todas as REQ

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("não foi possivel entrar");
      }
    }
  }

  return (
    <AuthContext.Provider value={{ singIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
