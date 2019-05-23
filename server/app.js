const dotenv = require("dotenv");
const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
dotenv.config();

const cors = require("cors");

const app = express();
const user = process.env.USER;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const port = process.env.PORT;
const db = process.env.DB;

app.use(cors());
mongoose.connect(
  `mongodb://${user}:${password}@${host}.mlab.com:${port}/${db}`
);
mongoose.connection.once("open", () => {
  console.log("connected to mongodb");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("listening");
});
