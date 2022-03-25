const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Book {
        bookId: ID
        authors: String
        description: String
        title: String
        image: img
        link: link
    }
    type Auth {
        _id: ID
        replyBody: String
        createdAt: String
        username: String
    }
    type Query {
        me: User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        saveBook(author: String!, description: String!, title: String!, bookId: ID!, image: Img!, link: String!): User
        addUser(reactionId: ID!, replyBody: String!): Auth
        removeBook(bookId: ID!): User
    }
    type Auth {
        token: ID!
        user: User
    }
`;

// export typeDefs
module.exports = typeDefs;