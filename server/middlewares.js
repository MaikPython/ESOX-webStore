const jwt = require('jsonwebtoken')

const authMiddleWare = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if(!bearerHeader) return res.send(400);
    const token = bearerHeader.split(" ")[1];
    if(!token) return res.send(401);
    jwt.verify( token, process.env.JWT_PRIVATE_KEY, (err, decoded) => {
        if(err){
            return res.status(400).send(err)
        }
        next()
      });
}

module.exports = { authMiddleWare }