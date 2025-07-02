// Importing Modules/Packages
import { products, cartItems, dirs } from "../helpers/helpers";
import { useState } from "react";

export default function SideListItemComponent() {
    const checkout = async () => {
        let hostname = 'https://nubianfortune.nazirsportfolio.com';
        if (location.hostname === 'localhost') hostname = 'http://localhost:7000';
        try {
            const res = await fetch(`${hostname}/Checkout`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ cartItems, OriginPage: window.location.href })
            });
            const { url, Message } = await res.json();
            if (!res.ok || Message) return alert(Message);
            window.location = url;
        }
        catch (error) {
            throw error;
        }
    }

    const toggleShoppingCart = (e) => {
        const body = document.querySelector('body');
        body.classList.toggle('showCart');
    }

    const calculate = ({ parentElement }) => {
        const itemContainerID = parseInt(parentElement.parentElement.parentElement.dataset.type);
        let positionOfItemInCart;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].ProductID == itemContainerID) positionOfItemInCart = i;
        }
        if (parentElement.classList[0] === 'plus') cartItems[positionOfItemInCart].Quantity++;
        else cartItems[positionOfItemInCart].Quantity--;
        if (cartItems[positionOfItemInCart].Quantity <= 0) cartItems.splice(positionOfItemInCart, 1);
    }

    return (
        <div className="cartTab">
            <h1>Shopping Cart</h1>
            <div className="listCart">
                {
                    cartItems.map(({ ProductID, Quantity }, i) => {
                        const { Price, SalePercentage, ProductImages, ProductName } = products[ProductID - 1];
                        const discountedPrice = ((Price - (Price * (SalePercentage / 100))) * Quantity).toFixed(2);
                        return (
                            <div key={i} data-type={ProductID} className="item">
                                <div className="image">
                                    <img src={`${dirs.ProductsDir}${ProductImages[0]}`} alt={ProductName} />
                                </div>
                                <div className="name">{ProductName}</div>
                                <div className="totalPrice">${discountedPrice}</div>
                                <div className="quantity">
                                    <span onClick={({ target }) => calculate(target)} className="minus"><box-icon name='chevron-left' ></box-icon></span>
                                    <span>{Quantity}</span>
                                    <span onClick={({ target }) => calculate(target)} className="plus"><box-icon name='chevron-right'></box-icon></span>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div className="btn">
                <button onClick={toggleShoppingCart} className="close">CLOSE</button>
                <button onClick={checkout} className="checkout">CHECK OUT</button>
            </div>
        </div>
    )
}