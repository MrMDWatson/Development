const Quotes = require("../db/userModel").Quotes;

module.exports = (app) => {
  app.get("/quote", async (req, res) => {
    console.log("Requesting data...");
    try {
      let data = await Quotes.find();
      // Send a random quote to user
      let randomQuote = data[Math.floor(Math.random() * data.length)];
      res.status(201).send(
        randomQuote
      );
      console.log("Success");
    } catch(err) {
      console.log(err);
    }
  });
  
  app.post("/newQuote", async (req, res) => {
    console.log("Posting data...");
    let { description, author } = req.body;
    try {
      let data = await Quotes.create({
        description: description,
        author: author
      });
      res.status(201).send({
        data
      })
      console.log("Success");
    } catch(err) {
      console.log(err);
    }
  });
}