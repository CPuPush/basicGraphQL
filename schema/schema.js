const { buildSchema } = require('graphql');
const GetMessage = require('./GetMessage');
let Schema = buildSchema(`
  type Query {
    getMessage: [GetMessage]
  }
  type Mutation {
    createMessage(id: Int!, author: String!, content: String!, to: String!): String
  }
  ${GetMessage}

`);

module.exports = Schema;