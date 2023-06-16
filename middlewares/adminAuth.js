function adminAuth (req, res, next) {
    if (req.session.administrador != undefined){
        next();
    }else{
        res.redirect("/");
    }
}

module.exports = adminAuth;