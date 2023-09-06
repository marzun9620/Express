const handle =(req,res)=>{
    console.log(req.app.locals.title);
    res.send('This is home post  page');
};
module.exports=handle;