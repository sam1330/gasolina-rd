import {makeExecutableSchema} from "graphql-tools";
import {GraphQLSchema} from "graphql";
import 'graphql-import-node';
import {schemas} from "./schemas";
import resolvers from "./resolvers/resolversMap";

export const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs: schemas,
    resolvers
});