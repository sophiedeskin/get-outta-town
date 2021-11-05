import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user {
    user {
      _id
      username
      email
      trips {
        tripCountry
        tripTitle
        tripCity
        tripDesc
        tripDuration
        createdAt
        tripImg
        comments {
          _id
          commentText
          createdAt
        }
        activities {
          _id
          activityTitle
          activityLink
          activityImg
          activityReview
        }
      }
    }
  }
`;
export const QUERY_ALL_USERS = gql`
  query allUsers {
    users {
      _id
      username
      email
      trips 
    }
  }
`;
export const QUERY_TRIPS = gql`
  query getTrips {
    trips {
      _id
      tripTitle
      tripCountry
      tripCity
      tripDesc
      tripDuration
      createdAt
      tripImg

    }
  }
`;

export const QUERY_SINGLE_TRIP = gql`
  query getSingleTrip($tripId: ID!) {
    trip(tripId: $tripId){
      _id
      tripCountry
      tripTitle
      tripCity
      tripDesc
      tripDuration
      createdAt
      tripImg
      comments {
        _id
        commentText
        createdAt
      }
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