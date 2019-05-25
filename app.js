const dotenv = require("dotenv");
const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
dotenv.config();
const cors = require("cors");
const app = express();
const path = require("path");

const user = process.env.USER;
const password = process.env.PASSWORD;
const host = process.env.HOST;
const portDB = process.env.PORTDB;
const db = process.env.DB;

const url = `mongodb://${user}:${password}@${host}.mlab.com:${portDB}/${db}`;
app.use(cors());
console.log(url);
mongoose.connect(url, { useNewUrlParser: true });
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

app.use(express.static(path.join(__dirname, "client/build")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const serverPort = process.env.SERVERPORT || 4000;

app.listen(serverPort, () => {
  console.log("listening");
});
