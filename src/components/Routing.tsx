/* eslint-disable object-curly-newline */
import React, { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import About from './About';
import Details from './Details';
import NotFoundPage from './NotFoundPage';
import Page from './Page';

const routes = [
  { path: '/', name: 'Home', Component: Page },
  { path: '/about', name: 'About', Component: About },
  { path: '', name: 'PageNotFound', Component: NotFoundPage },
];

const Routing = (): JSX.Element => {
  const location = useLocation();

  return (
    <main className="main">
      <TransitionGroup className="page">
        <Switch location={location}>
          {routes.map(({ path, Component }) => (
            <Route path={path} component={Component} key={path} exact>
              {({ match }) => (
                <CSSTransition
                  timeout={1000}
                  classNames="page"
                  unmounOnExit
                  in={match !== null}
                >
                  <Component />
                </CSSTransition>
              )}
            </Route>
          ))}
          <Route path="/details/:id">
            <Details />
          </Route>
        </Switch>
      </TransitionGroup>
    </main>
  );
};

export default Routing;
