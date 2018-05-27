import './Navbar.scss';
import React, { PureComponent } from 'react';
import NavbarList from '../NavbarList';
import ModalLogin from '../Modal'

const navbarItems = [
    {
        link: '#',
        title: 'Home'
    },
    {
        link: '#',
        title: 'Sports'
    },
    {
        link: '#',
        title: 'Politics'
    },
    {
        link: '#',
        title: 'Medicine'
    }
];

export default class Navbar extends PureComponent {
    render() {
        return (
            <div className='navbar'>
                <NavbarList  items={navbarItems} />
                <ModalLogin />
            </div>
        )
    }
}