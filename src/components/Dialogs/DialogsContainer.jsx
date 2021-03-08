import React from "react";
import {
    addDialogMessageActionCreator,
    updateNewDialogMessageActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        AddDialogMessage: () => {
            dispatch(addDialogMessageActionCreator());
        },
        ChangeNewDialogMessage: (text) => {
            dispatch(updateNewDialogMessageActionCreator(text));
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
