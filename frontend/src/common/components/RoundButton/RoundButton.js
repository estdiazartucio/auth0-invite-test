import React from 'react';
import { Link } from 'react-router-dom';
import './RoundButton.css';

const RoundButton = props => {
    const handleClick = e => {
        if(!props.onClick) {
            return;
        }
        props.onClick(e);
    };

    let button = <button className='demo-round-button' onClick={handleClick}>{props.children}</button>;
    if (props.url) {
        return (
            <Link to={props.url}>{button}</Link>
        )
    }
    return button;
};

export default RoundButton;