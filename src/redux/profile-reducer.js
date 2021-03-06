const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                likesCount: 0,
                message: state.new_message
            }
            state.posts.push(newPost);
            state.new_message = '';
            return state;
        case UPDATE_TEXT:
            state.new_message = action.message;
            return state;
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

export default profileReducer;


