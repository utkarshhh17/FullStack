const express = require("express");
const app = express();
const mongoose=require('mongoose');
const cors = require('cors');
mongoose.set('strictQuery',false);
const { loginUser, signupUser, resetPassword } = require('./controllers/userController')



const port = 8000;
const conn = 'mongodb+srv://utkarsh:utkarsh@atlascluster.vdrhcf6.mongodb.net/FullStack';

app.use(express.json());
app.use(cors());

app.post('/login',loginUser);
app.post('/signup',signupUser);
app.post('/reset',resetPassword);

const start= async()=>{
    try{
        await mongoose.connect(conn);
        app.listen(port, () => {

            console.log("Started")
        });
    }catch(e){
        console.log('error:',e.message );
    }

};
start();