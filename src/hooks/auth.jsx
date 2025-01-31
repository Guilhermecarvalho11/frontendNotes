/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children /*todas as rotas da aplicação*/ }) {
  const [data, setData] = useState({});

  async function singIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password }); //mandando email e senha para o backend
      const { user, token } = response.data;
      console.log("Login bem-sucedido:", response);
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      localStorage.setItem("@rocketnotes:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`; //inserindo um token de autorização em todas as REQ

      setData({ token, user });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
        console.error("Erro na resposta do servidor:", error.response.status);
        console.error("Dados do erro:", error.response.data);
      } else if (error.request) {
        // A solicitação foi feita, mas nenhuma resposta foi recebida
        console.error("Nenhuma resposta recebida:", error.request);
      } else {
        // Algo aconteceu na configuração da solicitação que desencadeou um erro
        console.error("Erro ao configurar a solicitação:", error.message);
      }
    }
  }

  function signOut() {
    // remover usuario do localStorage
    const token = localStorage.removeItem("@rocketnotes:token");
    const user = localStorage.removeItem("@rocketnotes:user");

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const responde = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = responde.data.avatar;
      }

      await api.put("/users", user);
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      setData({ user, token: data.token });
      alert("perfil atualizado");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("não foi possivel atualizar o perfil");
        console.log(error.response.data.message);
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token");
    const user = localStorage.getItem("@rocketnotes:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ singIn, user: data.user, signOut, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
