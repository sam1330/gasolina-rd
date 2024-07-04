import { mergeTypeDefs } from '@graphql-tools/merge';
import characterType from './characterType.graphql';
import gameType from './gameType.graphql';
 
const types = [characterType, gameType];
 
export const schemas = mergeTypeDefs(types);