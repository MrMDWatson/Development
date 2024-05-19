const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../db/userModel").Users;

module.exports = (app, auth) => {
  app.get("/user", auth, async (req, res) => {
    try {
      const user = await Users.findById(req.user.userId);
      res.status(201).send({
        user
      });
    } catch(err) {
      console.log(err);
      res.status(400).send({
        message: "Incorrect ID"
      });
    }
  });
  
  app.post("/register", async (req, res) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);
    try {
      const user = await Users.create({
        email: req.body.email,
        password: hash
      });
      res.status(201).send({
        message: "User Created Successfully"
      });
    } catch(err) {
      console.log(err);
      res.status(500).send({
        message: `Error creating ${req.body.email} profile`,
        err
      });
    }
  });
  
  app.post("/login", async (req, res) => {
    try {
      const user = await Users.findOne({ email: req.body.email });
      const passwordCheck = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordCheck) {
        return res.status(400).send({
          message: "Passwords does not match"
        });
      }
      //   create JWT token
      const token = jwt.sign(
        {
          userId: user._id,
          userEmail: user.email,
        },
        "TOKEN",
        { expiresIn: "24h" }
      );
      res.status(200).send({
        message: "Login Successful",
        email: user.email,
        token
      });
    } catch(err) {
      console.log(err);
      res.status(400).send({
        message: "Passwords does not match"
      });
    }
  });
}