# MEAN_Final_Project Repository for West Hartford Cares

## Site Author
* Michelle Harrop - HartCode Academy 2019

## Purpose and goals of this site
- To allow users to see various volunteer locations
- To register, edit, and delete site users. 

## Audience
- Prospective and current team managers
- Prospective and current knitting and crocheting team members  


## Site Pages:
- Home Page
- Login Page
- Register Page
- Edit User Profile Page
- Volunteer location search
- Admin Page (For an Admin. Provides a list of non-admin users)

## Server for Capstone - Node/Express/PostgreSQL/Sequelize

### Data Rendered:

- Users Data from ProsgreSQL file users
http://localhost:3000/users

- Leagues Data from JSON file leagues
http://localhost:3000/leagues

### Technologies
- HTML5/CSS3/Bootstrap4
- JavaScript
- jQuery
- Node.js
- ProgreSQL

# NOTE
This assumes that the user has Node.js installed globally on their machine and that they have done a git clone or have otherwise copied the MEAN_Final_Project into a folder.

### PostgreSQL

Note: This will use [PostgreSQL](https://www.postgresql.org/) in place of [MongoDB](https://www.mongodb.com/) for our Database. 

## Server start
+ run ```npm start``` to start the server
+ to run in development mode, to use the debugger, run ```npm run dev``` to start the server

```
$ cd server
$ npm run dev 
```

## PostgreSQL Setup
+ Create PostgreSQL DB User as defined above
+ Create a DB named **hca** in PostgreSQL using [pgAdmin4](http://127.0.0.1:49799/browser/)
+ Execute the following to build and populate the DB with test data
```
$ cd db
$ node migrate
$ node seed
```

## Client start

```
$ cd client
$ ng serve
...
webpack: Compiled successfully.
```
- To view the home page in the browser, you would go to:
http://localhost:4200/


## HartCode Academy Acknowledgments

* Dana Wyatt (for her fantastic instruction on JavaScript, jQuery, and all things coding!)
* Rob Frenette (for his instruction on HTML, CSS, Angular, Typescript, Node.js, MySQL; and for his instance on standards of excellence.)
* Denise Fraser (for checking in with us, arranging for visitors, and being a great manager!)
* Renisa Sizer (for checking in with us, and arranging for visitors)
* Franca Lewis (for supporting us and arranging for visitors)
* The rest of the HartCode Academy students, for their help and support, and their amazing github repos
* My then fiance, now husband, for dealing with my insanity these past 5 months