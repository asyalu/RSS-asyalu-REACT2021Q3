/* eslint-disable object-curly-newline */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API_KEY from '../API_KEY';
import DetailArticle from './DetailArticle';

const Details = (): JSX.Element => {
  const [article, setArticle] = useState([]);
  const { id } = useParams<{ id: string }>();

  const getArticle = async (): Promise<void> => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?qInTitle=${id}&apiKey=${API_KEY}`,
    );
    setArticle(response.data.articles[0]);
  };

  useEffect(() => {
    getArticle();
  }, []);

  return <DetailArticle article={article} />;
};

export default Details;
