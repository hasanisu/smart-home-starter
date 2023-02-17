import React, { createContext, useState } from 'react';
import Header from '../components/Header';
import {Outlet, useLoaderData} from 'react-router-dom';
import Footer from '../components/Footer';

export const ProductsContext = createContext([]);
export const CartContext = createContext([])
const Root = () => {

    
    const {products, initiaCart } = useLoaderData();
    const [cart, setCart] = useState(initiaCart);
    // console.log(products)


    return (
        <ProductsContext.Provider value={products}>
            <CartContext.Provider value={[cart, setCart]}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </CartContext.Provider>
        </ProductsContext.Provider>
    );
};

export default Root;