import { gql } from '@apollo/client';

export const QUERY_REACTIONS = gql`
  query reactions($username: String) {
    reactions(username: $username) {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
      }
    }
  }
`;


export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      book {
        _id
        username
      }
    }
  }
`;