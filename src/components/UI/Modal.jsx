import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}></div>
};

const OverLay = (props) => {
    return <div className={classes.modal}>{props.children}</div>
};

const Modal = (props) => {
    const portalElement = document.getElementById("overlays");
    return <React.Fragment>
        {ReactDOM.createPortal(<BackDrop onClose={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(<OverLay>{props.children}</OverLay> , portalElement)}
    </React.Fragment>
};

export default Modal;