/* eslint-disable prettier/prettier */
/* eslint-disable object-curly-newline */
import React from 'react';

const DetailArticle = ({ article }): JSX.Element => {
  const { author, title, publishedAt, content, urlToImage, url, description } = article;

  return (
    <div className="details">
      <h2 className="details__title">{title}</h2>
      <h6>
        Author:
        {author}
      </h6>
      <h6>
        Published:
        {publishedAt}
      </h6>
      <h4>Description</h4>
      <h5>{description}</h5>
      <img className="details__img" src={urlToImage} alt="title" />
      <h4 className="details__coontent">{content}</h4>
      <a className="details__link" href={url}>
        Read more in the source
      </a>
    </div>
  );
};

export default DetailArticle;
