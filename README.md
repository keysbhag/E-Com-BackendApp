# E-Commerce-Backend-App 


## Description 
The motivation for building this project was to make a backend application for small business owners so that they can keep control of their inventory and stock. It allows them to view, add, update, delete products, tags, and categories for their E-commerce website so that they may do everything it takes on the backend to maintain a functional E-commerce website. They can easily do this with the power of relational databases made with sequelize, to handle keeping track of all the data.  


## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Live Video Demonstration](#live-video-demonstration)
* [Credits](#credits)
* [License](#license)
* [Contribute](#contribute)
* [Testing](#testing)
* [Questions](#questions) 


## Installation
*Note that you will want to already have mysql downloaded and installed on your computer*

Download the package from Github, install your dependencies with: 
```md
npm install
```
Once all dependencies are installed open your mySQL server with: 
```md
mysql -u root -p
```
Login with your password and run your schema and seeds with:
```md
sources db/schema.sql
```

Once you've done that you'll want to make sure you've renamed your '.env.EXAMPLE' file to '.env' and then fill in the user and password variables with your respective user and password.

Next you'll want to seed your database with the following function:
```md
node seeds/index.js
```
Once you've done that your database is set and you can run the program by running:
```md
npm start
```

## Usage
To use this backend app, you'll have to have insomnia downloaded as well so that you can run the functionality of this website.
It will require you to know how to format your inputs, I will show examples below:

To "GET" by a model, use: 
```md
/api/{products/catergories/tags}
```
To "GET" by an id, use:
```md
/api/{products/catergories/tags}/{some id number here}
```
To "POST/PUT" a product into the database, use the get route for products and submit something like for example:
```md
 {
	"product_name": {"product name here"},
	"price": {price here},
	"stock": {some number here},
	"category_id": {correlating category id here},
	"tagIds": {[an array of tags ids here]}
}
```
To "POST/PUT" a category into the database, use the get route for categories and submit:
```md
 {
	"category_name": {"category name here"},
}
```
To "POST/PUT" a tag into the database, use the get route for tags and submit:
```md
 {
	"tag_name": {"tag name here"},
}
```
To delete any category/tag/product use same route as "GET", and add specified id at the end for example:
```md
/api/tags/3
```

## Live Video Demonstration
Here is the link to the live video: https://www.youtube.com/watch?v=VFlIrq7L0rc

## Credits
* Keyshawn Bhagwandin https://github.com/keysbhag
* mysql2 https://www.npmjs.com/package/mysql2
* Sequelize https://sequelize.org/
* Insomnia https://insomnia.rest/download

## License
MIT License, Here is the link for more details: https://opensource.org/licenses/MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)] 


## Contribute 
N/A 


## Testing 
N/A

## Questions 
Please free to email me at keyshawn.11@hotmail.com for any questions
check out my Github: https://github.com/keysbhag 
