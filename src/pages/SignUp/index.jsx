import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Background } from "./styles";
import { api } from "../../services/api";
import { useState } from "react";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassowd] = useState("");
  const navigate = useNavigate();

  function handleSingup() {
    if (!name || !email || !password) {
      return alert("preencha todos os campos");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso");
        navigate("/");
      })
      .catch((error) => {
        if (error.res) {
          alert(error.res.data.message);
        } else {
          alert("não foi possivel cadastrar");
          console.log(error.res.data.message);
        }
      });
  }
  return (
    <Container>
      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie Sua conta</h2>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={(e) => setPassowd(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSingup} />

        <Link to="/">Voltar para o Login</Link>
      </Form>
    </Container>
  );
}
