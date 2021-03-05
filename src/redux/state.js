const ADD_POST = 'ADD-POST';
const UPDATE_TEXT = 'UPDATE-TEXT';
const ADD_DIALOG_MESSAGE = 'ADD-DIALOG-MESSAGE';
const UPDATE_DIALOG_MESSAGE_TEXT = 'UPDATE-DIALOG-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            new_message: '',
            posts: [
                { id: 1, likesCount: 1, message: "Первый нах!" },
                { id: 2, likesCount: 21, message: "Второй нах!" },
                { id: 3, likesCount: 133, message: "Очень длинный текст" },
                { id: 4, likesCount: 34, message: "авароларфарфаофр" },
            ],
        },
        dialogsPage: {
            new_message: 'qqq',
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
        },
        sidebar: {
            navLinks: [
                { id: 1, name: 'Profile', to: 'profile'},
                { id: 2, name: 'Dialogs', to: 'dialogs'},
                { id: 3, name: 'News', to: 'news'},
                { id: 4, name: 'Music', to: 'music'},
                { id: 5, name: 'Settings', to: 'settings'}
            ],
            friends: [
                { id: 1, name: 'Friend 1'},
                { id: 2, name: 'Friend 2'},
                { id: 3, name: 'Friend 3'},
                { id: 4, name: 'Friend 4'},
            ]
        }
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    _addPost() {
        let newPost = {
            id: 5,
            likesCount: 0,
            message: this._state.profilePage.new_message
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.new_message = '';
        this._callSubscriber();
    },
    _updateText(message) {
        this._state.profilePage.new_message = message;
        this._callSubscriber();
    },
    _addDialogMessage() {
        let newDialogsMessage = {
            id: '',
            message: this._state.dialogsPage.new_message
        }
        this._state.dialogsPage.messages.push(newDialogsMessage);
        this._state.dialogsPage.new_message = '';
        this._callSubscriber();
    },
    _updateDialogTextMessage(message) {
        this._state.dialogsPage.new_message = message;
        this._callSubscriber();
    },
    dispatch(action) {
        // if (action.type === ADD_POST) {
        //     this._addPost();
        // } else if (action.type === UPDATE_TEXT) {
        //     this._updateText(action.message);
        // }
        switch (action.type) {
            case ADD_POST:
                this._addPost();
                break;
            case UPDATE_TEXT:
                this._updateText(action.message);
                break;
            case ADD_DIALOG_MESSAGE:
                this._addDialogMessage();
                break;
            case UPDATE_DIALOG_MESSAGE_TEXT:
                this._updateDialogTextMessage(action.message)
                break;
            default:
                console.log('Sorry, we are out of');
         }
    },
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



export default store;