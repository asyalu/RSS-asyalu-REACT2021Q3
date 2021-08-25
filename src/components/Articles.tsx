/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortid from 'shortid';
import { RootState } from '../redux/reducer/rootRreducer';
import { goPage } from '../redux/actions';
import Card from './Card';

const Articles = (): JSX.Element => {
  const dispatch = useDispatch();

  const pageNum = useSelector((state: RootState) => state.page.page);
  const articles = useSelector(
    (state: RootState) => state.articles.arrArticles,
  );
  const isLoading = useSelector((state: RootState) => state.loading.loading);
  const maxPage = 17;

  return (
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
            disabled={pageNum === 1 || isLoading}
            onClick={() => dispatch(goPage(pageNum - 1))}
          >
            prev
          </button>
          <button
            className="main__button_pagination"
            type="button"
            disabled={pageNum === maxPage || isLoading}
            onClick={() => dispatch(goPage(pageNum + 1))}
          >
            next
          </button>
        </div>
        <div>
          {pageNum} / {maxPage}
        </div>
      </div>
    </div>
  );
};

export default Articles;
