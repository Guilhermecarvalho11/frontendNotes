import  {Container, Links} from './styles.js';
import { Header } from '../../components/Header/header.jsx';
import { Button } from '../../components/Button/index.jsx';
import { Section } from '../../components/Section/index.jsx';
export function Details() {

  return(
    <>
      <Container>
        <Header />

        <Section title='links uteis'>
          <Links>
            <li><a href='#'>Link 1</a></li>
            <li><a href='#'>Link 1</a></li>
          </Links>
        </Section>

      <Button title='voltar'/>
      </Container>
    </>
  ) 
}

