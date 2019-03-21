import React from 'react';
import RoundButton from '.././common/components/RoundButton/RoundButton.js';
import './UserPage.css';

const UserToolbar = props => {
    return(
        <div className='user-toolbar-container'>
            <RoundButton>Create New User</RoundButton>
        </div>
    );
};

export default UserToolbar;