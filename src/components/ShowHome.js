import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from '../pages/Home';

function ShowHome({ token }) {
  const [articles, setArticles] = useState();

  useEffect(() => {
    axios.get("https://conduit.productionready.io/api/articles", {
      headers: {
        Authorization: "Token " + localStorage.getItem("token")
      }
    })
    .then(response => {
      setArticles(response.data.articles);
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response);
      }
    });
  }, []);

  const onClick = (e, favorited, index, slug) => {
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
        if (error.response) {
          console.log(error.response);
        }
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
        if (error.response) {
          console.log(error.response);
        }
      });
    }
  }

  return <Home articles={articles} onClick={onClick}/>
}

export default ShowHome;