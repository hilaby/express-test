
var lib = {
    checkAuth: function(req, res, next){
        next({message: "wow", status: 444}, req, res, next)
    }
}

module.exports = lib;