import React, { useEffect, useState } from 'react';
import { api } from '../components/utils/Utils';
import { Link } from 'react-router-dom';

function Article({ match }) {
  const slug = match.params.slug;
  const [article, setArticle] = useState({
    title: null,
    description: null,
    body: null,
    tagList: null,
    createdAt: null,
    updatedAt: null,
    favorited: null,
    favoritesCount: null,
    author: {
      username: null,
      bio: null,
      image: null,
      following: null,
    },
  });
  let { title, description, body, tagList, createdAt, updatedAt, favorited, favoritesCount, author } = article;
  let { username, bio, image, following } = author;

  useEffect(() => {
    try {
      api.getArticle(slug, setArticle);
    }
    catch (error) {
      if (error.response) {
        alert(error.response.data);
      }
    }
  }, []);

  return article ? (
    <div className="article-page">
      <div className="banner">
        <div className="container">
          <h1>{title}</h1>
          <div className="article-meta">
            <Link to={"/profiles/" + username}><img src={image}/></Link>
            <div className="info">
              <a href="" className="author">{username}</a>
              <span className="date">{createdAt}</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"/>
              &nbsp;
              Follow {username} <span className="counter">(?)</span>
            </button>
            &nbsp;&nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"/>
              &nbsp;
              Favorite Post <span className="counter">({favoritesCount})</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container page">
        <div className="row article-content">
          <div className="col-md-12">
            <p>
              {description}
            </p>
            {body}
          </div>
        </div>
        <hr/>
        <div className="article-actions">
          <div className="article-meta">
            <Link to={"/profiles/" + username}><img src={image}/></Link>
            <div className="info">
              <Link to={"/profiles/" + username} className="author">{username}</Link>
              <span className="date">{createdAt}</span>
            </div>
            <button className="btn btn-sm btn-outline-secondary">
              <i className="ion-plus-round"/>
              &nbsp;
              Follow {username} <span className="counter">(?)</span>
            </button>
            &nbsp;
            <button className="btn btn-sm btn-outline-primary">
              <i className="ion-heart"/>
              &nbsp;
              Favorite Post <span className="counter">({favoritesCount})</span>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-8 offset-md-2">
            <form className="card comment-form">
              <div className="card-block">
              <textarea className="form-control" placeholder="Write a comment..."
                        rows="3"/>
              </div>
              <div className="card-footer">
                <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img"/>
                <button className="btn btn-sm btn-primary">
                  Post Comment
                </button>
              </div>
            </form>
            <div className="card">
              <div className="card-block">
                <p className="card-text">With supporting text below as a natural lead-in to
                  additional
                  content.</p>
              </div>
              <div className="card-footer">
                <a href="" className="comment-author">
                  <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img"/>
                </a>
                &nbsp;
                <a href="" className="comment-author">Jacob Schmidt</a>
                <span className="date-posted">Dec 29th</span>
              </div>
            </div>
            <div className="card">
              <div className="card-block">
                <p className="card-text">With supporting text below as a natural lead-in to
                  additional
                  content.</p>
              </div>
              <div className="card-footer">
                <a href="" className="comment-author">
                  <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img"/>
                </a>
                &nbsp;
                <a href="" className="comment-author">Jacob Schmidt</a>
                <span className="date-posted">Dec 29th</span>
                <span className="mod-options">
              <i className="ion-edit"/>
              <i className="ion-trash-a"/>
            </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default Article;