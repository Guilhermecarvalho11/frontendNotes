//aqui é quando o usuario não estiver logado
import { Routes, Route } from "react-router-dom";

import { SignIn } from "../components/Signin";
import { SignUp } from "../components/SignUp";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Routes>
  );
}
