const express=require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('This is home page');
});
app.post('/',(req,res)=>{
    res.send('This is home post  page');
});


app.listen(3000,()=>{
    console.log('Listening to port no :3000');
});