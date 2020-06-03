import React from 'react';
import ErrorMessageTemplate from './ErrorMessageTemplate';


function ErrorMessages({ error }) {
  const makeTemplate = () => {
    return Object.entries(error)
    .map(([key, value], index) => {
      if (value) {
        return ErrorMessageTemplate(index, key, [value])
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