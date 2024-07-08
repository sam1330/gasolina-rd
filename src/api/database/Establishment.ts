import { IEstablishment } from "../types/EstablishmentType";
import Connection from "./Connection";


class Establishment {
    public name: string = '';
    public address: string = '';

    private constructor(
    ) {
    }

    public static async getEstablishments(): Promise<Array<IEstablishment>> {
        const [establishments] = await Connection.instance.query(`SELECT * FROM establishments;`);
        return establishments as Array<IEstablishment>;
    }
}

export default Establishment;