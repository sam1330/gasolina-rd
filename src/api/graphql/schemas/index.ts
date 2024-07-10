import { mergeTypeDefs } from '@graphql-tools/merge';
import characterType from './characterType.graphql';
import gameType from './gameType.graphql';
import establishmentType from './establishmentType.graphql';
import gasType from './gasType.graphql';
 
const types = [characterType, gameType, establishmentType, gasType];
 
export const schemas = mergeTypeDefs(types);