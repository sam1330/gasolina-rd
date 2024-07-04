import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import express from "express";
import cors from "cors";

import { schema } from "./graphql/index";

const app = express();
app.use(cors());

const server = new ApolloServer({
  schema,
  introspection: true,
});

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(` Server ready at ${url}`);
}

startServer();