import React from 'react';
import { cards } from '../hardCodeData';
import '../styles/App.scss';
import Card from './Card';
import SearchBar from './SearchBar';

const App = (): JSX.Element => (
  <main className="main">
    <SearchBar />
    <div className="main__cards-wrapper">
      {cards.map((el) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Card {...el} />
      ))}
    </div>
  </main>
);

export default App;
