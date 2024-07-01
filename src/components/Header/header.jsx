import { Container, Profile } from "./styled";

export function Header(){
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

        </Container>
    )
}