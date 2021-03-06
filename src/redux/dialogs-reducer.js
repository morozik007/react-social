const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE';
const UPDATE_DIALOG_MESSAGE_TEXT = 'UPDATE-DIALOG-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_DIALOG_MESSAGE:
            let newDialogsMessage = {
                id: '',
                message: state.new_message
            }
            state.messages.push(newDialogsMessage);
            state.new_message = '';
            return state;
        case UPDATE_DIALOG_MESSAGE_TEXT:
            state.new_message = action.message;
            return state;
        default:
            return state;
    }
}

export const addDialogMessageActionCreator = () => {
    return {
        type: ADD_DIALOG_MESSAGE
    }
}

export const updateNewDialogMessageActionCreator = (message) => {
    return {
        type: UPDATE_DIALOG_MESSAGE_TEXT,
        message: message
    }
}

export default dialogsReducer;