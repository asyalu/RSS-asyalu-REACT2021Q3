/* eslint-disable object-curly-newline */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../styles/App.scss';
import Header from './Header';
import Routing from './Routing';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Header />
    <Routing />
  </BrowserRouter>
);

export default App;
