import { combineReducers } from 'redux';
import { goPage } from './goPage';
import { addArticles } from './addArticles';
import { isLoading } from './isLoading';

export const rootReducer = combineReducers({
  articles: addArticles,
  page: goPage,
  loading: isLoading,
});

export type RootState = ReturnType<typeof rootReducer>;
