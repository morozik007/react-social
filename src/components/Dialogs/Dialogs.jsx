import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogElements = props.dialogs.map((dialog) => (
        <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
    ));

    let messagesElements = props.messages.map((message) => (
        <Message key={message.id} message={message.message} />
    ));

    let onAddDialogMessage = () => {
        props.AddDialogMessage();
    };

    let onChangeNewDialogMessage = (e) => {
        props.ChangeNewDialogMessage(e.target.value);
    };

    return (
        <div>
            <h1>Dialogs</h1>
            <div className={s.wrapper}>
                <div className={s.dialogs}>{dialogElements}</div>
                <div className={s.messages}>
                    {messagesElements}

                    <textarea onChange={onChangeNewDialogMessage} value={props.new_message} name="" id="" cols="30" rows="10" />
                    <button onClick={onAddDialogMessage}>Add Message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
