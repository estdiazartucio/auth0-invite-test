import React from 'react';
import logo from '../../assets/iconfinder_octocat.svg';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = props => {
    let links = [
        { displayName: 'Music', url: '/music'},
        { displayName: 'Users', url: '/users'},
    ];

    const renderLinks = () => {
        return links.map(link =>
            <li key={link.url}><Link to={link.url}>{link.displayName}</Link></li>
        )
    };

    return(
        <div className='demo-header'>
            <Link to='/'><img className='demo-header-logo' src={logo} alt='header-logo'></img></Link>
            <ul className='demo-header-links'>
                {renderLinks()}
            </ul>
        </div>
    );
};

export default Header;