import characterResolver from "./characterResolver";
import establishmentResolver from "./establishmentResolver";
import gameResolver from "./gameResolver";
import gasTypeResolver from "./gasTypeResolver";
import testResultResolver from "./testResultResolver";

const resolvers = {
  Query: {
    ...characterResolver,
    ...gameResolver,
    ...establishmentResolver,
    ...gasTypeResolver,
    ...testResultResolver.Query
  },
  Mutation: {
    ...testResultResolver.Mutation
  }
};

export default resolvers;
