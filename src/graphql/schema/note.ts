import { gql } from "apollo-server-micro";

export default gql`
  extend type Query {
    getAllNotes: [Note!]
    getNote(id: ID!): Note
  }

  extend type Mutation {
    saveNote(title: String!, content: String!): Note!
    deleteNote(id: ID!): Note
  }

  type Note {
    id: ID!
    title: String!
    content: String!
    date: DateTime!
  }
`;
