import React, { useEffect, useState } from "react";
import axios from 'axios';
import ArticleTemplate from '../components/utils/Templates';

const Profile = ({ username, bio, image, following }) => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    axios.get(`https://conduit.productionready.io/api/articles?author=${username}`)
    .then(response => {
      setArticles(response.data.articles);
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response);
      }
    });
  }, []);

  if (articles) {
    return (
      <div className="profile-page">
        <div className="user-info">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">
                <img src={image} className="user-img"/>
                <h4>{username}</h4>
                <p>
                  {bio}
                </p>
                <button className="btn btn-sm btn-outline-secondary action-btn">
                  <i className="ion-plus-round"/>
                  &nbsp;
                  Follow {username}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <div className="articles-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <a className="nav-link active" href="">My Articles</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">Favorited Articles</a>
                  </li>
                </ul>
              </div>
              {articles.map((article, index) => ArticleTemplate(article, index))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return false;
  }
}

export default Profile;
