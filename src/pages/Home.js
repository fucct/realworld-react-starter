import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { api, AuthorizationHeader, errorHandling, validateAccess } from '../components/utils/Utils';
import { Templates } from '../components/Templates';

function Home({ token }) {
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
    const action = favorited ? api.unFavorite(token,
      articles,
      setArticles,
      index,
      slug) : api.favorite(token, articles, setArticles, index, slug)
    if (!favorited) {
      axios.post(`https://conduit.productionready.io/api/articles/${slug}/favorite`,
        null,
        AuthorizationHeader(token))
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

  return articles ? (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <a className="nav-link disabled" href="">Your Feed</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="">Global Feed</a>
                </li>
              </ul>
            </div>
            {articles.map((article, index) => Templates.ArticleTemplate(article, index, onClick))}
            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
                <div className="tag-list">
                  <a href="" className="tag-pill tag-default">programming</a>
                  <a href="" className="tag-pill tag-default">javascript</a>
                  <a href="" className="tag-pill tag-default">emberjs</a>
                  <a href="" className="tag-pill tag-default">angularjs</a>
                  <a href="" className="tag-pill tag-default">react</a>
                  <a href="" className="tag-pill tag-default">mean</a>
                  <a href="" className="tag-pill tag-default">node</a>
                  <a href="" className="tag-pill tag-default">rails</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Home;