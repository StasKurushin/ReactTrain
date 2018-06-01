import "./Header.scss";
import React, { PureComponent } from "react";
import Navbar from "../../Navbar";

export default class Header extends PureComponent {
    render() {
        return (
            <div className="header">
                <div className="header-container">
                    <Navbar />
                    <div className="header-title">
                        <h1 className="header__title">
                            StasKu Blog
                        </h1>
                        <p className="header__intro">
                            A Blog About Subjective Thoughts
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}