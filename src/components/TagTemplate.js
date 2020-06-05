import React from 'react';

const ArticleTemplate = (tag, index) => {
  return (
    <div className="tag-pill tag-default" key={index}>{tag}</div>
  );
}

export default ArticleTemplate;