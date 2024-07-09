import { Container, Profile, Logout } from "./styled";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signOut } = useAuth();
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/Guilhermecarvalho11.png"
          alt="Foto do usuario"
        />

        <div>
          <span>Bem-Vindo</span>
          <strong>Guilherme Carvalho</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
