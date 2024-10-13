import { ICity } from "../types/CityType";
import Connection from "./Connection";


class City {
    private constructor(
    ) {
    }

    public static async getCities(): Promise<Array<ICity>> {
        const [cities] = await Connection.instance.query(`SELECT * FROM cities;`);

        return cities as Array<ICity>;
    }
}

export default City;