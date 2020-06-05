import React from 'react';
import { Link } from 'react-router-dom';

const ArticleTemplate = (article, index) => {
  return (
    <div className="article-preview" key={index} id={article.slug}>
      <div className="article-meta">
        <Link to={"/profiles/" + article.author.username}><img src={article.author.image}/></Link>
        <div className="info">
          <Link to={"/profiles/" + article.author.username}
                className="author">{article.author.username}</Link>
          <span className="date">{article.createdAt}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"/> {article.favoritesCount}
        </button>
      </div>
      <Link to={"/articles/" + article.slug} className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <span>Read more...</span>
      </Link>
    </div>
  );
}

export default ArticleTemplate;