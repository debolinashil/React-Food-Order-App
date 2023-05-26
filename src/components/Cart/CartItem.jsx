import React, { useContext } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../../context/cart-context";

const CartItem = (props) => {
    const itemID = props.id;
    const context = useContext(CartContext);

    return (
        <li id={itemID} className={classes["cart-item"]}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <div className={classes.price}>${props.price}</div>
                    <div className={classes.amount}>x {props.amount}</div>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;