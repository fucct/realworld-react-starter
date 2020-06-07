import React, { useReducer, useState } from 'react';
import { api, validateAccess } from '../components/utils/Utils';
import ErrorMessages from '../components/ErrorMessages';
import { KEY_TYPE } from '../components/utils/Constants';
import { Templates } from '../components/utils/Templates';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

function Editor({ token, history }) {
  validateAccess(token, history);

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
    try {
      api.write(article, token, history);
    }
    catch (error) {
      if (error.response) {
        const errorList = error.response.data.errors;
        const errors = {
          title: errorList.title,
          description: errorList.description,
          body: errorList.body,
        };
        setError(errors);
      }
    }
  }

  const onKeyPress = e => {
    if ((e.key === KEY_TYPE.ENTER || e.key === KEY_TYPE.SPACE_BAR)) {
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
    <div className="editor-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-10 offset-md-1 col-xs-12">
            <h1 className="text-xs-center">Article</h1>
            <ErrorMessages error={error}/>
            <form>
              <fieldset>
                <fieldset className="form-group">
                  <input type="text" className="form-control form-control-lg"
                         placeholder="Article Title" name="title" onChange={onChange}/>
                </fieldset>
                <fieldset className="form-group">
                  <input type="text" className="form-control"
                         placeholder="What's this article about?" name="description"
                         onChange={onChange}/>
                </fieldset>
                <fieldset className="form-group">
                <textarea className="form-control" rows="8"
                          placeholder="Write your article (in markdown)" name="body"
                          onChange={onChange}/>
                </fieldset>
                <fieldset className="form-group">
                  <input type="text" className="form-control" placeholder="Enter tags(optional)"
                         name="tagList"
                         onChange={onChange} onKeyPress={onKeyPress}/>
                  <ul className="tag-list">
                    {Array.from(tags).map((tag, index) => Templates.TagTemplate(tag, index))}
                  </ul>
                </fieldset>
                <button className="btn btn-lg pull-xs-right btn-primary" type="button"
                        onClick={onClick}>
                  Publish Article
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;