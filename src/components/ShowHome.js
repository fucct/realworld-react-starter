import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Home from '../pages/Home';
import { errorHandling, validateAccess } from './Utils';

function ShowHome({ token }) {
  const [articles, setArticles] = useState();
  const history = useHistory();

  useEffect(() => {
    const config = token ? { headers: { Authorization: "Token " + localStorage.getItem("token") } } : null;
    axios.get("https://conduit.productionready.io/api/articles", config)
    .then(response => {
      setArticles(response.data.articles);
    })
    .catch(error => {
      errorHandling(error, history);
    });
  }, []);

  const onClick = (e, favorited, index, slug) => {
    validateAccess(history);
    if (!favorited) {
      axios.post(`https://conduit.productionready.io/api/articles/${slug}/favorite`,
        null,
        { headers: { "Authorization": "Token " + token } })
      .then(response => {
        const articleList = [...articles];
        articleList[index] = response.data.article;
        setArticles(articleList);
      })
      .catch(error => {
        errorHandling(error, history);
      });
    } else {
      axios.delete(`https://conduit.productionready.io/api/articles/${slug}/favorite`,
        { headers: { "Authorization": "Token " + token } })
      .then(response => {
        const articleList = [...articles];
        articleList[index] = response.data.article;
        setArticles(articleList);
      })
      .catch(error => {
        errorHandling(error, history)
      });
    }
  }

  return <Home articles={articles} onClick={onClick}/>
}

export default ShowHome;