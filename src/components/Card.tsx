/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ article }): JSX.Element => {
  const { author, title, publishedAt, content, urlToImage } = article;

  return (
    <div className="main__card">
      <h4 className="main__card-item">{title}</h4>
      <h5 className="main__card-item">Author: {author}</h5>
      <p className="main__card-item">{publishedAt}</p>
      <img className="main__card-img" src={urlToImage} alt={title} />
      <p className="main__card-item">{content}</p>
      <Link to={`/details/${publishedAt}`}>Read more</Link>
    </div>
  );
};

export default Card;
