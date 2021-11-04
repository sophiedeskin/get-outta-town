const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    trips: [Trip]
  }

  type Trip {
    _id: ID
    tripTitle: String
    tripCountry: String
    tripCity: String
    tripDesc: String
    tripDuration: String
    tripImg: String
    createdAt: String
    comments: [Comment]
    activities: [Activity]
    username: [User]!
  }

  type Activity {
    _id: ID
    activityTitle: String
    activityLink: String
    activityImg: String
    activityReview: String
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(userId: ID): User

    trips(username: String): [Trip]
    trip(tripId: ID!): Trip
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTrip(
      tripTitle: String!
      tripCountry: String!
      tripCity: String!
      tripDuration: String!
      tripDesc: String!
      tripImg: String!
    ): User
    addComment(tripId: ID!, commentText: String!): Trip
    addActivity(tripId: ID!, activityTitle: String!, activityLink: String!, activityImg: String!, activityReview: String!): Trip
    removeTrip(tripId: ID!): User
    removeComment(tripId: ID!, commentId: ID!): User
  }
`;

module.exports = typeDefs;
