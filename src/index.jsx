import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from 'components/MainPage';

import routes from "./routes";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Provider} from "react-redux";
import store from './store';


class App extends Component {
  render () {
    return (
        <Provider store={store}>
            <Fragment>
                <BrowserRouter>
                    <Switch>
                        {routes.map((route, idx) => <Route key={idx} {...route} />)}
                    </Switch>
                </BrowserRouter>
            </Fragment>
        </Provider>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

