import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      }
    }
`;
export const QUERY_TRIPS = gql`
  query getTrips {
    trips {
      _id
      tripCountry
      tripCity
      tripDesc
      tripDuration
      tripAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_TRIP = gql`
  query getSingleTrip($tripId: ID!) {
    trip(tripId: $tripId) {
      _id
      tripCountry
      tripCity
      tripDesc
      tripDuration
      tripAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;