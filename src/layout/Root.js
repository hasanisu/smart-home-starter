import React, { createContext } from 'react';
import Header from '../components/Header';
import {Outlet, useLoaderData} from 'react-router-dom';
import Footer from '../components/Footer';

export const ProductsContext = createContext([]);
const Root = () => {
    const products = useLoaderData();
    console.log(products)
    return (
        <ProductsContext.Provider value={products}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </ProductsContext.Provider>
    );
};

export default Root;