import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
}
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
    token
        user {
            _id
            username
        }
    }
}`;

export const ADD_TRIP = gql`
  mutation addTrip($userId: ID!, $tripCountry: String!, $tripCity: String!, 
    $tripDesc: String!, $tripDuration: String!, $tripImg: String!) 
  {
    addTrip(userId: $userId, tripCountry: $tripCountry, tripCity: $tripCity, tripDesc: $tripDesc,
    tripDuration: $tripDuration, tripImg: $tripImg) 
      {
      _id
      tripCountry
      tripCountry
      tripDesc
      tripDuration
      tripImg
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;


export const ADD_COMMENT = gql`
  mutation addComment(
    $tripId: ID!
    $commentText: String!
    $commentAuthor: String!
  ) {
    addComment(
      tripId: $tripId
      commentText: $commentText
      commentAuthor: $commentAuthor
    ) {
      _id
      tripCountry
      tripCity
      tripDesc
      tripDuration
      tripImg
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;