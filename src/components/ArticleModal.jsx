import { Modal, Button } from "antd";
import ArticleForm from "./ArticleForm";
import { useState } from "react";
import { addArticle } from "../Fire";

export default function ArticleModal(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "title") {
      setTitle(event.target.value);
    } else if (event.target.name === "content") {
      setContent(event.target.value);
    }
  };

const handleSubmit = () => {
  const article = {
    title: title,
    content: content,
    createdAt: new Date(),
    comments: [],
  };

  addArticle(article, () => {
    alert("Article ajouté !");
    setTitle("");
    setContent("");
    props.handleOk(); // ferme la modale après ajout réussi
  });
};


  return (
    <Modal
      title="Écrire un article"
      open={props.isOpen}
      onCancel={props.handleCancel}
      footer={
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Valider
        </Button>
      }
    >
      <ArticleForm title={title} content={content} handleChange={handleChange} />
    </Modal>
  );
}