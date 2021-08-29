export const ADD_ARTICLES = 'ADD_ARTICLES';
export const GO_PAGE = 'GO_PAGE';
export const IS_LOADING = 'IS_LOADING';

export const addArticles = (articles): any => ({
  type: ADD_ARTICLES,
  articles,
});

export const goPage = (page): any => ({
  type: GO_PAGE,
  page,
});

export const isLoading = (loading): any => ({
  type: IS_LOADING,
  loading,
});
