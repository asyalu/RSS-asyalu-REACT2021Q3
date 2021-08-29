/* eslint-disable react/jsx-one-expression-per-line */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/reducer/rootRreducer';
import { addArticles, isLoading, goPage } from '../redux/actions';
import API_KEY from '../API_KEY';
import Articles from './Articles';

const Main = (): JSX.Element => {
  const loading = useSelector((state: RootState) => state.loading.loading);
  const pageNum = useSelector((state: RootState) => state.page.page);

  const [searchValue, setSearchValue] = useState('');
  const [sort, setSort] = useState('publishedAt');
  const [lang, setLang] = useState('en');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (event?): Promise<void> => {
    if (event) event.preventDefault();
    dispatch(isLoading(true));
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchValue}&sortBy=${sort}&page=${pageNum}&language=${lang}&pageSize=6&apiKey=${API_KEY}`,
      );
      dispatch(addArticles(response.data.articles));
    } catch (e) {
      setError(e);
    } finally {
      dispatch(isLoading(false));
    }
  };

  useEffect(() => {
    if (pageNum !== 1) handleSubmit();
  }, [pageNum]);

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
            disabled={loading}
            onClick={() => dispatch(goPage(1))}
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
      {error && <div>something went wrong ...</div>}
      <Articles />
    </div>
  );
};

export default Main;
