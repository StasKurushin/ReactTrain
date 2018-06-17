import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from 'components/MainPage';

import routes from "./routes";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends Component {
  render () {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    { routes.map((route, idx) => <Route key={idx} {...route} />) }
                </Switch>
            </BrowserRouter>
        </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

