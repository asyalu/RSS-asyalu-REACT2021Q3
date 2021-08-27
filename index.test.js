import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { unmountComponentAtNode } from 'react-dom';
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';
import {
  fireEvent,
  screen,
  render,
  getByPlaceholderText,
  findByRole,
  findByPlaceholderText,
  getByText,
  getByDisplayValue,
  getByTitle,
  findAllByRole,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { rootReducer } from './src/redux/reducer/rootRreducer';
import About from './src/components/About';
import NotFoundPage from './src/components/NotFoundPage';
import Main from './src/components/Main';
import Header from './src/components/Header';
import Card from './src/components/Card';
import Articles from './src/components/Articles';

const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
});

describe('Header', () => {
  it('render Header page', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByText('Home'));
    expect(screen.getByText('About'));
  });
});

const article = {
  author: 'authorName',
  title: 'title',
  publishedAt: '2021.01.01',
  content: 'any text',
  urlToImage: '#',
};

describe('Card', () => {
  it('render Card page', () => {
    render(
      <BrowserRouter>
        <Card article={article} />
      </BrowserRouter>
    );
    expect(screen.getByText('Author: authorName'));
    expect(screen.getByText('title'));
    expect(screen.getByText('any text'));
    expect(screen.getByText('2021.01.01'));
  });
});

describe('NotFoundPage', () => {
  it('render NotFoundPage page', () => {
    render(<NotFoundPage />);
    expect(screen.getByText("Sorry, this page isn't available."));
  });
});

describe('About', () => {
  it('render About page', () => {
    render(<About />);
    expect(
      screen.getByText(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      )
    );
  });
});

const articles = [
  {
    author: 'authorName',
    title: 'title',
    publishedAt: '2021.01.01',
    content: 'any text',
    urlToImage: '#',
  },
  {
    author: 'authorName1',
    title: 'title1',
    publishedAt: '2021.01.02',
    content: 'any text1',
    urlToImage: '#',
  },
];

jest.mock('axios');

describe('Articles', () => {
  it('test pagination', () => {
    const { getByRole, getByText } = renderWithRedux(<Articles />);
    expect(screen.getByText('1 / 17'));
    userEvent.click(getByRole('button', { name: 'next' }));
    expect(screen.getByText('2 / 17'));
    userEvent.click(getByRole('button', { name: 'prev' }));
    expect(screen.getByText('1 / 17'));
  });

  it('test render data', async () => {
    const { getByRole, findAllByRole } = renderWithRedux(<Articles />);
    axios.get.mockImplementationOnce(() => Promise.resolve({ articles }));
    const items = await screen.getAllByText(/authorName/i);
  });
});

describe('Main', () => {
  it('fetch data from API', async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: { articles } }));
    const { getByRole, findAllByRole } = renderWithRedux(<Main />);
    userEvent.click(getByRole('button', { name: 'Search' }));
    const items = await screen.getAllByText(/authorName/i);
    expect(findAllByRole('heading'));
    expect(items).toHaveLength(2)
  });

  it('render button', () => {
    const { getByRole } = renderWithRedux(<Main />);
    expect(screen.findByRole('button'));
    expect(screen.getByRole('textbox'));
  });

  it('render input Search', () => {
    const { getByRole } = renderWithRedux(<Main />);
    expect(screen.findByPlaceholderText('Search'));
  });
});