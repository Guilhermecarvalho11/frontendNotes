import { Container, Profile, Logout } from "./styled";
import { RiShutDownLine } from "react-icons/ri";

export function Header() {
  return (
    <Container>
      <Profile>
        <img
          src="https://github.com/Guilhermecarvalho11.png"
          alt="Foto do usuario"
        />

        <div>
          <span>Bem-Vindo</span>
          <strong>Guilherme Carvalho</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
