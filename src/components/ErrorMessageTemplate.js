import React from 'react';

function ErrorMessageTemplate(index, key, message) {
  return (
    <li key={index}>That {key} {message}</li>
  );
}

export default ErrorMessageTemplate;