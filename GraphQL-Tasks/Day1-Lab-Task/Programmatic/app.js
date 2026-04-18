const express = require("express");
const cors = require("cors");
const schema = require("./graphql/schema");
const { createHandler } = require("graphql-http/lib/use/express");

const app = express();

function formatError(err) {
  if (!err.originalError) {
    return err;
  }
  const originalError = err.originalError;
  return {
    message: originalError.message,
    code: originalError.code,
    data: originalError.data,
  };
}

app.use(cors());
app.use(express.json());

app.all(
  "/graphql",
  createHandler({
    schema,
    formatError,
  }),
);

app.get("/", (req, res) => {
  res.send("Welcome to Programmatic");
});

app.listen(3000, () => {
  console.log("Programmatic Server started on port 3000");
});
