import React from 'react';
import { connect } from 'react-redux';

import { DynLoad } from '../router/dyn-load';
import { getUsers } from '../../store/actions/users-actions';
import users from './users.json';
import User from './user';

class UsersPage extends React.Component {

    constructor(props){
        super(props);
        this.getUsers = this.getUsers.bind(this);

        this.state = {
            UsersMenu: null,
            AddUser: null
        };

        this.getUsers();
    }

    getUsers(){
        if(this.props.users.length === 0){
            this.props.getUsers(users);
        }
    }

    componentWillMount(){
        let UsersMenu = DynLoad(require('bundle-loader!../../modules/menu/users-menu'));
        this.setState({ UsersMenu: UsersMenu });
    }

    render(){
        let { UsersMenu } = this.state;
        return (
            <div>
                { React.createElement(UsersMenu) }
                <div className='users-list'>
                    <table className='table table-striped'>
                        <tbody>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Address</th>
                        </tr>
                        {
                            this.props.users.map((user, n) => {
                                return <User key={ n } user={ user }/>
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        users: state.usersReducer.users
    }
}

export default connect(mapStateToProps, { getUsers })(UsersPage);