import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Profile from '../pages/Profile';

function ShowProfile({ match }) {
  const [user, setUser] = useState({
    username: null,
    bio: null,
    image: null,
    following: null,
  });

  const { username, bio, image, following } = user;

  useEffect(() => {
    axios.get("https://conduit.productionready.io/api/profiles/" + match.params.username, {
      headers: {
        Authorization: "Token " + localStorage.getItem("token")
      }
    }).then(response => {
      setUser(response.data.profile);
    }).catch(error => {
      if (error.response) {
        console.log(error.response.data);
      }
    })
  }, [])

  return (
    <Profile username={username} bio={bio} image={image} following={following}/>
  );
}

export default ShowProfile;