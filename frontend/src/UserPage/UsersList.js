import React from 'react';
import defaultIcon from '.././common/assets/user_circle.svg';
import './UserPage.css';

const UsersList = props => {
    const renderRows = () => {
        return props.users.map(user => 
            <div className='user-list-row' key={user.id}>
                <span className='user-list-column'><img src={defaultIcon} alt='userIcon' /></span>
                <span className='user-list-column'>{user.email}</span>
                <span className='user-list-column'>{user.email}</span>
            </div>
        )
    }

    return(
        <div className='user-list-container'>
            <div className='user-list-row'>
                <span className='user-list-column'></span>
                <span className='user-list-column'>Email</span>
                <span className='user-list-column'>Username</span>
            </div>
            {props.users && props.users.length > 0 ? renderRows() : <div className='user-list-row'>No users found</div>}
        </div>
    );
};

export default UsersList;