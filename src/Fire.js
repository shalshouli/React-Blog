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

export const addArticle = (article) => {
  addDoc(collection(db, "articles"), article);
};

export const updateArticle = (article) => {
  updateDoc(doc(db, "articles", article.id), article);
};

export const deleteArticle = (article) => {
  deleteDoc(doc(db, "articles", article.id));
};
