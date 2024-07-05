import characterResolver from "./characterResolver";
import establishmentResolver from "./establishmentResolver";
import gameResolver from "./gameResolver";

const resolvers = {
  Query: {
    ...characterResolver,
    ...gameResolver,
    ...establishmentResolver,
  },
};

export default resolvers;
