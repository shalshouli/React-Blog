import { Button, Tooltip } from "antd";
import logo from "/cat.jpg";
import "./App.css";
import { EditOutlined } from "@ant-design/icons";
import ArticleModal from "./components/ArticleModal";
import { useEffect, useState } from "react";
import { getArticles } from "./Fire";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles((posts) => {
      setArticles(posts);
    });
  }, []);

  console.log(articles);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={logo} className="logo" alt="logo" />
        </a>
      </div>
      <h1>Le blog de Shelley</h1>

      {articles.map((article) => (
        <>
          <h2 key={article.id}>{article.title}</h2>
          <p>{article.content}</p>
        </>
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
        ></ArticleModal>
      )}
    </>
  );
}

export default App;
