import axios from 'axios';
import { apiUrl } from './Constants';

export const validateAccess = (token, history) => {
  if (!token) {
    alert("로그인 후 이용해주세요.");
    history.replace("/sign-in")
  }
};

export const errorHandling = (error, history) => {
  if (error.response) {
    alert("에러가 발생했습니다..");
    console.log(error.response);
    history.replace("/");
  }
};

export const AuthorizationHeader = token => ({ headers: { "Authorization": "Token " + token } });

export const api = {
  signUp: async (data, history) => {
    const response = await axios.post("https://conduit.productionready.io/api/users", data);
    alert("안녕하세요, " + response.data.user.username);
    history.push("/");
  },

  signIn: async (data, history, setToken) => {
    const response = await axios.post("https://conduit.productionready.io/api/users/login", data);
    const token = response.data.user.token;
    localStorage.setItem("token", token);
    setToken(token);
    history.push("/");
  },

  getArticles: async (token, setArticles) => {
    const config = token ? AuthorizationHeader(token) : null;
    const response = await axios("https://conduit.productionready.io/api/articles", config);
    setArticles(response.data.articles);
  },

  getArticle: async (slug, setArticle) => {
    const response = await axios.get("https://conduit.productionready.io/api/articles/" + slug);
    setArticle(response.data.article);
  },

  write: async (article, token, history) => {
    const response = await axios.post(`${apiUrl}/articles`,
      article,
      AuthorizationHeader(token));
    alert("성공적으로 등록되었습니다.");
    history.push(`/articles/${response.data.article.slug}`);
  },

  favorite: async (token, articles, setArticles, index, slug) => {
    const response = await axios.post(`${apiUrl}/articles/${slug}/favorite`,
      null,
      AuthorizationHeader(token));
    const articleList = [...articles];
    articleList[index] = response.data.article;
    setArticles(articleList);
  },

  unFavorite: async (token, articles, setArticles, index, slug) => {
    const response = await axios.delete(`${apiUrl}/articles/${slug}/favorite`,
      AuthorizationHeader(token));
    const articleList = [...articles];
    articleList[index] = response.data.article;
    setArticles(articleList);
  },
};