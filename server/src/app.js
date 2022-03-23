const express = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/index");

const app = express();

const PORT = 5000;

const users = [{ id: 1, name: "Vasya", age: 13 }];

const rootValue = {
  getAllUsers: () => users,
  getUser: ({ id }) => users.find(({ idUser }) => idUser === id),
  createUser: ({ input }) => {
    const user = { id: Date.now(), ...input };
    users.push(user);
    return user;
  },
};

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue,
  })
);

app.listen(PORT, () => console.log("Server start..."));
