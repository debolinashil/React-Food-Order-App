import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const context = useContext(CartContext);

    const totalPrice = context.totalPrice.toFixed(2);

    const isCartEmpty = context.items.length < 1;

    const [orderState, setOrderState] = useState(false);
    const [cartState, setCartState] = useState(true);

    const removeItemHandler = (id) => {
        context.removeItem(id);
    };

    const addItemHandler = (item) => {
        context.addItem(item);
    };

    const orderHandler = () => {
        setCartState(false);
        setOrderState(true);
        
    }

    const cartItems = <ul className={classes["cart-items"]}>
        {
            context.items.map((item)=>
                <CartItem 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    amount={item.amount}
                    onRemove={removeItemHandler.bind(null, item.id)}
                    onAdd={addItemHandler.bind(null, item)}
                />
            )
        }
    </ul>;
    return (
        <React.Fragment>
            {orderState && 
                <Modal onClose={props.onClose}>
                    <h2>Ordering... Now sit back and relax!</h2>
                    <div className={classes.actions}>
                        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
                    </div>
                </Modal>
            }
            {cartState && 
                <Modal onClose={props.onClose}>
                    {cartItems}
                    <div className={classes.total}>
                        <span>Total Cost</span>
                        <span>${totalPrice}</span>
                    </div>
                    <div className={classes.actions}>
                        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
                        {!isCartEmpty && <button className={classes.button} onClick={orderHandler}>Order</button>}
                    </div>
                </Modal>
            }
        </React.Fragment>
    );
};

export default Cart;