<!-- Project Structure -->

## Project Structure

A E-commerce Platform

```structure
Project name:
TonygoldFashion

color: white, black, red, green

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

### client Structure

- `public` this contains the static files that can be used by our `index.html` file
- `src` this contains the static files that can be used by our index.html file
  - `api` all code to communicate with our server or possible other parts of the web
  - `cart` add item to the basket and remove item from the basket
  - `pages` the pages components of our app, any routing will go between these components
  - `views` will contains code to define what the dom will like.
  - `app.js` this file our initialization code
