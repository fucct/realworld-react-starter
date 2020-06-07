import React, { useEffect, useState } from "react";
import { Route, useHistory } from 'react-router-dom';
import SignIn from './components/SignIn';
import Article from './pages/Article';
import Header from './components/Header';
import Home from './pages/Home';
import SignUp from './components/SignUp';
import ShowProfile from './components/ShowProfile';
import Settings from './pages/Settings';
import Editor from './pages/Editor';
import Footer from './components/Footer';

const App = () => {
  const history = useHistory();
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const logOut = e => {
    e.preventDefault();
    localStorage.clear();
    setToken(null);
    alert("정상적으로 로그아웃 되었습니다.");
    history.push("/");
  };

  return (
    <>
      <Header token={token} logOut={logOut}/>
      <Route path="/" exact={true}><Home token={token} history={history}/></Route>
      <Route path="/sign-up" exact={true}><SignUp history={history}/></Route>
      <Route path="/sign-in" exact={true}><SignIn history={history} setToken={setToken}/></Route>
      <Route path="/profiles/:username" exact
             render={(props) => <ShowProfile match={props.match} history={history}
                                             token={token}/>}/>
      <Route path="/settings" exact={true}><Settings token={token} history={history}/></Route>
      <Route path="/write" exact={true}><Editor token={token} history={history}/></Route>
      <Route path="/articles/:slug" component={Article}/>
      <Footer/>
    </>
  );
};

export default App;
