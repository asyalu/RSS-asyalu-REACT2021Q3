/* eslint-disable object-curly-newline */
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import About from './About';
import Details from './Details';
import NotFoundPage from './NotFoundPage';
import Main from './Main';
import { RouterSwitch } from '../client/routerSwitch'

export const routes = [
  { path: '/', name: 'Home', Component: Main },
  { path: '/about', name: 'About', Component: About },
  { path: '/details/:id', name: 'Details', Component: Details },
  { path: '', name: 'PageNotFound', Component: NotFoundPage },
];

const Routing = (): JSX.Element => {
  const location = useLocation();

  return (
    <main className="main">
      <TransitionGroup className="page">
        <RouterSwitch>
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
        </RouterSwitch>
      </TransitionGroup>
    </main>
  );
};

export default Routing;
