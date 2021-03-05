import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addDialogMessageActionCreator,
    updateNewDialogMessageActionCreator,
} from "../../redux/state";

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map((dialog) => (
        <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
    ));

    let messagesElements = props.state.messages.map((message) => (
        <Message key={message.id} message={message.message} />
    ));

    let newDialogMessageText = React.createRef();

    let addDialogMessage = () => {
        props.dispatch(addDialogMessageActionCreator());
    };

    let changeNewDialogMessage = () => {
        props.dispatch(updateNewDialogMessageActionCreator(newDialogMessageText.current.value));
    };

    //console.log(props);

    return (
        <div>
            <h1>Dialogs</h1>
            <div className={s.wrapper}>
                <div className={s.dialogs}>{dialogElements}</div>
                <div className={s.messages}>
                    {messagesElements}

                    <textarea onChange={changeNewDialogMessage} ref={newDialogMessageText} value={props.state.new_message} name="" id="" cols="30" rows="10" />
                    <button onClick={addDialogMessage}>Add Message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
