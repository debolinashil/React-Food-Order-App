import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
    const inputProps = props.input;
    return (
        <section className={classes.input}>
            <label htmlFor={inputProps.id}>{props.label}</label>
            <input ref={ref} {...inputProps} />
        </section>
    );
});

export default Input;