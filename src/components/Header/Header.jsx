import React from "react";
import classes from "./Header.module.css";
import foodImage from "../../images/foodImage.png";
import CartButton from "./CartButton";


const Header = (props) => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h2>Food Order App</h2>
                <CartButton onShowCart={props.onClickCart} />
            </header>
            <div className={classes.foodImg}>
                <img src={foodImage} alt='A table full of delicious food!' />
            </div>
        </React.Fragment>
    );
};

export default Header;