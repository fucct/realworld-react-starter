import React, { useEffect, useState } from 'react';
import Header from './Header';
import ShowHome from './ShowHome';
import Footer from './Footer';

function Main(props) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <>
      <Header token={token}/>
      <ShowHome token={token}/>
      <Footer/>
    </>
  );
}

export default Main;