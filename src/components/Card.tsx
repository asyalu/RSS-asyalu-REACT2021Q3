/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

const Card = ({ data }): JSX.Element => {
  const { country, firstName, lastName, birthDate, gender } = data;

  return (
    <div className="main__card">
      <div className="main__card-item">First name: {firstName}</div>
      <div className="main__card-item">Last name: {lastName}</div>
      <div className="main__card-item">Sex: {gender ? 'female' : 'male'}</div>
      <div className="main__card-item">Birth date: {birthDate}</div>
      <div className="main__card-item">Country: {country}</div>
    </div>
  );
};

export default Card;
