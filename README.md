
# Trivia master


A trivia game is a type of game that tests players' knowledge on various topics, facts, or events


## Features

- Jetpack Compose UI
- Retrofit Integration
- Custom API (NodeJS + Express)
- Database (MongoDB + Mongoose)



**Note:This application primarily focuses on the backend, demonstrating how to connect to it using Retrofit. It is not yet completed.**
## Getting Started

The backend component is subjective, therefore, you may implement it using any framework of your choice.
Alternatively, you may choose to follow along with me





## 1.Database:
For the database, I utilized MongoDB. Please follow these instructions to set it up

1. download and install [MongoDB compass](https://www.mongodb.com/products/tools/compass) 
2. create  connection 
3. create database 

**Note:You can follow along with this [YouTube tutorial ](https://www.youtube.com/watch?v=bJSj1a84I20)for a better understanding.**

## 2.create an Express.js Application(the server):
**Step 1**: Write this command in your terminal, to create a nodejs application

        npm init
This will ask you for few configurations about your project such as its name, etc."

**Step 2**: Install necessary dependencies for our application.
```bash 
npm install express body-parser  mongoose   nodemon
```
**Step 3**: The project structure will look like following. 
to be continued..

## 3.Connecting to MongoDB with mongoose:
1. create MongodbConnection.js:

```javascript
import mongoose from "mongoose"


const PORT = 3001
const MONGO_URL="mongodb://localhost:27017/<your-database-name>"

let mongodbConnection
const connectmongodb =()=>{
    if(!mongoose.connections.length>0){
         mongoose.connect(MONGO_URL).then(()=>{
          return mongoose.connection
      })
      .catch((err)=>{console.log(`${err} did not connect`)})
  }else{
    return  mongodbConnection = mongoose.connection
  }
}

export default connectmongodb

```
