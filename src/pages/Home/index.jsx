import { Container, Brand, Menu, Search, Content, NewNote } from "./styled";
import { Header } from "../../components/Header";
export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Notes</h1>
      </Brand>

      <Header />

      <Menu></Menu>

      <Search></Search>

      <Content></Content>

      <NewNote></NewNote>
    </Container>
  );
}
