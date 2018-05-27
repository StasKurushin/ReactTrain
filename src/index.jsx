import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage';

class App extends Component {
  render () {
    return (
      <div className='main-page'>
          <div className="main-page__title">
              New York Times
          </div>
        <MainPage />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
