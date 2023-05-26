import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../context/cart-context";

const MealItem = (props) => {
    const context = useContext(CartContext);
    // const price = "$" + props.price;
    const price = `$${props.price}`; //above statement can be written like this

    const onAddItemHandler= (amount) => {
        const item = {
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount
        }
        context.addItem(item);
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddItem={onAddItemHandler} />
            </div>
        </li>
    );
};

export default MealItem;