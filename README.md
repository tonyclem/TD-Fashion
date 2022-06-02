<!-- Project Structure -->

## Project Structure

# E-commerce Platform App

building a E-commerce plat, where i will be fetching the data from this: [link](https://fakestoreapi.com/docs) <br>

I will follow the [YouTube](https://www.youtube.com/) same color palette, with addition light-green.

# Project name: TG-Fashion

```structure

Color: white, black, red, green

Structure:

client
├── Public
|   └──styles
├── src
|   └── api
|   └── cart
|   └── pages
|   └── views
├── app.js
├── constants
└── index.html

```

### Client Structure

- `public` this contains the static files that can be used by our `index.html` file
- `src` this contains the static files that can be used by our index.html file
  - `api` all code to communicate with our server or possible other parts of the web
  - `cart` add item to the basket and remove item from the basket
  - `pages` the pages components of our app, any routing will go between these components
  - `views` will contains code to define what the dom will like.
  - `app.js` this file our initialization code

## The app features

- [x] Structure
- [x] Schema for app
- [x] Endpoint to get all items
- [x] Page to view all items
- [x] Endpoint to add and remove items
- [x] The ability to view item on the frontend
- [x] The ability to add a item on the frontend
- [x] A button to remove a item from the frontend
- [x] Parameter to the get items endpoint that filters the items on product
- [x] Adding an input to the frontend that is sent to the get items input
