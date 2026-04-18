const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { createHandler } = require("graphql-http/lib/use/express");
require("dotenv").config();

const schema = require("./graphql/schema");
const authenticate = require("./middlewares/auth.middleware");
const { log } = require("node:console");

const app = express();

app.use(cors());
app.use(express.json());
app.use(authenticate);

const formatError = (err) => {
  if (!err.originalError) {
    return err;
  } else {
    const data = err.originalError.data;
    const code = err.originalError.code || 500;
    const message = err.message || "Internal Server Error";
    return { message, code, data };
  }
};

app.all("/graphql", (req, res) => {
  return createHandler({
    schema,
    formatError,
    context: () => ({ req }),
  })(req, res);
});

app.get("/", (req, res) => {
  res.send("Lab 2");
});

mongoose.set("debug", function (collectionName, method, query, doc) {
  console.log(
    `Mongoose: ${collectionName}.${method}(${JSON.stringify(query)}, ${JSON.stringify(doc)})`,
  );
});

const PORT = process.env.PORT || 3000;
const MONGO_URI =
  process.env.DATABASE_CONNECTION_STRING ||
  "mongodb://localhost:27017/graphql_lab2";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`DB Error: ${err}`);
  });
