import React, { useReducer } from "react";

const CartContext = React.createContext(
    {
        items: [],
        totalPrice: 0,
        addItem: (item) => {},
        removeItem: (id) => {},
        emptyCart: () => {}
    }
);

const initialCartState = {
    items: [],
    totalPrice: 0
}

const cartReducer = (state, action) => {
    if(action.type === "ADD_ITEM") {
        let updatedItems = [];
        const updatedTotalPrice = state.totalPrice + (action.item.price * action.item.amount);
        const prevItems = state.items;
        const existingItemIndex = prevItems.findIndex((item) => {
            return item.id === action.item.id;
        });
        const existingItem = prevItems[existingItemIndex];
        if(existingItem) {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            }
            updatedItems = [...prevItems];
            updatedItems[existingItemIndex] = updatedItem;
        } else {
            updatedItems = [...prevItems, action.item];
        }
        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice
        };
    }
    if(action.type === "REMOVE_ITEM") {
        let updatedItems = [];
        const prevItems = state.items;
        const existingItemIndex = prevItems.findIndex((item) => item.id === action.id);
        const existingItem = prevItems[existingItemIndex];
        const updatedTotalPrice = state.totalPrice - existingItem.price;
        if(existingItem.amount === 1) {
            prevItems.filter((item) => item.id !== existingItem.id);
        } else {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1
            };
            updatedItems = [...prevItems];
            updatedItems[existingItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalPrice: updatedTotalPrice
        }
    }
    if(action.type === "ORDERED") {
        return initialCartState;
    }
    return initialCartState;
}

export const CartContextProvider = (props) => {
    
    const [cartState, dispatchCartState] = useReducer(cartReducer, initialCartState);

    const addItemHandler = (item) => {
        dispatchCartState({type: "ADD_ITEM", item: item});
    };

    const removeItemHandler = (id) => {
        dispatchCartState({type: "REMOVE_ITEM", id: id});
    };

    const emptyCartHandler = () => {
        dispatchCartState({type: "ORDERED"});
    };

    return <CartContext.Provider 
        value={
            {
                items: cartState.items,
                totalPrice: cartState.totalPrice,
                addItem: addItemHandler,
                removeItem: removeItemHandler,
                emptyCart: emptyCartHandler
            }
        }
    >{props.children}</CartContext.Provider>
}

export default CartContext;

// items = [
//     {
//         id: "item.id",
//         name: "item.name",
//         price: "item.price",
//         amount: "Input's event.target.value"
//     }
// ]