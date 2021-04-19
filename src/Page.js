import React, { useState, useEffect } from 'react';
import Splash from './Splash';
import Products from './Products';
import Product from './Product';
import Cart from './Cart';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

function Page() {
    const [products, setProducts] = useState({});
    const [cart, setCart] = useState([]);

    const axiosGet = () => {
        axios.get('https://awesomeincbootcampapi-ianrios529550.codeanyapp.com/api/store/products')
            .then(function (response) {
                setProducts(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    useEffect(axiosGet, [])

    const addToCart = (ID) => {
        cart.push(ID);
        console.log(cart);
    }



    return (
        <Switch>
            <Route exact path="/">
                <Splash />
            </Route>
            <Route path="/home">
                <Splash />
            </Route>

            {products.length > 1 ?
                <>
                    <Route path="/products">
                        <Products 
                        products={products}
                        addToCart={addToCart}
                        />
                    </Route>

                    <Route path={`/product/:productID`}>
                        <Product products={products} />
                    </Route>

                    <Route path="/cart">
                        <Cart
                        products={products} 
                        cart={cart}/>
                    </Route>
                </>
                : "Loading Page"
            }
        </Switch>
    )
}

export default Page;