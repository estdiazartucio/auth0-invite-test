import React from 'react';
import RoundButton from '.././common/components/RoundButton/RoundButton.js';
import './UserPage.css';

const UserToolbar = props => {
    return(
        <div className='user-toolbar-container'>
            <input type='email' className='input-invite-user' name='email' placeholder='example@mail.com' value={props.inputValue} onChange={props.onInputChange} />
            <RoundButton onClick={props.onClick}>Invite New User</RoundButton>
        </div>
    );
};

export default UserToolbar;