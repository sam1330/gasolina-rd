import { mergeTypeDefs } from '@graphql-tools/merge';
import characterType from './characterType.graphql';
import gameType from './gameType.graphql';
import establishmentType from './establishmentType.graphql';
import gasType from './gasType.graphql';
import testResult from './testResult.graphql';
import city from './city.graphql';
 
const types = [characterType, gameType, establishmentType, gasType, testResult, city];
 
export const schemas = mergeTypeDefs(types);