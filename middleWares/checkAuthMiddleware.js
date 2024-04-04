//Dummy logic for Authentication - 
/*let checkAuthMiddleware = function(req,res,next){
    console.log("In checkAuth Middleware");
    if(req.query.auth == 'true')
    {
        req.isAuthenticated = true;
    next();
    }
    else
    console.log("Not Authenticated");
    res.end();
}*/

let checkAuthenticationV2 = (request, response,next) => {
    if(request.session != null && request.session.username != null)
    {
      next();
    }
    else{
      //response.redirect("/login");
      response.send("Not Authenticated");
    }
  }

module.exports = checkAuthenticationV2;