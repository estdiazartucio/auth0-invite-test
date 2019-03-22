import React from 'react';
import Header from '../common/components/DemoHeader/Header.js';
import UserToolbar from './UserToolbar.js';
import UserList from './UsersList.js';
import api from '../common/services/api.js';
import passwordGen from 'generate-password';
import './UserPage.css';

class UserPageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList : [],
            userEmail: '',
        };
        this.inviteUser = this.inviteUser.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.generateRandomPassword = this.generateRandomPassword.bind(this);
    }

    async componentDidMount() {
        let users = await api.getAllUsers();
        this.setState({
            userList: users.data,
        });
    }

    onEmailChange(e) {
        this.setState({userEmail: e.target.value});
    }

    inviteUser() {
        if(this.state.userEmail.length > 0){
            let randomPass = this.generateRandomPassword();

            api.inviteUser({
                'connection': 'Username-Password-Authentication',
                'email': this.state.userEmail,
                'password': randomPass,
                'user_metadata': { 'temp': randomPass },
            })
        }
    }

    generateRandomPassword() {
        let pass = passwordGen.generate({length: 15, numbers: true, uppercase: true, symbols: true, exclude: '"/<>,{[]}`'});
        //return FormValidatorService.validatePassword(pass) ? pass : this.generateRandomPassword();
        return pass;
    }

    render() {
        return(
            <React.Fragment>
                <Header />
                <div className='user-page-container'>
                    <UserToolbar onClick={this.inviteUser} inputValue={this.state.userEmail} onInputChange={this.onEmailChange} />
                    <UserList users={this.state.userList} />
                </div>
            </React.Fragment>
        );
    }
};

export default UserPageContainer;