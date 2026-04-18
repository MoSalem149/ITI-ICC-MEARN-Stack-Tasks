const { GraphQLID } = require("graphql");
const { UserType } = require("./user.type");
const User = require("../../models/User");
const { type } = require("node:os");
const { resolve } = require("node:dns");

const userQueries = {
  getUserDetails: {
    type: UserType,
    args: {
      id: { type: GraphQLID },
    },
    resolve: async (__dirname, { id }) => {
      const user = await User.findBuId(id);
      if (!user) {
        const error = new Error("User not found");
        error.code = 404;
        throw error;
      }
      return user;
    },
  },
};
