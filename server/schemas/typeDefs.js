const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    trips: [Trip]!
  }

  type Trip {
    _id: ID
    tripCountry: String
    tripCity:String
    tripDesc: String
    tripAuthor: String
    tripDuration: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    trips(username: String): [Trip]
    trip(tripId: ID!): Trip
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTrip(tripCountry: String!, tripCity: String!, tripDuration: String!, tripDesc: String!, tripAuthor: String!): Trip
    addComment(
      tripId: ID!
      commentText: String!
      commentAuthor: String!
    ): Trip
    removeTrip(tripId: ID!): Trip
    removeComment(tripId: ID!, commentId: ID!): Trip
  }
`;

module.exports = typeDefs;
