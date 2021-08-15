import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { DAppProvider } from '@usedapp/core';

import { store } from './redux';
import App from './App';

// const appId = 'kmXQE57sHuXmyOYuVQx4tGV4464A3VxkdqxvZYxR';
// const serverUrl = 'https://pk6ham2gketm.usemoralis.com:2053/server';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DAppProvider config={{}}>
        <App />
      </DAppProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


if (module.hot) {
  module.hot.accept();
}
