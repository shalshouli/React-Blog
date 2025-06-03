import { Input } from "antd";

export default function ArticleForm(props) {
  return (
    <div>
      <Input
        name="title"
        placeholder="Titre"
        value={props.title}
        onChange={props.handleChange}
        style={{ marginBottom: "1rem" }}
      />
      <Input.TextArea
        name="content"
        placeholder="Contenu"
        value={props.content}
        onChange={props.handleChange}
        rows={4}
      />
    </div>
  );
}
