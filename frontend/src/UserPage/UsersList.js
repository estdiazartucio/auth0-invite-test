import React from 'react';
import './UserPage.css';

const UsersList = props => {
    const renderRows = () => {
        return props.users.map(user => 
            <div className='user-list-row'>
                {user.email}
            </div>
        )
    }

    return(
        <div className='user-list-container'>
            <div className='user-list-row'>
                Email
            </div>
            {props.users && props.users.length > 0 ? renderRows() : <div className='user-list-row'>No users found</div>}
        </div>
    );
};

export default UsersList;