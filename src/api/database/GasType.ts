import { IGasType } from "../types/GasTypeType";
import Connection from "./Connection";

class GasType {
    private constructor(
    ) {
    }

    public static async getGasTypes(): Promise<Array<IGasType>> {
        const [gasTypes] = await Connection.instance.query(`SELECT * FROM gas_types;`);

        return gasTypes as Array<IGasType>;
    }
}

export default GasType;