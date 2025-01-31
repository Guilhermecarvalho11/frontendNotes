import { Textarea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Container, Form } from "./styles";
import { useState } from "react";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [newLink, setNewLink] = useState(""); // guarda o link que vai ser add no momento
  const [links, setLinks] = useState([]); // guarda todos os links

  const [newTag, setNewTags] = useState("");
  const [tags, setTags] = useState([]);

  const navigate = useNavigate();

  function handleAddLink() {
    if (!newLink) {
      return alert("add um link");
    }
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleAddTags() {
    if (!newTag) {
      return alert("add uma tag");
    }

    setTags((prevState) => [...prevState, newTag]);
    setNewTags("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("add um Titulo");
    }

    if (newLink) {
      return alert("ficou um Link pendente. Clique para adicionar");
    }

    if (newTag) {
      return alert("ficou uma tag pendente. Clique para adicionar");
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links,
    });

    alert("Nota criadas com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Links úteis">
            {links.map((link, index) => (
              <NoteItem
                key={String(index)}
                placeholder={link}
                onClick={() => {
                  handleRemoveLink(link);
                }}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NoteItem
                  key={String(index)}
                  value={tag}
                  onClick={() => {
                    handleRemoveTag(tag);
                  }}
                />
              ))}

              <NoteItem
                isNew
                placeholder="Nova tag"
                onChange={(e) => setNewTags(e.target.value)}
                value={newTag}
                onClick={handleAddTags}
              />
            </div>
          </Section>

          <Button onClick={handleNewNote} title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
