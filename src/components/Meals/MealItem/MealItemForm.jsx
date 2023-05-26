import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
    const inputRef = useRef();
    const [isValidAmount, setIsValidAmount] = useState(true);
    const handleSubmit = (event) => {
        event.preventDefault();
        const enteredAmount = Number(inputRef.current.value);
        if(enteredAmount < 1 || enteredAmount > 5) {
            setIsValidAmount(false);
            return;
        }
        props.onAddItem(enteredAmount);
    };

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Input 
                ref={inputRef}
                label="Amount"
                input={
                    {
                        id:props.id,
                        type:"number",
                        min:"1",
                        max:"5",
                        step:"1",
                        defaultValue:"1"
                    }
                }
            />
            <button>+ Add</button>
            {!isValidAmount && <p>Please enter a valid amount between (1-5).</p>}
        </form>
    );
};

export default MealItemForm;