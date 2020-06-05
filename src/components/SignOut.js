import React from 'react';
import Main from './Main';

function SignOut(props) {
  localStorage.clear();

  return (
    <>
      <Main/>
    </>
  );
}

export default SignOut;