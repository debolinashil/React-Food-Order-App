import React, { useContext } from "react";
import classes from "./CartButton.module.css";
import { FaShoppingCart } from "react-icons/fa";
import CartContext from "../../context/cart-context";

const CartButton = (props) => {
    const context = useContext(CartContext);
    const items = context.items;
    const totalItems = items.reduce((currentVal, item)=>{
        return currentVal + item.amount;
    }, 0);
    return (
        <div className={classes.cart}>
            <button className={classes.button} onClick={props.onShowCart}>
                <FaShoppingCart style={{fontSize:"1.2rem"}}/>
                <span>Your Cart</span>
                <div className={classes.count}>{totalItems}</div>
            </button>
        </div>
    );
};


export default CartButton;
