import  {Container, Links} from './styles.js';
import { Header } from '../../components/Header/header.jsx';
import { Button } from '../../components/Button/index.jsx';
import { Section } from '../../components/Section/index.jsx';
import { Tag } from '../../components/Tag/index.jsx';
import { ButtonText } from '../../components/ButtonText/index.jsx';

export function Details() {

  return(
    <>
      <Container>
        <Header />
        <ButtonText title="Excluir Nota" />

        <Section title='links uteis'>
          <Links>
            <li><a href='#'>Link 1</a></li>
            <li><a href='#'>Link 1</a></li>
          </Links>
        </Section>

        <Section title="Marcadores"> 
          <Tag title='Express' />
          <Tag title='nodeJs' />
        </Section>

      <Button title='voltar'/>
      </Container>
    </>
  ) 
}

