import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from '../FavoriteButton';

export const Templates = {
  ArticleTemplate: (article, index, onClick) => {
    const { slug, title, description, body, tagList, createdAt, updatedAt, favorited, favoritesCount, author } = article;
    const { username, bio, image, following } = author;

    return (
      <div className="article-preview" key={index} id={slug}>
        <div className="article-meta">
          <Link to={"/profiles/" + username}><img src={image}/></Link>
          <div className="info">
            <Link to={"/profiles/" + username}
                  className="author">{username}</Link>
            <span className="date">{createdAt}</span>
          </div>
          <FavoriteButton index={index} slug={slug} favorited={favorited}
                          favoritesCount={favoritesCount}
                          onClick={onClick}/>
        </div>
        <Link to={"/articles/" + slug} className="preview-link">
          <h1>{title}</h1>
          <p>{description}</p>
          <span>Read more...</span>
          <ul className="tag-list">
            {tagList.map((tag, index) => Templates.TagTemplate(tag, index))}
          </ul>
        </Link>
      </div>
    );
  },

  TagTemplate: (tag, index) => {
    return (
      <li className="tag-pill tag-default" key={index}>{tag}</li>
    );
  },

  ErrorMessageTemplate: (index, key, message) => {
    return (
      <li key={index}>That {key} {message}</li>
    );
  }
}

export default Templates;