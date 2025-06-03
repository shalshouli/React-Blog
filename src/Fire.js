import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB88krmusXFW-fpo9jVGMjM07v9f4dRHU",
  authDomain: "blog-df9b9.firebaseapp.com",
  projectId: "blog-df9b9",
  storageBucket: "blog-df9b9.firebasestorage.app",
  messagingSenderId: "537190236034",
  appId: "1:537190236034:web:0ca3c7236da335da6e999b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getArticles = (callback) => {
  const q = query(collection(db, "articles"), orderBy("title", "asc"));
  onSnapshot(q, (snapshot) => {
    let articles = [];
    snapshot.forEach((doc) => {
      articles.push({ id: doc.id, ...doc.data() });
    });
    callback(articles);
  });
};

export const addArticle = async (article, callback) => {
  try {
    await addDoc(collection(db, "articles"), article);
    if (callback) callback();
  } catch (error) {
    console.error("Erreur d'ajout :", error);
  }
};

export const updateArticle = async (article) => {
  try {
    await updateDoc(doc(db, "articles", article.id), article);
  } catch (error) {
    console.error("Erreur de mise à jour :", error);
  }
};

export const deleteArticle = async (article) => {
  try {
    await deleteDoc(doc(db, "articles", article.id));
  } catch (error) {
    console.error("Erreur de suppression :", error);
  }
};
