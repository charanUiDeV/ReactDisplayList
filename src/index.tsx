import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App title="displayed users" />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
