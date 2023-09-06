const hanlde=function(req,res){
    res.send(req.originalUrl);
    res.send(req.app.baseUrl)
  console.log(req.cookies.marzun);
};
module.exports=hanlde;