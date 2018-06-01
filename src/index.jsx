import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from 'components/MainPage';
import UserList from 'containers/BlogListContainer'

class App extends Component {
  render () {
    return (
        <div>
          <MainPage/>
          <UserList/>
        </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
