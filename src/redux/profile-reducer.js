const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';

let initialState = {
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
        case ADD_POST: {
            let newPost = {
                id: 5,
                likesCount: 0,
                message: state.new_message
            }
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.new_message = '';
            return stateCopy;
        }
        case UPDATE_TEXT: {
            let stateCopy = {...state};
            //stateCopy.posts = [...state.posts];

            stateCopy.new_message = action.message;
            return stateCopy;
        }
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


