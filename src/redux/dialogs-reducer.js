const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE';
const UPDATE_DIALOG_MESSAGE_TEXT = 'UPDATE-DIALOG-MESSAGE-TEXT';

let initialState = {
    new_message: '',
    dialogs: [
        { id: 1, name: 'Andrey 1'},
        { id: 2, name: 'Andrey 2'},
        { id: 3, name: 'Andrey 3'},
        { id: 4, name: 'Andrey 4'},
        { id: 5, name: 'Andrey 5'},
        { id: 6, name: 'Andrey 6'},
    ],
    messages: [
        { id: 1, message: "Yooooo Hooooo!" },
        { id: 2, message: "Hiii!" },
        { id: 3, message: "Loool!" },
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DIALOG_MESSAGE: {
            let newDialogsMessage = {
                id: '',
                message: state.new_message
            }

            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newDialogsMessage);
            stateCopy.new_message = '';
            return stateCopy;
        }
        case UPDATE_DIALOG_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.new_message = action.message;
            return stateCopy;
        }
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