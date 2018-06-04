import './Navbar.scss';
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends PureComponent {
    render() {
        return (
            <div className="navbar">
                <div className="blog-name">
                    StasKu Blog
                </div>
                <ul className="navbar-list">
                    <li className="navbar-list__item">
                        <Link to="/" className="navbar__link">HOME</Link>
                    </li>
                        <li className="navbar-list__item">
                            <Link to="/blog-page" className="navbar__link">BLOG</Link>
                        </li>
                    <li className="navbar-list__item">COMMENTS</li>
                    <li className="navbar-list__item">ABOUT</li>


                </ul>
            </div>
        )
    }
}
