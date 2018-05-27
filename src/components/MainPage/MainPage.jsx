import './MainPage.scss';
import React, { PureComponent } from 'react';
import Navbar from '../Navbar';
import Content from '../Content'



export default class MainPage extends PureComponent {
    render() {
        return (
        <div className='main-page-container'>
            <Navbar />
            <Content />
        </div>
        )
    }
}