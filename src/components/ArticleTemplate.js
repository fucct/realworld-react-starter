import React from 'react';
import { Link } from 'react-router-dom';

const ArticleTemplate = article => {
  console.log(article);
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={"/profile/" + article.author.username}><img src={article.author.image}/></Link>
        <div className="info">
          <Link to={"/profile/" + article.author.username}
                className="author">{article.author.username}</Link>
          <span className="date">{article.createdAt}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"/> {article.favoritesCount}
        </button>
      </div>
      <a href="" className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <span>Read more...</span>
      </a>
    </div>
  );
}

export default ArticleTemplate;