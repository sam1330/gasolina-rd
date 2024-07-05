import { mergeTypeDefs } from '@graphql-tools/merge';
import characterType from './characterType.graphql';
import gameType from './gameType.graphql';
import establishmentType from './establishmentType.graphql';
 
const types = [characterType, gameType, establishmentType];
 
export const schemas = mergeTypeDefs(types);