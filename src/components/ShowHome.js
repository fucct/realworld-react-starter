import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from '../pages/Home';

function ShowHome(props) {
  const [articles, setArticles] = useState();
  useEffect(() => {
    axios.get("https://conduit.productionready.io/api/articles")
    .then(response => {
      setArticles(response.data.articles);
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response);
      }
    });
  }, []);

  return <Home articles={articles}/>
}

export default ShowHome;