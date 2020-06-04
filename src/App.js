import React from "react";
import { Route } from 'react-router-dom';
import Main from './components/Main';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

const App = () => {

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
      <Route path="/" component={Main} exact={true}/>
      <Route path="/sign-up" component={SignUp} exact={true}/>
      <Route path="/sign-in" component={SignIn} exact={true}/>
      <Route path="/sign-out" component={SignOut} exact={true}/>
    </>
  );
};

export default App;
