import React, { useEffect, useState } from "react";
import { Route, useHistory } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import Settings from './pages/Settings';
import ShowProfile from './components/ShowProfile';
import Editor from './pages/Editor';
import ReadArticle from './components/ReadArticle';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignUp from './components/SignUp';

const App = () => {
  const history = useHistory();
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  // 참고: https://github.com/gothinkster/realworld/tree/master/api
  (async () => {
    const response = await fetch("https://conduit.productionready.io/api/articles", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    });
    const content = await response.json();
  })();

  return (
    <>
      <Header token={token}/>
      <Route path="/" exact={true}><Home token={token}/></Route>
      <Route path="/sign-up" exact={true}><SignUp history={history}/></Route>
      <Route path="/sign-in" exact={true}><SignIn history={history}/></Route>
      <Route path="/sign-out" exact={true}><SignOut token={token} history={history}/></Route>
      <Route path="/profiles/:username"><ShowProfile/></Route>
      <Route path="/settings" exact={true}><Settings token={token} history={history}/></Route>
      <Route path="/write" exact={true}><Editor token={token} history={history}/></Route>
      <Route path="/articles/:slug" component={ReadArticle}/>
      <Footer/>
    </>
  );
};

export default App;
