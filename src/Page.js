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

    const addToCart = (ID, amount) => {
        if (amount === undefined || amount === "") { amount = 1 }
        console.log(amount)
        let temp = [...cart];
        if (temp.length > 0) {
            for (let i = 0; i < temp.length; i++) {
                if (temp[i].id === ID) {
                    temp[i].quantity = parseInt(temp[i].quantity) + parseInt(amount);
                    temp[i].total = (temp[i].quantity * products[ID - 1].price).toFixed(2);
                    break;
                } else if (i === temp.length - 1) {
                    let obj = {};
                    obj.id = ID;
                    obj.name = products[ID - 1].name;
                    obj.quantity = amount;
                    obj.total = ((products[ID - 1].price) * obj.quantity).toFixed(2);
                    temp.push(obj);
                    break;
                }
            }
        } else {
            let obj = {};
            obj.id = ID;
            obj.name = products[ID - 1].name;
            obj.quantity = amount;
            obj.total = ((products[ID - 1].price) * obj.quantity).toFixed(2);
            temp.push(obj);
        }
        setCart(temp);
    }

    const removeFromCart = (index) => {
        let temp = [...cart];
        temp.splice(index, 1);
        setCart(temp)
    }

    // const changeAmount = (ID) => {
    //     let temp = [...cart];
    //     temp.map(el => {
    //         if (el.id === ID) {
    //             el.quantity = 500;
    //         }
    //     })
    //     setCart(temp);
    // }

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
                        <Product 
                        products={products}
                        addToCart={addToCart}
                        />
                    </Route>

                    <Route path="/cart">
                        <Cart
                            products={products}
                            cart={cart}
                            removeFromCart={removeFromCart}
                        />
                    </Route>
                </>
                : "Loading Page"
            }
        </Switch>
    )
}

export default Page;