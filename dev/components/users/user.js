'use strict';

import React from 'react';

class User extends React.Component {

    constructor(props){
        super(props);
        this.initState = this.initState.bind(this);
        this.avatarNotFound = this.avatarNotFound.bind(this);

        this.initState(props.user);
    }

    initState(_user){
        this.state = {
            user: _user
        }
    }

    avatarNotFound(){
        this.setState({ user: { ...this.state.user, avatar: '/images/users/default.png' } });
    }

    render(){
        const user = this.state.user;
        return(
            <tr className='user'>
                <td></td>
                <td>
                    <img width='60' src={ user.avatar } alt={ user.firstName + ' ' + user.lastName } onError={ this.avatarNotFound } />
                </td>
                <td>{ user.firstName }</td>
                <td>{ user.lastName }</td>
                <td>{ user.address }</td>
            </tr>
        );
    }
}

export default User;