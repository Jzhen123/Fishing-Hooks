import React, {useState, useEffect} from 'react';
import Splash from './Splash';
import Products from './Products';
import axios from 'axios';

function Page () {
    const [products, setProducts] = useState({});

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

    return (
        <Products products={products} />
    )
}

export default Page;