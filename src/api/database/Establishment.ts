import { IEstablishment } from "../types/EstablishmentType";
import Connection from "./Connection";


class Establishment {
    public name: string = '';
    public address: string = '';

    private constructor(
    ) {
    }

    public static getEstablishments(): Array<IEstablishment> {
        let establishments: Array<IEstablishment> = [];

        Connection.instance.connect();
        Connection.instance.query(`SELECT * FROM establishments;`, (err: any, result: Array<IEstablishment>) => {
            if (err) {
                console.log(err);
            } else {
                establishments = result;
                console.log(result);
            }
        });
        Connection.instance.disconnect();

        return establishments;
    }
}

export default Establishment;