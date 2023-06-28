const redirector = (req, res) => {
    if(!req.cookies.user){
        return res.redirect("/login")
    }
    
    if(req.cookies.user){
        return next();
    }
}

module.exports = redirector;