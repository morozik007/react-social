const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // копию нового юзера
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true} // новый обьект конкретного юзера которого надо поменять
                    }
                    return u
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                // копию нового юзера
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false} // новый обьект конкретного юзера которого надо поменять
                    }
                    return u
                }),
            };
        case SET_USERS: // берем юзеров с сервера
            return {
                ...state,
                users: [...state.users, ...action.users] // склеиваем два массива что уже есть и тот что прийдет в экшене
            };
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users }) ; // экшн для юзеров с сервера


export default usersReducer;


