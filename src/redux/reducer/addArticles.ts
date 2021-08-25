import { ADD_ARTICLES } from '../actions';

const initialState = {
  arrArticles: [],
};

export const addArticles = (state = initialState, action): any => {
  switch (action.type) {
    case ADD_ARTICLES:
      return { state, arrArticles: action.articles };
    default:
      return state;
  }
};
