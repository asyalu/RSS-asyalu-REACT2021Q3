import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import cors from 'cors';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from '../redux/reducer/rootRreducer';
import App from '../components/App';

import { fetchDataByUrl } from './fetchDataByUrl';
import { renderTemplate } from './renderTemplate';

const app = express();

app.use(express.static('dist'));

app.use(cors());

app.get('/details/:details', async (req, res) => {
  try {
    console.log('try');

    res.json((await fetchDataByUrl(req.query.url)));
  } catch (err) {
    res.status(500).json({
      message: err.message,
      stack: err.stack
    });
  }
});

app.get('*', async (req, res) => {
  const context = {};
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
  );
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        {App()}
      </StaticRouter>
    </Provider>,
  );

  res.send(
    renderTemplate({
      cssPath: 'main.css',
      jsPath: 'bundle.js',
      content,
    }),
  );
});

app.listen(3000, () => {
  console.log('Server is listening on port: 3000');
});
