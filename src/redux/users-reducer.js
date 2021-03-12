const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return {  ...state, users: action.users };
        case SET_CURRENT_PAGE:
            return { ...state,  currentPage: action.currentPage };
        case SET_TOTAL_USERS_COUNT:
            return { ...state,  totalUsersCount: action.count };
        case TOGGLE_IS_FETCHING:
            return { ...state,  isFetching: action.isFetching };
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users }) ; // экшн для юзеров с сервера
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage /*currentPage: currentPage*/ }) ;
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount }) ;
export const toggleFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching }) ;


export default usersReducer;


