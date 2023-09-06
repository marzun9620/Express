const express=require('express');
const app1 = require('./marzun');
const app = express();
const admin=express();


const router = express.Router();
app.use(router);
app.locals.title="My app";

router.get('/',app1);
admin.get('/dashboard',(req,res)=>{
    res.send(admin.mountpath);
    res.send('This is admin dashboard');

   
});
/*
admin.on('mount', (parent) => {
    console.log('Admin Mounted')
    console.log(parent) // refers to the parent app
  }); */
app.use('/admin',admin);
router.get('/home',(req,res)=>{
    res.send('This is home page');
});
router.post('/',(req,res)=>{
    console.log((req.body['name ']));
    res.send('This is home post  page');
});
app.all('/marzun',(rq,res)=>{
    res.send('MY name is Marzun');
});


app.listen(3000,()=>{
    console.log('Listening to port no :3000');
});  