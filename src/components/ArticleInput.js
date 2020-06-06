import React, { useReducer, useState } from 'react';
import Editor from '../pages/Editor';
import axios from 'axios';
import validateAccess from './Utils';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

function ArticleInput(props) {
  validateAccess(props);
  
  const [article, dispatch] = useReducer(reducer, {
    title: null,
    description: null,
    body: null,
    tagList: null,
  });
  const [error, setError] = useState({
    title: null,
    description: null,
    body: null,
  });
  const [tags, setTags] = useState(new Set());

  const { title, description, body, tagList } = article;

  const onChange = e => {
    dispatch(e.target);
  };

  const onClick = e => {
    const token = localStorage.getItem("token");
    const article = {
      "article": {
        "title": title,
        "description": description,
        "body": body,
        "tagList": Array.from(tags)
      }
    }
    axios.post("https://conduit.productionready.io/api/articles",
      article,
      { headers: { "Authorization": "Token " + token } })
    .then(response => {
      alert("성공적으로 등록되었습니다.");
      props.history.push("/");
    })
    .catch(error => {
      if (error.response) {
        const errorList = error.response.data.errors;
        const errors = {
          title: errorList.title,
          description: errorList.description,
          body: errorList.body,
        };
        setError(errors);
      }
    });
  }

  const onKeyPress = e => {
    if ((e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      const tag = e.target.value.trim();
      if (!tag) {
        alert("공백은 입력하실 수 없습니다!");
        return;
      }
      e.target.value = null;
      setTags(new Set(tags).add(tag));
    }
  }

  return (
    <>
      <Editor onChange={onChange} onClick={onClick} onKeyPress={onKeyPress}
              tags={tags} error={error}/>
    </>
  );
}

export default ArticleInput;