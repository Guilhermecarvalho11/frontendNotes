import { Container, Links, Content } from "./styles.js";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { Tag } from "../../components/Tag/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api.js";

export function Details() {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
      console.log("data", data);
    }
    fetchNote();
  }, []);

  return (
    <>
      <Container>
        <Header />

        {data && (
          <main>
            <Content>
              <ButtonText title="Excluir Nota" />

              <h1>{data.title}</h1>
              <p>{data.description}</p>

              {data.links && (
                <Section title="links uteis">
                  <Links>
                    {data.links.map((Link) => (
                      <li key={String(Link.id)}>
                        <a href={Link.url} target="_blank">
                          {Link.url}
                        </a>
                      </li>
                    ))}
                  </Links>
                </Section>
              )}

              {data.tags && (
                <Section title="Marcadores">
                  {data.tags.map((tag) => (
                    <Tag key={String(tag.id)} title={tag.name} />
                  ))}
                </Section>
              )}

              <Button title="voltar" onClick={handleBack} />
            </Content>
          </main>
        )}
      </Container>
    </>
  );
}
