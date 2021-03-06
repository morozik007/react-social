import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addDialogMessageActionCreator,
    updateNewDialogMessageActionCreator,
} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogElements = state.dialogs.map((dialog) => (
        <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
    ));

    let messagesElements = state.messages.map((message) => (
        <Message key={message.id} message={message.message} />
    ));

    let addDialogMessage = () => {
        props.store.dispatch(addDialogMessageActionCreator());
    };

    let changeNewDialogMessage = (e) => {
        props.store.dispatch(updateNewDialogMessageActionCreator(e.target.value));
    };

    //console.log(props);

    return (
        <div>
            <h1>Dialogs</h1>
            <div className={s.wrapper}>
                <div className={s.dialogs}>{dialogElements}</div>
                <div className={s.messages}>
                    {messagesElements}

                    <textarea onChange={changeNewDialogMessage} value={state.new_message} name="" id="" cols="30" rows="10" />
                    <button onClick={addDialogMessage}>Add Message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
