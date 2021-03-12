const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    profile : null,
    new_message: '',
    posts: [
        { id: 1, likesCount: 1, message: "Первый нах!" },
        { id: 2, likesCount: 21, message: "Второй нах!" },
        { id: 3, likesCount: 133, message: "Очень длинный текст" },
        { id: 4, likesCount: 34, message: "авароларфарфаофр" },
    ],
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                likesCount: 0,
                message: state.new_message
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                new_message: ''
            };
        case UPDATE_TEXT:
            return {
                ...state,
                new_message: action.message
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (message) => {
    return {
        type: UPDATE_TEXT,
        message: message
    }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export default profileReducer;


