import { Container, Links, Content } from "./styles.js";
import { Header } from "../../components/Header/header.jsx";
import { Button } from "../../components/Button/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Tag } from "../../components/Tag/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";

export function Details() {
  return (
    <>
      <Container>
        <Header />

        <main>
          <Content>
            <ButtonText title="Excluir Nota" />

            <h1>Introdução ao RECAT</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus saepe quae nulla fuga. Voluptatum, ratione. Voluptas,
              perferendis corporis? Quasi cum amet sunt? Voluptas non dicta
              deleniti repudiandae placeat molestiae molestias!
            </p>

            <Section title="links uteis">
              <Links>
                <li>
                  <a href="#">Link 1</a>
                </li>
                <li>
                  <a href="#">Link 1</a>
                </li>
              </Links>
            </Section>

            <Section title="Marcadores">
              <Tag title="Express" />
              <Tag title="nodeJs" />
            </Section>

            <Button title="voltar" />
          </Content>
        </main>
      </Container>
    </>
  );
}
