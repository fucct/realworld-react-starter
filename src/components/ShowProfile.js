import React, { useEffect, useState } from 'react';
import { api } from './utils/Utils';
import Profile from '../pages/Profile';

function ShowProfile({ match, history, token }) {
  const [articles, setArticles] = useState();
  const [user, setUser] = useState({
    username: null,
    bio: null,
    image: null,
    following: null,
  });

  const { username, bio, image, following } = user;

  useEffect(() => {
    try {
      api.getProfile(token, match.params.username, setUser);
    }
    catch (error) {
      if (error.response) {
        alert("에러가 발생했습니다..");
        console.log(error.response.data);
      }
    }
  }, [])

  return username ? (
    <Profile token={token} history={history} username={username} image={image} bio={bio}
             following={following}/>
  ) : null;
}

export default ShowProfile;