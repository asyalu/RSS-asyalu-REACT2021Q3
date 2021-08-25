import { GO_PAGE } from '../actions';

const initialState = {
  page: 1,
};

export const goPage = (state = initialState, action): any => {
  switch (action.type) {
    case GO_PAGE:
      return { state, page: action.page };
    default:
      return state;
  }
};
