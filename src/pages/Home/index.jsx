import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styled";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";
import { Note } from "../../components/Note";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="NodeJs" isActive />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo Título" icon={FiSearch} />
      </Search>

      <Content title="React Modal">
        <Note
          data={{
            title: "React",
            tags: [
              { id: "1", name: "node" },
              { id: "2", name: "javascript" },
            ],
          }}
        ></Note>
      </Content>

      <NewNote>
        <FiPlus />
        Criar Notas
      </NewNote>
    </Container>
  );
}
