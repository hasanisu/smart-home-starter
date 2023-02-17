import { getStoredCart } from "../utilities/fakedb";

export const productAdd = async () =>{
    const productsData = await fetch ('products.json')
    const products = await productsData.json()


    const savedCart = getStoredCart();
    const initiaCart = [];
    for(const id in savedCart){
        const foundProduct = products.find(product => product.id === id)
        if(foundProduct){
            const quantity = savedCart[id];
            foundProduct.quantity = quantity;
            initiaCart.push(foundProduct)
        }
    }

    return {products, initiaCart};
} 