import * as types from '../actions/action-types';

const initState = {
    users: []
};

export default (state = initState, action) => {
    switch (action.type){
        case types.GET_USERS:
            return { ...state, users: action.users };
        case types.ADD_USER:
            let users = state.users;
            users.push(action.user);
            return { ...state, users: users };
        default:
            return state;
    }
}