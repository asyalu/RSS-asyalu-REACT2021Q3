/* eslint-disable object-curly-newline */
import React from 'react';
import { useParams } from 'react-router-dom';

const Details = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  return <div>{id}</div>;
};

export default Details;
