import { IS_LOADING } from '../actions';

const initialState = {
  loading: false,
};

export const isLoading = (state = initialState, action): any => {
  switch (action.type) {
    case IS_LOADING:
      return { state, loading: action.loading };
    default:
      return state;
  }
};
