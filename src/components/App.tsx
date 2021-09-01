/* eslint-disable object-curly-newline */
import { RouterSwitch } from '../client/routerSwitch';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../styles/App.scss';
import Header from './Header';
import Routing from './Routing';

const App = (): JSX.Element => (
  <>
    <Header />
    <Routing />
  </>
);

export default App;
