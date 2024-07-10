import GasType from "../../database/GasType";
import { IGasType } from "@/api/types/GasTypeType";


const gasTypeResolver = {
    gas_types: (): Promise<IGasType[]> => {
        return GasType.getGasTypes();
    },
};

export default gasTypeResolver;