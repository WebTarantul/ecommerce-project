import React from 'react';
import ReactDOM from 'react-dom';
import './ReactotronConfig';
import App from './components/App/App';
import './index.module.scss';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function renderApp() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

renderApp();

if (module.hot) {
  module.hot.accept(['./components/App'], () => {
    // new components
    renderApp();
  });
}
