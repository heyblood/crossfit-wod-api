const authorize = (req, res, next) => {
  // check whether having permissions to do the next thing
  let isAuthorized = req.headers["app-key"];

  if (!isAuthorized) {
    return res.status(401).send({
      message:
        "Access denied, No app-key provided. You don't have access permissions",
    });
  }
  next();
};

module.exports = authorize;
