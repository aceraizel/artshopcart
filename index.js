import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import ArtShopcart from './reducers/ArtShopcart';
import Stream from './components/containers/Stream';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

//top level of React component hierarchy
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Stream store={store} />
      </div>
    )
  }
}

let store = createStore(
  ArtShopcart,
  applyMiddleware(thunk, logger)
  );

ReactDOM.render(
  <Provider store = { store }>
    <App/>
  </Provider>,
  document.getElementById('app')
)