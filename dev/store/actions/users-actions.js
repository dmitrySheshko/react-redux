import * as types from './action-types';

export function getUsers(users){
    return {
        type: types.GET_USERS,
        users
    }
}

export function addUser(user){
    return {
        type: types.ADD_USER,
        user
    }
}