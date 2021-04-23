import React, { useState, useEffect } from 'react';
import Splash from './Splash';
import Products from './Products';
import Product from './Product';
import Cart from './Cart';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';

function Page() {

    const [products, setProducts] = useState({}); // Initializing state for Products variable
    const [cart, setCurrentCart] = useState([]);  // Initializing state for Cart variable

    // Function that uses axios to retrieve products list from Ian's api, then I set state of products to the result
    const axiosGet = () => {
        axios.get('https://awesomeincbootcampapi-ianrios529550.codeanyapp.com/api/store/products')
            .then(function (response) {
                setProducts(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    useEffect(axiosGet, []) // Component Did Mount for axios call to happen. Not too knowledgable on the need for this

    // Helper function to save changes to user's cart to local storage
    const setCart = (cart) => {
        setCurrentCart(cart);
        window.localStorage.setItem('cart', JSON.stringify(cart))
    }

    // Component Did Mount for setting cart to local storage
    useEffect(() => {
        let LScart = window.localStorage.getItem('cart'); // Sets a variable to the local storage version of cart
        if (LScart !== cart) { // If local storage version of cart does not equal the current state's version, then change state to the local storage version
            setCurrentCart(JSON.parse(LScart))
        }
    }, [])

    // Function used for adding products to the cart
    const addToCart = (ID, amount) => {
        if (amount === undefined || amount === "") { amount = 1 } // If no amount is specified, default to 1
        console.log(amount)
        let temp = [...cart]; // deconstruct current state of cart

        // This is a terrible way to do this but was the first working version I could find after struggling for an hour
        if (temp.length > 0) { // Check if anything is in cart
            for (let i = 0; i < temp.length; i++) { // Loop through all the items in the cart
                if (temp[i].id === ID) { // If an item exits in the cart already, just add the amount to the quanitity property
                    temp[i].quantity = parseInt(temp[i].quantity) + parseInt(amount);
                    temp[i].total = (temp[i].quantity * products[ID - 1].price).toFixed(2);
                    break;
                } else if (i === temp.length - 1) { // If the item could not be found then create a new object and add it to the array
                    let obj = {}; // Make a new empty object
                    obj.id = ID; // id is equal to the product's ID
                    obj.name = products[ID - 1].name; // name equal to product's name
                    obj.quantity = amount; // amount equal to whatever amount user inputted
                    obj.total = ((products[ID - 1].price) * obj.quantity).toFixed(2); // total equal to product price multiplied by amount inputted by user
                    temp.push(obj); // Push new object to deconstructed cart array
                    break;
                }
            }
        } else { // Added this because I couldn't find a way to check for and make unique items if there was less than 1 item in the cart. I'm sure there is some easy refactor but I am content
            let obj = {};
            obj.id = ID;
            obj.name = products[ID - 1].name;
            obj.quantity = amount;
            obj.total = ((products[ID - 1].price) * obj.quantity).toFixed(2);
            temp.push(obj);
        }

        setCart(temp); // Set state to modified cart array
    }

    // Function for deleting an item from cart based on which position in the cart it was
    const removeFromCart = (index) => { 
        let temp = [...cart]; // Deconstructing array
        temp.splice(index, 1); // Cutting item out based on its index
        setCart(temp) // Set state to modified array
    }

    // Function for changing amount of a certain product in your cart
    const changeAmount = (ID, amount) => {
        let temp = [...cart]; // Deconstruct array
        temp.map(el => {  // Go through array until the ID inputted matches up
            if (el.id === ID) {
                el.quantity = amount; // Change quantity to new amount
                el.total = el.quantity * products[ID - 1].price // Recalculate total based on new quantity
            }
        })
        setCart(temp); // Set state to modified array
    }

    return (
        <Switch> {/* Start of Switch from React Router. Lets us change the view of Pages component based on the url */}
            <Route exact path="/"> {/* If url ends with '/' or nothing, change Page view to the Splash component */}
                <Splash />
            </Route>
            <Route path="/home"> {/* If url ends with '/home', change Page view to the Splash component */}
                <Splash />
            </Route>

            {products.length > 1 ? // Ternary to check if products variable retrieved data from api call before trying to display something
                <>
                    <Route path="/products"> {/* Display all products if url ends with '/products' */}
                        <Products
                            products={products}
                            addToCart={addToCart}
                        />
                    </Route>

                    <Route path={`/product/:productID`}> {/* Displays a whole page about a specifc product based on the ID in url after '/product/' */}
                        <Product
                            products={products}
                            addToCart={addToCart}
                        />
                    </Route>

                    <Route path="/cart"> {/* Displays the cart with all the items that have been added if url ends with /cart */}
                        <Cart
                            products={products}
                            cart={cart}
                            removeFromCart={removeFromCart}
                            changeAmount={changeAmount}
                        />
                    </Route>
                </>
                : "Loading Page" // If products have not been retrieved yet, simply just showing a filler string
            }
        </Switch> // End of Switch from React Router
    )
}

export default Page;