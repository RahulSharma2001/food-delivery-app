# Food Delivery Application

## Overview

This is a full-stack food delivery application built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to browse restaurants, view menus, place orders, and track their deliveries in real-time.

## Features

- User Authentication (Sign Up, Login, Logout)
- Browse Restaurants and Menus
- Search for Restaurants by Cuisine
- Add Items to Cart and Place Orders
- Order History and Order Tracking
- Admin Dashboard for Managing Restaurants, Menus, and Orders

## Tech Stack

- **Frontend**: React.js, Context Api, Material-UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
 ## installation
 ### admin
 -npm run dev 

  ### frontend
 -npm run dev 

  ### backend
 -npm start

 ## Backend EndPoints

 ### base Url
 -http://localhost:5000

 ### Api endpoints
  **Auth**
 - "/api/user/login"
 - "/api/user/register"
   
    **Cart**
 - "/api/cart/add"
 - "/api/cart/remove"
 - "/api/cart/get"

    **Food**
 - "/api/food/add"
 - "/api/food/list"
 - "/api/food/remove"

    **Food**
 - "/api/order/place"
 - "/api/order/verify"
 - "/api/order/usersorders"
 - "/api/order/list"
 - "/api/order/status"
 
