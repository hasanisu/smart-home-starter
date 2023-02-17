import React, { useContext, useState } from 'react';
import { CartContext, ProductsContext } from '../layout/Root';
import { addToDb, removeFromDb } from '../utilities/fakedb';
import Product from './Product';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Shop = () => {
    const products = useContext(ProductsContext);
    console.log(products)
    const [cart, setCart] = useContext(CartContext);


    const handleAddToCart=product=>{
        let newCart = [];
        const exist = cart.find(pd => pd.id === product.id)
        if(!exist){
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            const rest = cart.filter(pd => pd.id !== product.id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist ]
        }
        setCart(newCart)
        addToDb(product.id)
        toast.success('added', {autoClose: 50 })
        
    }

    

    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
            <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>

                {
                    products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            
        </div>
    );
};

export default Shop;