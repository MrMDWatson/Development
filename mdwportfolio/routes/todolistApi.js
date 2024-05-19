const Todos = require("../db/userModel").Todos;

module.exports = (app, auth) => {
  app.get("/todos", auth, async (req, res) => {
    console.log("Requesting data...");
    try {
      let data = await Todos.find({user_id: req.user.userId});
      res.json(data);
      console.log("Success");
    } catch(err) {
      console.log(err);
    }
  });
  
  app.post("/todos", auth, async (req, res) => {
    console.log("Posting data...");
    let { description } = req.body;
    try {
      await Todos.create({
        user_id: req.user.userId,
        description: description
      });
      let data = await Todos.find({user_id: req.user.userId});
      res.json(data);
      console.log("Success");
    } catch(err) {
      console.log(err);
    }
  });
  
  app.put("/todos", auth, async (req, res) => {
    console.log("Updating data...");
    let { id } = req.body;
    let { description } = req.body;
    try {
      await Todos.findByIdAndUpdate({_id: id}, {description: description}, {new: true});
      let data = await Todos.find({user_id: req.user.userId});
      res.json(data);
      console.log("Success");
    } catch(err) {
      console.log(err);
    }
  });
  
  app.delete("/todos", auth, async (req,res) => {
    console.log("Removing data...");
    let { id } = req.body;
    try {
      await Todos.findByIdAndRemove({_id: id});
      let data = await Todos.find({user_id: req.user.userId});
      res.json(data);
      console.log("Success");
    } catch(err) {
      console.log(err);
    }
  });
}