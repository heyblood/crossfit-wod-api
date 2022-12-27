const authenticate = (req, res, next) => {
  //get the token from the header if present
  const token = req.headers["x-auth-token"] || req.headers["authorization"];
  //if no token found, return response (without going to the next middelware)
  if (!token) {
    return res
      .status(401)
      .send({ message: "Access denied. No token provided." });
  }
  next();
};

module.exports = authenticate;
