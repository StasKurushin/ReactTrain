import './Navbar.scss';
import React, { PureComponent } from 'react';

export default class Navbar extends PureComponent {
    render() {
        return (
            <div className="navbar">
                <div className="blog-name">
                    StasKu Blog
                </div>
                <ul className="navbar-list">
                    <li className="navbar-list__item">HOME</li>
                    <li className="navbar-list__item">BLOG</li>
                    <li className="navbar-list__item">COMMENTS</li>
                    <li className="navbar-list__item">ABOUT</li>
                </ul>
            </div>
        )
    }
}
