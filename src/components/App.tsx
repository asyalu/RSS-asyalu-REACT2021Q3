import React from 'react';
import shortid from 'shortid';
import { cards } from '../hardCodeData';
import '../styles/App.scss';
import Card from './Card';
import SearchBar from './SearchBar';

const App = (): JSX.Element => (
  <main className="main">
    <SearchBar />
    <div className="main__cards-wrapper">
      {cards.map((card) => (
        <Card
          name={card.name}
          artist={card.artist}
          when={card.when}
          likes={card.likes}
          watched={card.watched}
          img={card.img}
          key={shortid}
        />
      ))}
    </div>
  </main>
);

export default App;
