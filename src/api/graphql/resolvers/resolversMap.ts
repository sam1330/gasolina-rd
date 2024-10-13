import characterResolver from "./characterResolver";
import cityResolver from "./cityResolver";
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
    ...testResultResolver.Query,
    ...cityResolver
  },
  Mutation: {
    ...testResultResolver.Mutation
  }
};

export default resolvers;
