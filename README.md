# Store Inventory Management System

A store inventory management system, built for the web.

### Architecture
![Monolith](./documentation/apple_cart_monolith.png)

### Contributors
* Kevin Joy - joyke@oregonstate.edu
* George Kochera - kocherag@oregonstate.edu
* Blake Lester - lesterst@oregonstate.edu
* Quinn Wilkins - wilkinsq@oregonstate.edu
* Ellen Yang - yange@oregonstate.edu

### Technology Stack

The Apple Cart uses a simple, lightweight technology stack.

Front-End      | Back-End
---------------|---------
HTML           |  Node.JS
Bootstrap CSS  |  Express
Javascript     |  Handlebars
&nbsp;         |  Sessions
&nbsp;         |  My SQL

### Database Design
<img src="./documentation/CS361_ERD.png" alt="ERD" width="500">
<img src="./documentation/CS361_Schema.png" alt="Schema" width="500">

### Setup

1. Make sure you have a version of Node.JS installed on your machine. Every system and setup is a bit different so the best instructions can be found at [Node.JS](https://nodejs.org/en/).
2. Clone the repository to your machine in whichever manner suits you best. Command-line or via an IDE.
3. Open a terminal/command-prompt window and navigate to the folder containing 'app.js'.
4. Run the following command:
`npm install package.json`
This will install all the dependencies for our team's app for you, on your local machine. (Things like handlebars, express and anything we may implement later.)

At this point, the web app is 'installed' and ready to use. Anytime you want to run the app, you would do the following from the command-line in the folder that contains 'app.js'
`node app.js`
As long as you do not get any errors, you should be able to open up your browser, and navigate to http://localhost:8080. This is the running instance of the web app. 




