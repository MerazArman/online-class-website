import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'


const Shop = () => {
    //console.log(fakeData)
    const first15Product  = fakeData.slice(0,12)
    const [products ,setProducts]=  useState(first15Product)
    //console.log(products)
    const [cart , setCart] = useState([])
    const addBtnHandler = (someProduct) =>{
        // console.log('click' , someProduct)
         const newCart=[...cart , someProduct]
         setCart(newCart)
         
    }
    return (
        <div className='shop-container row'>
            <div className='product-container  col-md-9'>
                
                {  products.map(product => <Product addBtnHandler= {addBtnHandler} productItem = {product}>  </Product>) 
              }
            </div>
            <div className="col-md-3">
              
              
                <Cart cart = {cart}> </Cart>
               
            </div>
        </div>
    );
};

export default Shop;