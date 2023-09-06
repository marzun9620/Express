const express = require('express');
const mongoose=require('mongoose');
const cookie=require('cookie-parser');
const cookieParser = require('cookie-parser');
const handle=require('./hanlder');



const DB='mongodb+srv://enamulMarzun:shamsun99@cluster0.aoy5j7e.mongodb.net/marzun?retryWrites=true&w=majority';
mongoose.connect(DB).then(()=>{
    console.log('successful');
}).catch((err)=>{
    console.log('error');
});


const app=express();
const admin=express.Router();
app.use(cookieParser());
app.set('view engine', 'ejs');
const myMiddleWare = (req,res,next)=>{
    console.log(`${new Date(Date.now()).toLocaleString()}-
    ${req.method}-${req.originalUrl}-${req.protocol}-${req.ip}`);
    next();
};
app.use(myMiddleWare);
admin.get('/dashboard',handle);
app.use('/admin',admin);
app.listen(3000,()=>{
    console.log('Listening to Port no: 3000');
})