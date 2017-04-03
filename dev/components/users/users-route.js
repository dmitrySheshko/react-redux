import React from 'react';
import { Route } from 'react-router-dom';

import { DynLoad } from '../router/dyn-load';

class UsersComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            UsersList: null,
            AddUser: null
        };
    }

    componentWillMount(){
        let UsersList = DynLoad(require('bundle-loader!./users'));
        let AddUser = DynLoad(require('bundle-loader!./add-user'));
        this.setState({ AddUser: AddUser, UsersList: UsersList });
    }

    render(){
        const { UsersList, AddUser } = this.state;
        return(
            <div>
                <Route path={`${this.props.match.url}/add`} component={ AddUser } />
                <Route exact path={`${this.props.match.url}`} component={ UsersList } />
            </div>
        );
    }
}

export default UsersComponent;