const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const Schema = require('./schema/schema')
const root = require('./root/root');
const app = express();
const PORT = 8080;

app.use('/graphql', graphqlHTTP({
  schema: Schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/graphql`);
});
/* //! how to run
mutation create{
  createMessage(id:1,author:"fori okto", content:"this is my love angel", to:"indamayani")
}
query getMessage{
  getMessage {
    id
    author
    content
    to
  }
}

*/