const { GraphQLNonNull, GraphQLString } = require("graphql");
const { AuthPayload } = require("./user.type");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");

const userMutations = {
  register: {
    type: AuthPayload,
    args: {
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
      name: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: async (_, { email, password, name }) => {
      const existing = await User.findOne({ email });
      if (existing) {
        throw new Error("User already exists");
      }
      const user = new User({
        email,
        password,
        name,
      });
      await user.save();
      const token = jwt.sign(
        { userId: user._id, email: user.email, name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
      );

      return { token, user };
    },
  },
  login: {
    type: AuthPayload,
    args: {
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) },
    },
    resolve: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("Invalid Credentials");
      }
      const isMatch = await user.matchPassword(password);
      if (!isMatch) {
        throw new Error("Invalid Credentials");
      }
      const token = jwt.sign(
        { userId: user._id, email: user.email, name: user.name },
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
      );
      return { token, user };
    },
  },
};

module.exports = userMutations;
