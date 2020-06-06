import React from 'react';

const ArticleTemplate = (tag, index) => {
  return (
    <li className="tag-pill tag-default" key={index}>{tag}</li>
  );
}

export default ArticleTemplate;