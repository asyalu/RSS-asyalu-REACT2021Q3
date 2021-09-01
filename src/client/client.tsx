import * as React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, Store } from 'redux';
import App from '../components/App';
import { restoreDataOnClient } from './restoreDataOnClient';

// import { restoreDataOnClient } from './data/restoreDataOnClient';
import { rootReducer } from '../redux/reducer/rootRreducer';

function run(store: Store): void {
  hydrate(
    <Provider store={store}>
      <BrowserRouter>{App()}</BrowserRouter>
    </Provider>,
    document.getElementById('root'),
  );
}

const store = createStore(rootReducer, restoreDataOnClient());

run(store);
