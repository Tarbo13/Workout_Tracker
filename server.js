const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));  //??

// app.use(express.static(__dirname + '/Develop'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(express.static("./Develop/public"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

require("./Develop/routes/api_routes")(app);
require("./Develop/routes/html_routes")(app);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})




