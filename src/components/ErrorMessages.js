import React from 'react';
import Templates from './Templates';


function ErrorMessages({ error }) {
  const makeTemplate = () => {
    return Object.entries(error)
    .map(([key, value], index) => {
      if (value) {
        return Templates.ErrorMessageTemplate(index, key, [value])
      }
      return false;
    });
  }

  return (
    <ul className="error-messages">
      {makeTemplate()}
    </ul>
  );
}

export default ErrorMessages;