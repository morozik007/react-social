import {rerenderEntireTree} from './../render';

let state = {
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
}

export let addNewPost = () => {
  let newPost = {
    id: 5, likesCount: 0, message: state.profilePage.new_message
  }

  state.profilePage.posts.push(newPost);
  state.profilePage.new_message = '';
  rerenderEntireTree(state);
}

export let handleChangePost = (message) => {
  state.profilePage.new_message = message;
  rerenderEntireTree(state);
}

export default state;