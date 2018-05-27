import React, { PureComponent } from "react";
import './NavbarList.scss';


export default class NavbarList extends PureComponent {
    static defaultProps = {
        items: []
    };
    render() {
        const { items } = this.props;
        return (
            <ul className='navbar-list'>
                {items.map((item, idx) => <li className='navbar-list__item'
                                              key={idx.toString()}>
                    <a className='navbar__link'
                       href={item.link}>
                        {item.title}
                    </a>
                </li>)}
            </ul>
        )
    }
}