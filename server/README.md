# MEAN_Final_Project: Server for West Hartford Cares
Server for Capstone - Node/Express/PostgreSQL/Sequelize

## Site Author
* Michelle Harrop - HartCode Academy 2019

## Data Rendered:

- **Users Data from ProsgreSQL file users**

- GET users listing for non-admins ({ where: { is_admin: "0" }).
GET: http://localhost:3000/users/

- POST for Login. */
POST http://localhost:3000/users/login

- POST for Register.
POST http://localhost:3000/users/register

- PUT users for editing user email.
PUT http://localhost:3000/users/edit/:ID

- DELETE user.
DELETE http://localhost:3000/users/delete/:ID

- **Leagues Data from JSON file leagues**

- GET leagues data.
GET http://localhost:3000/leagues/data

## Technologies
- Node.js
- ProgreSQL

### PostgreSQL

Note: This will use [PostgreSQL](https://www.postgresql.org/) in place of [MongoDB](https://www.mongodb.com/) for our Database. 

This example assumes a PostgreSQL User with the following
+ username: hca
+ password: password
+ creds: DBA


## Server and app setup and start
This assumes that the user has Node.js installed globally on their machine and that they have done a git clone or have otherwise copied the MEAN_Final_Project into a folder.

- In the command prompt:

```
$ cd server
$ npm install 
```
This will install the npm packages from package.json.

## PostgreSQL Setup
+ Create PostgreSQL DB User as defined above
+ Create a DB named **hca** in PostgreSQL using [pgAdmin4](http://127.0.0.1:49799/browser/)
+ Execute the following to build and populate the DB with test data
```
$ cd db
$ node migrate
$ node seed
```

## Test
+ run ```npm start``` to start the server
+ to run in development mode, to use the debugger, run ```npm run dev``` to start the server
+ Test using Postman Collection:
    + labs copy.postman_collection

### Input and Outputs for Testing:
**POST Login**
POST http://localhost:3000/users/login
Input:
```
username: req.body.username
password: req.body.password
```

**POST Register**
POST http://localhost:3000/users/register
Input:
```
username: req.body.username
email: req.body.email
password: req.body.password
```


**EDIT user**
PUT http://localhost:3000/users/edituserprofile/7
Input:
```
email: req.body.email
```
Output (Positive):
```
[
    1
]
```
Output (Negative):
```
[
    0
]
```

**DELETE user**
DELETE http://localhost:3000/users/edituserprofile/7
Output (Positive):
```
1
```
Output (Negative):
```
0
```

**GET User Data**
GET http://localhost:3000/users/


**GET Leagues Data**
GET http://localhost:3000/leagues/data
Output (Positive):
```
[
    {
        "Name": "Animal Shelter",
        "Code": "animalShelter",
        "Description": "This volunteer location is at the West Hartford Animal Shelter"
    },
    {
        "Name": "Food Pantry",
        "Code": "foodPantry",
        "Description": "This volunteer location services the West Hartford Food Pantry"
    },
    {
        "Name": "Library",
        "Code": "library",
        "Description": "This volunteer location services all of the West Hartford Libraries"
    },
    {
        "Name": "Playgrounds",
        "Code": "playgrounds",
        "Description": "This volunteer location is all over town at different playgrounds"
    },
    {
        "Name": "Trails and Bike Paths",
        "Code": "trails",
        "Description": "This volunteer location is all of the town's walking trails and bike paths"
    },
    {
        "Name": "Tutoring",
        "Code": "tutoring",
        "Description": "This volunteer location assists at various West Hartford Schools"
    },
    {
        "Name": "Westmoor Park",
        "Code": "westmoor",
        "Description": "This volunteer location is at Westmoor Park on Flagg Rd"
    },
    {
        "Name": "Women's Shelter",
        "Code": "womensShelter",
        "Description": "This volunteer location is at the women's shelter in Hartford"
    }
]
```
Output (Negative):
```
[]
```