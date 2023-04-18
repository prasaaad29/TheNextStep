const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://prasad:12345@cluster0.5afsg.mongodb.net/examler?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("database connected !!");
  })
  .catch((err) => {
    console.log("database not connected !!");
  });
