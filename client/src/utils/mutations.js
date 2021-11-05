import { gql } from "@apollo/client";

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
  }
`;

export const ADD_TRIP = gql`
  mutation addTrip(
    $tripTitle: String!
    $tripCountry: String!
    $tripCity: String!
    $tripDesc: String!
    $tripDuration: String!
    $tripImg: String!
  ) {
    addTrip(
      tripTitle: $tripTitle
      tripCountry: $tripCountry
      tripCity: $tripCity
      tripDesc: $tripDesc
      tripDuration: $tripDuration
      tripImg: $tripImg
    ) {
      _id
      tripTitle
      tripCity
      tripCountry
      tripDesc
      tripDuration
      tripImg
      createdAt
      activities {
        _id
        activityTitle
        activityLink
        activityImg
        activityReview
      }
      comments {
        _id
        commentText
      }

    }
  }
`;
export const REMOVE_TRIP = gql`
mutation removeTrip($tripId: ID!, $trip: String!) {
  removeTrip( tripId: $tripId, trip: $trip ) {
      _id
      tripTitle
      tripCountry
      tripDesc
      tripDuration
      tripImg
      createdAt
      activities {
        _id
        activityTitle
        activityLink
        activityImg
        activityReview
      }
      comments {
        _id
        commentText
    }
  }
}
`;


export const ADD_COMMENT = gql`
mutation addComment($tripId: ID!, $commentText: String!) {
  addComment(tripId: $tripId, commentText: $commentText) {
    _id
    tripCountry
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

export const ADD_ACTIVITY = gql`
mutation addActivity($tripId: ID!, $activityTitle: String!, $activityLink: String!, $activityImg: String!, $activityReview: String!) {
  addActivity(tripId: $tripId, activityTitle: $activityTitle, activityLink: $activityLink, activityImg: $activityImg, activityReview: $activityReview) {
    _id
    tripCountry
    tripDesc
    tripDuration
    tripImg
    createdAt
    activities {
      _id
      activityTitle
      activityLink
      activityImg
      activityReview
    }
  }
}
`;
