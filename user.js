const { request, response } = require('express');
const express = require('express');
const app =express();
require('dotenv').config();

const PORT = process.env.PORT || 4010;

const mongoose=require('mongoose');


const userController = require('./controllers/userController');


app.use(express.json());

app.post('/user',userController.addUser);
app.get('/users', userController.getAllUser);
app.patch('/user/:userId',userController.updateById);
app.delete('/user/:userId',userController.deleteById);
app.get('/user/:userId',userController.getUserbyId);


app.listen(PORT,() => {
    console.log("My server is up and running on port:",PORT);
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log("Database is connected");
    })
    .catch(function(error){
        console.log(`Dtabase not connected, ${error}`);
    });
});