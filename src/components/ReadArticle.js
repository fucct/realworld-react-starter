import React, { useEffect, useState } from 'react';
import Article from '../pages/Article';
import axios from 'axios';

function ReadArticle({ match }) {
  const slug = match.params.slug;
  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios.get("https://conduit.productionready.io/api/articles/" + slug)
    .then(response => {
      setArticle(response.data.article);
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response);
      }
    });
  }, []);

  if (article) {
    return (
      <Article article={article}/>
    );
  }
  return false;
}

export default ReadArticle;