import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = ({dialogs, messages}) => {
  let dialogElements = dialogs.map((dialog) => (
    <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
  ));

  let messagesElements = messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));

  return (
    <div>
      <h1>Dialogs</h1>
      <div className={s.wrapper}>
        <div className={s.dialogs}>
          {dialogElements}
        </div>
        <div className={s.messages}>
          {messagesElements}
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
