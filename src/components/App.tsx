/* eslint-disable object-curly-newline */
import React from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '../styles/App.scss';
import About from './About';
import Header from './Header';
import NotFoundPage from './NotFoundPage';
import Page from './Page';
import Routing from './Routing';

const App = (): JSX.Element => (
  <BrowserRouter>
    <Header />
    <Routing />
  </BrowserRouter>
);

export default App;
