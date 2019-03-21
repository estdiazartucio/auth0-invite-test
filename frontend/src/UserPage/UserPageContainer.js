import React from 'react';
import Header from '../common/components/DemoHeader/Header.js';
import UserToolbar from './UserToolbar.js';
import UserList from './UsersList.js';
import api from '../common/services/api.js';
import './UserPage.css';

class UserPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList : [],
        };
    }

    async componentDidMount() {
        let users = await api.getAllUsers();
        this.setState({
            userList: users.data,
        });
    }

    render() {
        return(
            <React.Fragment>
                <Header />
                <div className='user-page-container'>
                    <UserToolbar />
                    <UserList users={this.state.userList} />
                </div>
            </React.Fragment>
        );
    }
};

export default UserPageContainer;