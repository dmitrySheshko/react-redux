'use strict';

import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser } from '../../store/actions/users-actions';

class AddUser extends React.Component {

    constructor(props){
        super(props);
        this.addNewUser = this.addNewUser.bind(this);
        this.setValue = this.setValue.bind(this);

        this.initState();
    }

    initState(){
        this.state = {
            avatar:'',
            firstName:'',
            lastName:'',
            address:''
        }
    }

    setValue(e){
        this.setState({[e.target.name]: e.target.value});
    }

    addNewUser(){
        this.props.addUser(this.state);
        this.props.history.push('/users');
    }

    render(){
        return(
            <div className='add-user'>
                <table className='table table-striped'>
                    <tbody>
                    <tr>
                        <td>Avatar</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>First name</td>
                        <td>
                            <div className='form-group'>
                                <input type='text' className='form-control' name='firstName' onChange={ this.setValue } />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Last name</td>
                        <td>
                            <div className='form-group'>
                                <input type='text' className='form-control' name='lastName' onChange={ this.setValue } />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Address</td>
                        <td>
                            <div className='form-group'>
                                <input type='text' className='form-control' name='address' onChange={ this.setValue } />
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div>
                    <a href='javascript:void(0);' className='btn btn-success' onClick={ this.addNewUser }>Save</a>
                    <Link to='/users' className='btn btn-default'>Back</Link>
                </div>
            </div>
        );
    }
}

export default connect(null, { addUser })(AddUser);