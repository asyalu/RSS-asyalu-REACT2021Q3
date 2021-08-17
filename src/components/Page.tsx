/* eslint-disable react/jsx-one-expression-per-line */
import axios from 'axios';
import React, { useState } from 'react';
import shortid from 'shortid';
import Card from './Card';

const API_KEY = 'ce28e11caac3465882309f34a0bf3122';

const Page = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [sort, setSort] = useState('publishedAt');
  const [lang, setLang] = useState('en');
  const [page, setPage] = useState(1);

  const handleSubmit = async (event): Promise<void> => {
    event.preventDefault();
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
        {articles.map((el) => (
          <Card article={el} key={shortid()} />
        ))}
        <div className={articles.length ? 'main__pagination' : 'hidden'}>
          <div className="main__button-wrapper">
            <button
              className="main__button_pagination"
              type="button"
              disabled={page === 1 || isLoading}
              onClick={(event) => {
                setPage(page - 1);
                handleSubmit(event);
              }}
            >
              prev
            </button>
            <button
              className="main__button_pagination"
              type="button"
              disabled={page === 17 || isLoading}
              onClick={(event) => {
                setPage(page + 1);
                handleSubmit(event);
              }}
            >
              next
            </button>
          </div>
          <div>{page} / 17</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
