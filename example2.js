const express = require('express');
const cookie=require('cookie-parser');
const cookieParser = require('cookie-parser');
const handle=require('./hanlder');

const app=express();
const admin=express.Router();
app.use(cookieParser());

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