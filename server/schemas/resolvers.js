const { AuthenticationError } = require("apollo-server-express");
const { User, Trip } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('trips');
    },
    user: async (parent, args ,context) => {
      console.log(context.user)
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('trips');
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    trips: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Trip.find(params).sort({ createdAt: -1 });
    },
    trip: async (parent, { tripId }) => {
      return Trip.findOne({ _id: tripId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).select("-__v -password");
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addTrip: async (
      parent,
      { userID, tripTitle, tripCountry, tripCity, tripDuration, tripDesc, tripImg },
      context
    ) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        const trip = await Trip.create({
          tripTitle: tripTitle,
          tripCountry: tripCountry,
          tripCity: tripCity,
          tripDuration: tripDuration,
          tripDesc: tripDesc,
          tripImg: tripImg,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { trips: trip._id } }
        );

        return trip;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addComment: async (parent, { tripId, commentText }, context) => {
      if (context.user) {
      return Trip.findOneAndUpdate(
        { _id: tripId },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
      
    }
    throw new AuthenticationError("You need to be logged in!");
    },
    addActivity: async (parent, { tripId, activityTitle, activityLink, activityImg, activityReview }, context) => {
      if (context.user) {
      return Trip.findOneAndUpdate(
        { _id: tripId },
        {
          $addToSet: { activities: { activityTitle, activityLink, activityImg, activityReview } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
      
    }
    throw new AuthenticationError("You need to be logged in!");
    },
    removeTrip: async (parent, { tripId }, context) => {
        // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
        if (context.user) {
          const trip = await Trip.destroy({
            _id: tripId
          });
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { trips: trip._id } }
          );
        }
        throw new AuthenticationError("You need to be logged in!");
      },
      
      
    //   context) => {
    //   if (context.user) {
    //     const trip = await User.findOneAndUpdate(
    //       { _id: tripId },
    //       { $pull: { trips: trip._id } },
    //       { new: true }
    //     );
    //   }
    //   throw new AuthenticationError("You need to be logged in!");
    // },

    removeComment: async (parent, { tripId, commentId }) => {
      return Trip.findOneAndUpdate(
        { _id: tripId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
