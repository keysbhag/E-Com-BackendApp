# E-Commerce-Backend-App 


## Description 
The motivation for building this project was to make a backend application for small business owners so that they can keep control of their inventory and stock. It allows them to view, add, update, delete products, tags, and categories for their E-commerce website so that they may do everything it takes on the backend to maintain a functional E-commerce website. They can easily do this with the power of relational databases made with sequelize, to handle keeping track of all the data.  


## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
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
To use this backend app, you'll have to have insomnia downloaded as well so that you can run the functionality of this website 


## Credits
any credits here 


## License
MIT License, Here is the link for more details: https://opensource.org/licenses/MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)] 


## Contribute 
how to contribute here 


## Testing 
any tests here 


## Questions 
Please free to email me at keyshawn.11@hotmail.com for any questions
check out my Github: https://github.com/keysbhag 
