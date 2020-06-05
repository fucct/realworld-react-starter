import React, { useEffect, useState } from 'react';
import Header from './Header';
import ShowHome from './ShowHome';
import Footer from './Footer';

function Main(props) {
  const [isToken, setIsToken] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setIsToken(true);
    } else {
      setIsToken(false);
    }
  }, []);

  const onClickSignOut = (e) => {
    e.preventDefault();
    console.log(isToken);
    if (isToken) {
      localStorage.clear();
      setIsToken(false);
    }
  }

  return (
    <>
      <Header isToken={isToken} onClickSignOut={onClickSignOut}/>
      <ShowHome/>
      <Footer/>
    </>
  );
}

export default Main;