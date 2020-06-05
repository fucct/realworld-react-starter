import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from '../pages/Profile';

function ShowProfile(props) {
  const [user, setUser] = useState({
    email: null,
    token: null,
    username: null,
    bio: null,
    image: null
  });

  const { email, username, bio, image } = user;

  useEffect(() => {
    axios.get("https://conduit.productionready.io/api/user", {
      headers: {
        Authorization: "Token " + localStorage.getItem("token")
      }
    }).then(response => {
      setUser(response.data.user);
    }).catch(error => {
      if (error.response) {
        console.log(error.response);
      }
    })
  }, [])

  return (
    <Profile email={email} username={username} bio={bio} image={image}/>
  );
}

export default ShowProfile;