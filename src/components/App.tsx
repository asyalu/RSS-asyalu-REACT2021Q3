import React, { useState } from 'react';
import '../styles/App.scss';
import shortid from 'shortid';
import Card from './Card';
import Form from './1';
import Page from './Page';

const App = (): JSX.Element => (
  <main className="main">
    <Page />
  </main>
);

export default App;
