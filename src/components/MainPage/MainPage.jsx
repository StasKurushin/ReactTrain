import './MainPage.scss';
import React, { PureComponent } from 'react';

import Header from "./Header";
import Content from "./Content";

export default class MainPage extends PureComponent {
    render() {
        return (
            <div className='main-page'>
                <Header/>
                {/*<Content/>*/}
            </div>
        )
    }
}
