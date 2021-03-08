import React from "react";
import {
    addDialogMessageActionCreator,
    updateNewDialogMessageActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addDialogMessage = () => {
        props.store.dispatch(addDialogMessageActionCreator());
    };

    let changeNewDialogMessage = (text) => {
        props.store.dispatch(updateNewDialogMessageActionCreator(text));
    };

    //console.log(props);

    return (
        <Dialogs
            AddDialogMessage={addDialogMessage}
            ChangeNewDialogMessage={changeNewDialogMessage}
            dialogs={state.dialogsPage.dialogs}
            messages={state.dialogsPage.messages}
            new_message = {state.dialogsPage.new_message}
        />
    );
};

export default DialogsContainer;
