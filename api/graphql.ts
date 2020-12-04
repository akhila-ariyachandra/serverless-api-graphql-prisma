import { ApolloServer } from "apollo-server-micro";

import typeDefs from "../src/graphql/schema";
import resolvers from "../src/graphql/resolvers";

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});

export default apolloServer.createHandler({ path: "/api/graphql" });
