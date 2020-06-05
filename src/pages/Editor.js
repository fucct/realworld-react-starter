import React from "react";
import TagTemplate from '../components/TagTemplate';
import ErrorMessages from '../components/ErrorMessages';

const Editor = ({ onChange, onClick, onKeyPress, tags, error }) => (
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
                <div className="tag-list">
                  {Array.from(tags).map((tag, index) => TagTemplate(tag, index))}
                </div>
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
  </div>);

export default Editor;
