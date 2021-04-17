Fishing Hooks Project

    Using React Hooks to be able to manage state without class components
    Be able to navigate/view pages with react-router
    Conditionally render based on state
    Refreshing the pages should maintain the user's view/data

Path 1 (Shopping Cart)

    User will have all products listed on the page
    Have specfic product pages for each product that can be used by clicking a product's name
    User can change how many of each item they have in their cart
    Have a "add to cart" option with each product. (Allow them to choose to add more than 1 the item)

Component Structure

    -App
        -Header
            -Title
            -Navbar
                -Home
                -Products
                -Cart
                -Log in
                -Sign up

        -Pages/Routes (Will vary)
            -Splash/Home
                -Image
                -Button/CTA to shop?

            -All Products
                -Card of each product with some details
                    -Name
                    -Picture
                    -Price
                    -Quantity
                    -Add to cart (Icon maybe?)

            -Specfic Product
                -Big picture
                -Name
                -Price
                -Different sizes?
                -Quantity
                -Add to cart (Big button)

            -Cart
                -List of all the items added to the cart
                    -Button to remove from cart
                    -Name
                    -Price
                    -Option to add another?
                    
Managing Data

    Do the axios call in Pages
        If in Products Page
            Map through all the data, creating each entry with a card and its details
        
        If in a specfic Product Page
            Using an ID search through our axios data and then return appropriately

    Store an array of cart items in Pages