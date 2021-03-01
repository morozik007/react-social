import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>
        {props.name}
      </NavLink>
    </div>
  );
}

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div>
      <h1>Dialogs</h1>
      <div className={s.wrapper}>
        <div className={s.dialogs}>
          <DialogItem id="1" name="Andrey" />
          <DialogItem id="2" name="Andrey 2" />
          <DialogItem id="3" name="Andrey 3" />
          <DialogItem id="4" name="Andrey 4" />
        </div>
        <div className={s.messages}>
          <Message message="Yooooo!" />
          <Message message="Hiii!" />
          <Message message="Loool!" />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
