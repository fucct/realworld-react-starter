import axios from 'axios';
import { apiUrl } from './Constants';

export const validateAccess = history => {
  const token = localStorage.getItem("token");
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