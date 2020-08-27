import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cartItem =props.cart;
   let price = 0;
   for (let i = 0; i < cartItem.length; i++) {
       const element = cartItem[i];
       price = price + element.price;
   }
   let tax = (price/80);
   let total = (price+tax);
    return (
        <div className="cart align-items-center">
            <h3>Order  Summary</h3>
            <h4>Total Order: {cartItem.length}</h4> 
            <h4> price :{price} </h4>
            <h4> Tax:{tax} </h4>
            <h3> Grand Total: {total} </h3>
             <button className="btn btn-success"> Review Order</button>

        </div>
    );
};

export default Cart;