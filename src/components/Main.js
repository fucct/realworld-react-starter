import React from 'react';
import Header from './Header';
import Home from '../pages/Home';
import Footer from './Footer';

function Main(props) {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default Main;