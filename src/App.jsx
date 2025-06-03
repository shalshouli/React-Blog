import { Button, Tooltip, Input, Card } from "antd";
import logo from "/cat3.jpg";
import "./App.css";
import { EditOutlined } from "@ant-design/icons";
import ArticleModal from "./components/ArticleModal";
import { useEffect, useState } from "react";
import { getArticles } from "./Fire";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getArticles((posts) => {
      setArticles(posts);
    });
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev/" target="_blank">
          <img src={logo} className="logo" alt="logo" />
        </a>
      </div>
      <h1>TP React</h1>

      <Input
        placeholder="Rechercher un article..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: 300, marginBottom: "20px" }}
      />

      {articles
        .filter(
          (article) =>
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.content.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((article) => (
          <Card
            key={article.id}
            title={article.title || "Titre manquant"}
            style={{ marginBottom: 16, width: "100%", maxWidth: 600 }}
          >
            <p>{article.content || "Contenu manquant"}</p>
            <p style={{ textAlign: "right", fontSize: "0.8rem", color: "#999" }}>
              {article.createdAt?.seconds
                ? new Date(article.createdAt.seconds * 1000).toLocaleString()
                : "Date inconnue"}
            </p>
          </Card>
        ))}

      <Tooltip title="Cliquez ici pour ajouter un article">
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={() => setIsModalOpen(true)}
        >
          Rédiger un article
        </Button>
      </Tooltip>

      {isModalOpen && (
        <ArticleModal
          handleOk={() => setIsModalOpen(false)}
          isOpen={isModalOpen}
          handleCancel={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}

export default App;
