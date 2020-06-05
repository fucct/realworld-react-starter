import React, { useEffect, useState } from 'react';
import Header from './Header';
import ShowHome from './ShowHome';
import Footer from './Footer';

function Main(props) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const onClickSignOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    setToken(null);
  }

  return (
    <>
      <Header token={token} onClickSignOut={onClickSignOut}/>
      <ShowHome/>
      <Footer/>
    </>
  );
}

export default Main;