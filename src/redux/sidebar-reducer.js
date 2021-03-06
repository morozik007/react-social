let initialState = {
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

const sidebarReducer = (state = initialState , action) => {
    return state;
}

export default sidebarReducer;