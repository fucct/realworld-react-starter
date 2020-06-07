import React from 'react';

function FavoriteButton({ index, slug, favorited, favoritesCount, onClick }) {
  return favorited ? (
    <button className="btn btn-outline-primary btn-sm pull-xs-right active"
            onClick={(e) => onClick(e, favorited, index, slug)}>
      <i className="ion-heart"/> {favoritesCount}
    </button>
  ) : (
    <button className="btn btn-outline-primary btn-sm pull-xs-right"
            onClick={(e) => onClick(e, favorited, index, slug)}>
      <i className="ion-heart"/> {favoritesCount}
    </button>
  );
}

export default FavoriteButton;