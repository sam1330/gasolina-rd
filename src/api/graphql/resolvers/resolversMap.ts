import characterResolver from "./characterResolver";
import establishmentResolver from "./establishmentResolver";
import gameResolver from "./gameResolver";
import gasTypeResolver from "./gasTypeResolver";

const resolvers = {
  Query: {
    ...characterResolver,
    ...gameResolver,
    ...establishmentResolver,
    ...gasTypeResolver
  },
};

export default resolvers;
