import React, { useEffect, useState } from 'react';
import { api, errorHandling, validateAccess } from '../components/utils/Utils';
import { Templates } from '../components/utils/Templates';

function Home({ token, history }) {
  const [articles, setArticles] = useState();

  useEffect(() => {
    try {
      api.getArticles(token, setArticles);
    }
    catch (error) {
      errorHandling(error, history);
    }
  }, []);

  const onClick = (e, favorited, index, slug) => {
    validateAccess(history);
    const action = favorited ? api.unFavorite : api.favorite;
    try {
      action(token, articles, setArticles, index, slug);
    }
    catch (error) {
      errorHandling(error, history);
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