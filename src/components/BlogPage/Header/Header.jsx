import React, { PureComponent } from 'react';
import Navbar from '../../Navbar'
import './Header.scss'

export default class Header extends PureComponent {
  render() {
    return (
        <div className="header header-blog-page">
            <div className="header-container">
                <Navbar />
                <div className="header-title">
                    <h1 className="header__title">
                        Subjective thoughts
                    </h1>
                </div>
            </div>
        </div>
    );
  }
}
