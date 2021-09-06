import React from 'react';

interface ICard {
  name: string;
  artist: string;
  when: string;
  likes: number;
  watched: number;
  img: string;
}

const Card = ({ name, artist, when, likes, watched, img }: ICard): JSX.Element => (
  <div className="main__card">
    <img className="main__card-img" src={img} alt="pic" />
    <div className="main__card-info">
      <div className="main__card-name">{name}</div>
      <div className="main__card-artist">{artist}</div>
      <div className="main__card-when">{when}</div>
    </div>
    <div className="main__card-stat">
      <div className="main__card-likes">
        <img src="../../public/like-svgrepo-com.svg" alt="likes" className="main__card-likes-img" />
        {likes}
      </div>
      <div className="main__card-watched">
        <img src="../../public/eye-svgrepo-com.svg" alt="watched" className="main__card-watched-img" />
        {watched}
      </div>
    </div>
  </div>
);

export default Card;
