import React from 'react';
import Main from './Main';
import { useHistory } from 'react-router-dom';

function SignOut(props) {
  const history = useHistory();
  localStorage.clear();
  history.push("/");

  return (
    <>
      <Main/>
    </>
  );
}

export default SignOut;