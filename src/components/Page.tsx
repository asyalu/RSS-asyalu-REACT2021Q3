/* eslint-disable react/jsx-one-expression-per-line */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import API_KEY from '../API_KEY';
import Card from './Card';

const Page = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [sort, setSort] = useState('publishedAt');
  const [lang, setLang] = useState('en');
  const [page, setPage] = useState(1);
  const maxPage = 17;

  const handleSubmit = async (event?): Promise<void> => {
    if (event) event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchValue}&sortBy=${sort}&page=${page}&language=${lang}&pageSize=6&apiKey=${API_KEY}`,
      );
      setArticles(response.data.articles);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (page !== 1) handleSubmit();
  }, [page]);

  return (
    <div className="main__content">
      <form className="main__form" onSubmit={handleSubmit}>
        <label className="main__label-search" htmlFor="search-bar-input">
          <input
            type="text"
            className="main__search-bar-input"
            id="search-bar-input"
            placeholder="Search"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button
            className="main__button_search"
            type="submit"
            disabled={isLoading}
            onClick={() => setPage(1)}
          >
            Search
          </button>
        </label>
        <label className="main__label-sort" htmlFor="sort">
          sorting by
          <select
            className="main__sort-select"
            name="sort"
            id="sort"
            value={sort}
            onChange={(event) => {
              setSort(event.target.value);
              handleSubmit(event);
            }}
          >
            <option value="publishedAt">published at</option>
            <option>relevancy</option>
            <option>popularity</option>
          </select>
        </label>
        <label className="main__label-sort" htmlFor="lang">
          search language
          <select
            className="main__sort-select"
            name="lang"
            id="lang"
            value={lang}
            onChange={(event) => {
              setLang(event.target.value);
              handleSubmit(event);
            }}
          >
            <option>en</option>
            <option>ru</option>
            <option>de</option>
          </select>
        </label>
      </form>
      <div className="main__articles">
        {articles.map((el) => {
          const key = shortid();
          return <Card article={el} key={key} />;
        })}
        <div className={articles.length ? 'main__pagination' : 'hidden'}>
          <div className="main__button-wrapper">
            <button
              className="main__button_pagination"
              type="button"
              disabled={page === 1 || isLoading}
              onClick={() => setPage(page - 1)}
            >
              prev
            </button>
            <button
              className="main__button_pagination"
              type="button"
              disabled={page === maxPage || isLoading}
              onClick={() => setPage(page + 1)}
            >
              next
            </button>
          </div>
          <div>
            {page} / {maxPage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
