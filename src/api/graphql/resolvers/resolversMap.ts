import characterResolver from "./characterResolver";
import gameResolver from "./gameResolver";

const resolvers = {
  Query: {
    ...characterResolver,
    ...gameResolver
  },
};

export default resolvers;
